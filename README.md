# dp-maps-js
Reusable map component with support for Ordnance Survey tiles.

### Getting started

#### Installation

First snstall the [mapbox-gl](https://docs.mapbox.com/) peer dependency:
```bash
 npm i -S mapbox-gl
```

Install dp-maps-js library:
```bash
 npm i -S dp-maps-js
```

Read the [docs](https://onsdigital.github.io/dp-maps-js).
# Usage
Create an HTML element with a `map` id & include the following markup:
```html
<div id="map">
    <div class="ons-map-control">
        <div class="ons-ctrl-group">
            <button class="ons-ctrl-zoom-in">
                <span class="mapboxgl-ctrl-icon"></span>
            </button>
        </div>
    </div>
</div>
```
Make sure that you have installed the `mapbox-gl` library & imported it before importing the `dp-maps` module:
```typescript
import "mapbox-gl";
import { MapComponent as _MapComponent } from "dp-maps";

```
For `IMapComponentOption` details see [https://onsdigital.github.io/dp-maps/interfaces/IMapComponentOptions.html](https://onsdigital.github.io/dp-maps-js/interfaces/IMapComponentOptions.html)
```typescript
const options = {
    style: "mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g",
    center: [51.42133794405771, -0.14646169096877365],
    zoom: 6,
    token: process.env.MAPBOX_ACCESS_TOKEN,
    mapID: "map",
}
const map = new _MapComponent(options);
map.init();
```
#### Add bounds
To add custom boundaries, use the `bounds` option. If the bounds come in a serialized
form the use the `unMarshalBounds` function to unserialize. For example:
```
const bounds = MapComponent.unMarshalBounds(bounds);
const options = { bounds, .etc... }
const map = new _MapComponent(options);
map.init();
```
#### Styling
You can override the default (see below) styles for the `div#map` element.
```
#map {
    width: 100%;
    max-height: 464px;
    @media screen and (min-width: 740px) {
        width: 464px;
        height: 464px;
        display: block;
    }
}
```

* Run `make debug`

### Dependencies

* webbox-gl

### Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for details.

### License

Copyright © 2022, Office for National Statistics (https://www.ons.gov.uk)

Released under MIT license, see [LICENSE](LICENSE.md) for details.

