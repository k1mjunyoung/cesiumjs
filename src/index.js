import {
  Viewer,
  Cartesian3,
  Math,
  Terrain,
  createOsmBuildingsAsync,
  IonImageryProvider,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";

// CesiumJS has a default access token built in but it's not meant for active use.
// please set your own access token can be found at: https://cesium.com/ion/tokens.
// Ion.defaultAccessToken = "YOUR TOKEN HERE";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  terrain: Terrain.fromWorldTerrain(),
});

const layer = viewer.imageryLayers.addImageryProvider(
  await IonImageryProvider.fromAssetId(2),
);

// Add Cesium OSM Buildings, a global 3D buildings layer.
const osmBuildingsTileset = await createOsmBuildingsAsync();
viewer.scene.primitives.add(osmBuildingsTileset);

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(127.028, 37.496, 400),
  orientation: {
    heading: Math.toRadians(0.0),
    pitch: Math.toRadians(-45.0),
  },
});