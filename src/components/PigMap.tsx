import React from "react";
import { Map, Marker, Overlay } from "pigeon-maps";

export function PigMap() {
  return (
    <Map height={300} defaultCenter={[51.7963234, 19.4386925]} defaultZoom={15}>
      {/* <Marker width={50} anchor={[51.7963234, 19.4386925]} /> */}
      <Overlay anchor={[51.7963234, 19.4386925]} offset={[20, 40]}>
        <img src="marker-white.png" width={40} alt="" />
      </Overlay>
    </Map>
  );
}
