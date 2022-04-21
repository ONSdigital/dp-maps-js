import { LngLatBoundsLike } from "mapbox-gl";
import { IMapComponentOptions, MapComponent, _DEFAULT_BOUNDS } from "../src/ts/map";
import { createDOM, mockMapFactory } from "./helpers";
import * as boundJSONres from "./hartlepool-bounds.json";

const TEST_BOUNDS = `[[[-4.034106098364683,51.65910228788033],
[-4.034126224128561,51.65955162358695],
[-4.033403611497793,51.65956413805225],
[-4.033423727016852,51.66001338411314],
[-4.034146346367034,51.66000086939424],
[-4.034166468702245,51.66045010617287],
[-4.034888848938035,51.66043759134119],
[-4.035611228930962,51.66042507237591],
[-4.036333723995822,51.66041254696704],
[-4.036313580886132,51.65996331087219]]]`;

(global as any).fetch = jest.fn(() => Promise.resolve(boundJSONres));

jest.mock("mapbox-gl", () => ({
    Map: jest.fn().mockImplementation((state) => {
        return {
            dragRotate: {
                disable: jest.fn(),
            },
            touchZoomRotate: {
                disableRotation: jest.fn(),
            },
            resize: jest.fn(),
            getCenter: jest.fn(),
            getBounds: jest.fn(),
            getZoom: jest.fn(),
            setMaxBounds: jest.fn(),
            on: (type, callback) => {
                callback();
            },
        };
    }),
}));

describe("#MapComeponent()", () => {
    describe("#init() ", () => {

        test("should return expected result", () => {
            document.body.innerHTML = createDOM(document);
            const options: IMapComponentOptions = {
                style: "",
                center: [-7.9454024125535625, 48.95006696529006],
                token: ""
            }
            const mapComponent = new MapComponent(options);
            const mapComponentSpy = jest.spyOn(mapComponent, "init");
            mapComponent.init();
            expect(mapComponentSpy).toBeCalled();
        });
        test("should handle options bounds", () => {
            document.body.innerHTML = createDOM(document);
            const options: IMapComponentOptions = {
                style: "",
                center: [-7.9454024125535625, 48.95006696529006],
                token: "",
                bounds: MapComponent.unMarshalBounds(TEST_BOUNDS),
            }
            const expected: LngLatBoundsLike = [
                [-4.034106098364683,51.65910228788033],
                [-4.036313580886132,51.65996331087219],
            ];
            const mapComponent = new MapComponent(options);
            const mapComponentSpy = jest.spyOn(mapComponent, "init");
            mapComponent.init();
            expect(mapComponentSpy).toBeCalled();
            expect(mapComponent.bounds).toEqual(expected);
        });
        test("that setBoundsFromGeoData is called", () => {
            document.body.innerHTML = createDOM(document);
            const options: IMapComponentOptions = {
                style: "",
                center: [-7.9454024125535625, 48.95006696529006],
                token: "",
                geoDataURL: "<GEO_DATA_URL>",
            };
            const mapComponent = new MapComponent(options);
            const mapComponentSpy = jest.spyOn(mapComponent, "setBoundsFromGeoData" as any);
            mapComponent.init();
            expect(mapComponentSpy).toBeCalled();
        });
        test("that setBoundsFromGeoData is NOT called", () => {
            document.body.innerHTML = createDOM(document);
            const options: IMapComponentOptions = {
                style: "",
                center: [-7.9454024125535625, 48.95006696529006],
                token: "",
            };
            const mapComponent = new MapComponent(options);
            const mapComponentSpy = jest.spyOn(mapComponent, "setBoundsFromGeoData" as any);
            mapComponent.init();
            expect(mapComponentSpy).not.toHaveBeenCalled();
        });
    });
    describe("#unMarshalBounds()", () => {
        test("the correct LngLatBoundsLike type is returned", () => {
            const expected: LngLatBoundsLike = [
                [-4.034106098364683,51.65910228788033],
                [-4.036313580886132,51.65996331087219],
            ];
            const actual = MapComponent.unMarshalBounds(TEST_BOUNDS);
            expect(actual).toEqual(expected);
        });
        test("that if validation fails for LngLatBoundsLike type then the correct default is returned", () => {
            const bounds = `[[-4.034106098364683,51.65910228788033],
            [-4.036313580886132,51.65996331087219]]`;
            const expected: LngLatBoundsLike = _DEFAULT_BOUNDS;
            const actual = MapComponent.unMarshalBounds(bounds);
            expect(actual).toEqual(expected);
        });
    });
    describe("#setBounds()", () => {
        test("bounds of type [LngLatLike, LngLatLike] are returned correctly", () => {
            const actual = MapComponent.setBounds([1, 2], [3, 4]);
            expect(actual).toEqual([[1, 2], [3, 4]]);
        });
        
    });
});
