import { IMapComponentOptions, MapComponent } from "../src/ts/map";
import { createDOM } from "./helpers";

jest.mock("mapbox-gl", () => ({
    Map: jest.fn().mockImplementation((state) => {
            console.log(state);
        return {
            dragRotate: {
                disable: jest.fn(),
            },
            touchZoomRotate: {
                disableRotation: jest.fn(),
            },
            on: jest.fn(),
        };
    }),
}));

describe("map", () => {
    describe("#MapComeponent()", () => {
        test("#init() should return expected result", () => {
            document.body.innerHTML = createDOM(document);
            const options: IMapComponentOptions = {
                style: "",
                center: [-7.9454024125535625, 48.95006696529006], // north-west],
                token: ""
            }
            const mapComponent = new MapComponent(options);
            const mapComponentSpy = jest.spyOn(mapComponent, "init");
            mapComponent.init();
            expect(mapComponentSpy).toBeCalled();
        });
    });
});
