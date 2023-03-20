import React from "react";
import { Map, Marker } from "pigeon-maps";

export function PigMap() {
  return (
    <Map height={300} defaultCenter={[51.7963234, 19.4386925]} defaultZoom={11}>
      <Marker width={50} anchor={[51.7963234, 19.4386925]} />
    </Map>
  );
}
