import { FitBoundsOptions, LngLatBoundsLike, LngLatLike, Map } from "mapbox-gl";
import { ONSFullScreenControl, ONSResetControl, ONSZoomInControl, ONSZoomOutControl } from "./controls";
import { request } from "./utils";

/** @internal **/
export const _DEFAULT_BOUNDS: [LngLatLike, LngLatLike] = [
    [-7.197902920595226, 49.80281964843661], // south-west
    [2.1939240880979014, 55.490707526676545] // north-west
];

export interface IboundsJSONSchema {
    features: {geometry: {coordinates: [[[LngLatBoundsLike]]]}}[];
}

export interface IMapPadding {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
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
    /** Default set to United Kingdom bounds. */
    /** Sets the bounding southwest and northeast points in longitude and latitude. */
    /** Expects a serialized string. See {@link MapComponent.setBounds}*/
    readonly bounds?: LngLatBoundsLike;
    /** The URL to that serves the geo data */
    readonly geoDataURL?: string;
    /** Sets the bounds top, bottom, left, right padding with a positive number & */
    /** reduces padding with a negative number. See {@link IMapPadding}. */
    readonly padding?: IMapPadding;
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
 *
 * To set bounds padding, use the {@link IMapPadding}. Each value accepts a number if positive will
 * increase the areas bounds & a negative number which decreases the area bounds.
 * @example
 * ```
 *   const padding: IMapPadding { top: 1, bottom: 1, left: -2, right: -1 };
 *   const options = {
 *       padding,
 *       // .etc ...
 *   }
 *   const map = new _MapComponent(options);
 *   map.init();
 * ```
 *
 * To set the max bounds from an endpoint serving a geo data file, use the
 * {@link IMapComponentOptions.geoDataURL} property with the URL serving a
 * geo data JSON file.
 * @example
 * ```
 * const options: IMapComponentOptions = {
        geoDataURL: "<GEO_DATA_URL>",
        // .etc ...
    };
 * ```
 */
export class MapComponent {
    /** MapboxGL's main Map class */
    public readonly map: Map;
    /** @internal */
    private _bounds!: LngLatBoundsLike;
    /** The default bounds returned if there are no bounds passed to the options or unmarshaling fails */
    private defaultBounds: [LngLatLike, LngLatLike];
    public readonly style: string;
    /** geolocation coordinates as a starting location for the map display  */
    public readonly center: LngLatLike;
    /** Optional - default 6 */
    public zoom: number;
    /** The element id of the map container */
    public readonly mapID: any;
    /** Default false. Set to true for geoloation debugging logs  */
    public debug: boolean = false;

    public readonly geoDataURL?: string;

    constructor(options: IMapComponentOptions) {
        const { style, center, zoom = 6, token, mapID, debug = false, bounds, geoDataURL, padding } = options;
        this.defaultBounds = _DEFAULT_BOUNDS;
        this.style = style;
        this.center = center;
        this.zoom = zoom;
        this.mapID = mapID;
        this.debug = debug;
        this.bounds = bounds;
        this.geoDataURL = geoDataURL;
        this.map = new Map({
            container: this.mapID,
            style: this.style,
            center: this.center,
            zoom: this.zoom,
            attributionControl: false,
            maxBounds: this.bounds,
            accessToken: token,
            fitBoundsOptions: this.setBoundsOptions(padding),
        });
    }

    get bounds() {
        return this._bounds;
    }

    set bounds(val: LngLatBoundsLike | undefined) {
        if (!val) {
            this._bounds = this.defaultBounds;
        } else {
            this._bounds = val;
        }
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
        if (typeof this.geoDataURL !== "undefined") {
            this.setBoundsFromGeoData(this.geoDataURL);
        }
        this.settings();
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
            // Debuging
            this.log(`center: ${this.map.getCenter()}`);
            this.log(`bounds: ${this.map.getBounds()}`);
            this.log(`zoom: ${this.map.getZoom()}`);
        });
    }

    private settings(): void {
        this.map.dragRotate.disable();
        this.map.touchZoomRotate.disableRotation();
    }

    /**
     * @description Unmarshals multi-dimensional array string to LngLatBoundsLike type
     * & returns the southwest and northeast points in longitude and latitude.
     * Expects that a 2 deep nested array - eg. `[[ [LngLatLike, LngLatLike] ]]`
     * @example
     * ```
     * const bounds = MapComponent.unMarshalBounds(bounds);
     * const options = { bounds, .etc.. };
     * ```
     * @param bounds See {@link https://docs.mapbox.com/mapbox-gl-js/api/geography/#lnglatboundslike }
     * @param debug Optional, default is false - logs the unserialized bounds.
     */
    public static unMarshalBounds(bounds: string, debug: boolean = false): [LngLatLike, LngLatLike] {
        try {
            let b = bounds.split("[[")[1];
            if (b[0] !== "[") {
                throw new Error(`Expected an unserialized type of [[ [LngLatLike, LngLatLike] ]] but got ${bounds}`);
            }
            b = b.split("]]")[0];
            b = b.replace(/\s/g, "");
            b = b.replace(/[\[\]]/g, "");
            const bnds = b.split(",");
            const south: number = +bnds[0];
            const west: number = +bnds[1];
            const north: number = +bnds[bnds.length -2];
            const east: number = +bnds[bnds.length - 1];
            if (debug) {
                console.debug(`Unserialized bounds: ${JSON.stringify([[south, west], [north, east]])}`);
            }
            return [[south, west], [north, east]];
        } catch(err: unknown) {
            console.error("Failed to unMarshal bounds: ",err);
            return _DEFAULT_BOUNDS;
        }
    }

    /**
     * @example
     * Returns the correct `[LngLatLike, LngLatLike]` type expected
     * by the `bounds` property on {@link IMapComponentOptions}
     * ```
     * let bounds = MapComponent.setBounds([-5.5, 58.5], [-0.3,  51.9])
     * ```
     * Otherwise set the {@link IMapComponentOptions.bounds} directly with value of `LngLatBoundsLike` type.
     * @param southWest
     * @param northWest
     * @returns {[LngLatLike, LngLatLike]}
     */
    public static setBounds(southWest: LngLatLike, northWest: LngLatLike): [LngLatLike, LngLatLike] {
        return [southWest, northWest];
    }

    private setBoundsFromGeoData(geoDataFileURL: string) {
        request(geoDataFileURL)
            .then((res: IboundsJSONSchema) => {
                const coordinates: LngLatBoundsLike[] = res.features[0].geometry.coordinates[0][0];
                const southWest = coordinates[0] as LngLatLike;
                const northWest = coordinates[3] as LngLatLike;
                this.log(`Setting bounds from ${[southWest, northWest]}`);
                this.map.on("load", () => {
                    this.map.setMaxBounds([southWest, northWest]);
                });
            })
            .catch((err: unknown) => console.error(err));
    }

    private log(msg: string) {
        if (this.debug) {
            console.debug(msg)
        }
    }

    private setBoundsOptions(padding?: IMapPadding): FitBoundsOptions {
        return padding ? { padding } : {};
    }

}
