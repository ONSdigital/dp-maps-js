import { LngLatLike, Map } from "mapbox-gl";
import { MapState } from "./context";

 /** @internal */
export interface IONSControl {
    map: Map;
    btnSelector: string;
    btnClickedSelctor?: string;
    onClick: (e: Event) => void;
}

 /** @internal */
abstract class ONSControl  {
    public btnSelector: string;
    public btnClickedSelctor: string;
    public button!: HTMLButtonElement;
    public iconElement!: HTMLElement;
    public map: Map;
    public state = new MapState();

    constructor(map: Map, btnSelector: string, btnClickedSelctor: string = "") {
       this.map = map;
       this.btnSelector = btnSelector;
       if (typeof this.btnSelector === "undefined") {
           throw new Error(`ONSZoomInControl - button selector '${this.btnSelector}' is undefined`);
       }
        this.btnClickedSelctor = btnClickedSelctor;
    }

    public setup(): void {
        // button
       this.button = document.querySelector(this.btnSelector) as HTMLButtonElement;
       if (!this.button) {
           throw new Error(`ONSControl - Can't add event handler to non element with name ${this.btnSelector}!`);
       }
       this.button.addEventListener("click", this.onClick)
       // span.mapboxgl-ctrl-icon
       this.iconElement = this.button.querySelector(".mapboxgl-ctrl-icon") as HTMLElement;
       if (!this.iconElement) {
            console.error(`ONSControl - '.mapboxgl-ctrl-icon' element doesn't exist`);
       }
    }

   public abstract onClick(e: Event): void;

   public styleBtnDefault() {
       this.iconElement.className = "mapboxgl-ctrl-icon";
   }

   public styleBtnNonDefault() {
       this.iconElement.className = `mapboxgl-ctrl-icon ${this.btnClickedSelctor}`;
   }
}

 /** @internal */
export  class ONSZoomInControl extends ONSControl implements IONSControl {

    constructor(map: Map, btnSelector: string) {
        super(map, btnSelector);
    }

    public override onClick = (e: Event): void => {
       this.map.zoomIn({ duration: 1000 });
    }
}

 /** @internal */
export class ONSZoomOutControl extends ONSControl implements IONSControl {
    constructor(map: Map, btnSelector: string) {
        super(map, btnSelector);
    }

    public override onClick = (e: Event): void => {
       this.map.zoomOut({ duration: 1000 });
    }
 }

 /** @internal */
 export class ONSResetControl extends ONSControl implements IONSControl {
     center: LngLatLike;
     zoom: number;

    constructor(map: Map, btnSelector: string, btnClickedSelctor: string, center: LngLatLike, zoom: number) {
        super(map, btnSelector, btnClickedSelctor);
        this.center = center;
        this.zoom = zoom;
    }

    public override setup(): void {
        super.setup();
        this.button.disabled = true;
        this.styleBtnNonDefault();
        this.map.on("movestart", this.onMoveStart);
    }

    private onMoveStart = (): void => {
        // update reset btn default icon
        if (!this.state.context.hasMoved) {
            this.state.update({ hasMoved: false });
            this.button.disabled = false;
            this.styleBtnDefault();
        }
    }

    public override onClick = (e: Event): void => {
       this.map.flyTo({
            center: this.center,
            zoom: this.zoom,
            essential: true,
        });
       this.state.update({ hasMoved: false });
       this.styleBtnNonDefault();
    }
 }

 /** @internal */
 export class ONSFullScreenControl extends ONSControl implements IONSControl {
    constructor(map: Map, btnSelector: string, btnClickedSelctor: string = "") {
        super(map, btnSelector, btnClickedSelctor);
    }

    private openFullScreenMode(): void {
        const el = (this.map as any)._container; // TODO
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    }

    private static exitFullScreenMode(): void {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
            (document as any).msExitFullscreen();
        }
    }

    private static isInFullScreenMode(): boolean {
        return (
            document.fullscreenElement ||
            (document as any).webkitFullscreenElement ||
            (document as any).msFullscreenElement
        );
    }

    public override onClick = (e: Event): void => {
        if (ONSFullScreenControl.isInFullScreenMode()) {
            ONSFullScreenControl.exitFullScreenMode();
            this.button.className = "ons-ctrl-fullscreen";
        } else {
            this.openFullScreenMode();
            this.button.className = "ons-ctrl-shrink";
        }
    }
 }
