export function createDOM(document) {
    return `<div class="margin-top-sm--5 margin-top-md--8 margin-top-lg--8" id="map">
        <div class="ons-map-control">
            <div class="ons-ctrl-group">
                <button class="ons-ctrl-zoom-in">
                    <span class="mapboxgl-ctrl-icon"></span>
                </button>
                <button class="ons-ctrl-reset">
                    <span class="mapboxgl-ctrl-icon"></span>
                </button>
                <button class="ons-ctrl-zoom-out">
                    <span class="mapboxgl-ctrl-icon"></span>
                </button>
            </div>
            <div class="ons-ctrl-group">
                <button class="ons-ctrl-fullscreen">
                    <span class="mapboxgl-ctrl-icon"></span>
                </button>
                </div>
            </div>
        </div>`;
}


export function mockMapFactory() {
    function Map() {}
    Map.prototype.zoomIn = jest.fn();
    Map.prototype.zoomOut = jest.fn();
    Map.prototype.flyTo = jest.fn();
    Map.prototype.on = jest.fn();
    return new Map();
}
