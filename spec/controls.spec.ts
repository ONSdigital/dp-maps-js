import { createDOM, mockMapFactory } from "./helpers";
import { 
    ONSZoomInControl, 
    ONSZoomOutControl,
    ONSResetControl, 
    ONSFullScreenControl,
} from "../src/ts/controls"
import { MapState } from "../src/ts/context";

describe("controls", () => {
    describe("#ONSZoomInControl()", () => {
        test("#onClick() should alter the DOM", () => {
            document.body.innerHTML = createDOM(document);
            const map = mockMapFactory();
            const onsZoomInControl = new ONSZoomInControl(map, ".ons-ctrl-zoom-in");
            onsZoomInControl.setup();
            const button = document.querySelector(".ons-ctrl-zoom-in");
            button?.dispatchEvent(new MouseEvent("click", {shiftKey: true}));
        });
    });
    describe("#ONSZoomOutControl()", () => {
        test("#onClick()", () => {
            document.body.innerHTML = createDOM(document);
            const map = mockMapFactory();
            const onsZoomOutControl = new ONSZoomOutControl(map, ".ons-ctrl-zoom-out");
            onsZoomOutControl.setup();
            onsZoomOutControl.onClick({} as Event);
            const button = document.querySelector(".ons-ctrl-zoom-out");
            button?.dispatchEvent(new MouseEvent("click", {shiftKey: true}));
        });
    });
    describe("#ONSResetControl()", () => {

        test("#onClick()", () => {
            document.body.innerHTML = createDOM(document);
            const map = mockMapFactory();
            const onsResetControl = new ONSResetControl(map, ".ons-ctrl-reset", "mapboxgl-ctrl-icon--disabled", [1,1], 6);
            onsResetControl.setup();
            // onsResetControl.onClick({} as Event);
            const button = document.querySelector(".ons-ctrl-zoom-in");
            button?.dispatchEvent(new MouseEvent("click", {shiftKey: true}));
            const result = onsResetControl.iconElement.className;
            expect(result).toEqual("mapboxgl-ctrl-icon mapboxgl-ctrl-icon--disabled")
        });

    });
    describe("#ONSFullScreenControl()", () => {
        xtest("#onClick()", () => {
            document.body.innerHTML = createDOM(document);
            const controls = require("../src/ts/controls");
            const map = mockMapFactory();
            const onsFullScreenControl = new controls.ONSFullScreenControl(map, ".ons-ctrl-fullscreen", "mapboxgl-ctrl-icon--fullscreen");
            onsFullScreenControl.setup();
            const button = document.querySelector(".ons-ctrl-fullscreen");
            button?.dispatchEvent(new MouseEvent("click", {shiftKey: false}));
            const result = onsFullScreenControl.iconElement.className;
            expect(result).toEqual("mapboxgl-ctrl-icon");
        });
    });
});
