import { LngLatBoundsLike, LngLatLike, Map } from "mapbox-gl";
import { ONSFullScreenControl, ONSResetControl, ONSZoomInControl, ONSZoomOutControl } from "./controls";

export interface IMapComponentOptions {
    /** Either url or path name */
    readonly style: string;
    /** geolocation coordinates as a starting location for the map display. */
    /** If you are experiencing a jerky `flyTo` transition, start with a tested. */
    /** & working value of `[-1.2471735, 50.8625412]`. */
    readonly center: LngLatLike;
    /** Optional - default 6 */
    zoom?: number;
    /** Set if your remote tile server requires a public access token. */
    readonly token: string;
    /** The element id of the map container */
    readonly mapID?: string;
    /** Default false. Set to true for geoloation debugging logs  */
    readonly debug?: boolean;
}
/**
 *  You must install & call mapbox-gl as a peer dependency before instantiatint `MapComponent`.
 * @example
 * ```
 *  npm i -S mapbox-gl
 * ```
 *
 * And then import before importing this library.
 * @example
 * ```
 * import "mapbox-gl";
 * import { MapComponent as _MapComponent } from "dp-maps";
 * ```
 *
 * To create an Ordnance Survey map component, pass the following options to the {@link MapComponent} class.
 * @example
 * ```
 *   const options = {
 *       style: "mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g",
 *       center: [51.42133794405771, -0.14646169096877365] as any,
 *       zoom: 6,
 *       token: process.env.MAPBOX_ACCESS_TOKEN,
 *       mapID: "map",
 *   }
 *   const map = new _MapComponent(options);
 *   map.init();
 * ```
 *
 * Define a HTML elements with an id value `map`.
 * @example
 * ```
 *   <divid="map">
 *          <div class="ons-map-control">
 *            <!-- controls... -->
 *          </div>
 *   </div>
 * ```
 *
 * To add a control, add a `button` element & a child element to render your icon. Buttons need
 * to be added to an element with a `.ons-ctrl-group` class name. You can add as many controls
 * as required in each group.
 * @example
 * ```
 * <div class="ons-ctrl-group">
 *     <button class="ons-ctrl-zoom-in">
 *        <span class="mapboxgl-ctrl-icon"></span>
 *     </button>
 *    <button class="ons-ctrl-zoom-in">
 *        <span class="mapboxgl-ctrl-icon"></span>
 *    </button>
 * </div>
 * ```
 *
 *  Example shows a map component with the 4 currently available controls.
 * @example
 * ```
 *  <div id="map">
 *       <div class="ons-map-control">
 *           <div class="ons-ctrl-group">
 *               <button class="ons-ctrl-zoom-in">
 *                   <span class="mapboxgl-ctrl-icon"></span>
 *               </button>
 *               <button class="ons-ctrl-reset">
 *                   <span class="mapboxgl-ctrl-icon"></span>
 *               </button>
 *               <button class="ons-ctrl-zoom-out">
 *                   <span class="mapboxgl-ctrl-icon"></span>
 *               </button>
 *           </div>
 *           <div class="ons-ctrl-group">
 *               <button class="ons-ctrl-fullscreen">
 *                   <span class="mapboxgl-ctrl-icon"></span>
 *               </button>
 *           </div>
 *       </div>
 *   </div>
 * ```
 */
export class MapComponent {
    /** MapboxGL's main Map class */
    public readonly map: Map;
    /** Map bounds  */
    public readonly bounds: LngLatBoundsLike = [
        [-7.9454024125535625, 48.95006696529006], // south-west
        [2.549589409450192, 60.86791183866015] // north-west
    ];
    public readonly style: string;
    /** geolocation coordinates as a starting location for the map display  */
    public readonly center: LngLatLike;
    /** Optional - default 6 */
    public zoom: number;
    /** The element id of the map container */
    public readonly mapID: any;
    /** Default false. Set to true for geoloation debugging logs  */
    public debug: boolean = false;

    constructor(options: IMapComponentOptions) {
        const { style, center, zoom = 6, token, mapID, debug = false } = options;
        this.style = style;
        this.center = center;
        this.zoom = zoom;
        this.mapID = mapID;
        this.debug = debug;
        this.map = new Map({
            container: this.mapID,
            style: this.style,
            center: this.center,
            zoom: this.zoom,
            attributionControl: false,
            maxBounds: this.bounds,
            accessToken: token,
        });
        this.settings();
    }

    /**
     * @desciption Initiates a map component.
     * @example
     * ```
     *   const options = { .. }
     *   const map = new MapComponent(options);
     *   map.init();
     * ```
     */
    public init(): void {
        this.addControls();
        this.addEvents();
    }

    private addControls(): void {
        const onsZoomInControl = new ONSZoomInControl(this.map, ".ons-ctrl-zoom-in");
        onsZoomInControl.setup();
        const onsZoomOutControl = new ONSZoomOutControl(this.map, ".ons-ctrl-zoom-out");
        onsZoomOutControl.setup();
        const onsResetControl = new ONSResetControl(
            this.map, ".ons-ctrl-reset",
            "mapboxgl-ctrl-icon--disabled",
            this.center, this.zoom,
        );
        onsResetControl.setup();
        const onsFullScreenControl = new ONSFullScreenControl(this.map, ".ons-ctrl-fullscreen", "mapboxgl-ctrl-icon--fullscreen");
        onsFullScreenControl.setup();
    }

    private addEvents(): void {
        this.map.on("load", () => {
            // Resize map to as setting the height and width in css distorts the ratio of the map
            this.map.resize();
        });

        this.map.on("move", () => {
            if (this.debug) {
                console.debug("center: ", this.map.getCenter());
                console.debug("zoom: ", this.map.getZoom());
            }
        });
    }

    private settings(): void {
        this.map.dragRotate.disable();
        this.map.touchZoomRotate.disableRotation();
    }
}
