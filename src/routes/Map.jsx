import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Button } from "react-bootstrap";
import { significantTrees } from "../data/MBRC_Planning_Scheme_-_Heritage_Landscape_Significant_Trees";

const Map = () => {
  console.log(significantTrees);
  const treeFeatures = significantTrees.features;

  const position = [-27.281449, 152.9];

  return (
    <MapContainer id="map" center={position} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {treeFeatures.map((t) => {
        return (
          <Marker
            key={t.properties.OBJECTID}
            position={[t.geometry.coordinates[1], t.geometry.coordinates[0]]}
          >
            <Popup>
              <div>{t.properties.TREE_TYPE}</div>
              {t.properties.seen ? (
                <div>Seen: {t.properties.seen.toDateString()}</div>
              ) : null}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
