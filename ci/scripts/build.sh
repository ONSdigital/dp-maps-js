#!/bin/bash -eux

pushd dp-maps-js
  make build
popd

# copy the artifacts to the target we run bucket sync from
cp -r dp-maps-js/lib/* build/

# copy the artifacts to the target we run npm publish from
cp -r dp-maps-js/ package/
