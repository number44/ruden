import React from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
const markerUrl = document.getElementById("map");

export function PigMap() {
  const dataMarkerValue = markerUrl
    ? markerUrl.getAttribute("data-marker")
    : "";

  return (
    <Map height={300} defaultCenter={[51.7963234, 19.4386925]} defaultZoom={15}>
      <Overlay anchor={[51.7963234, 19.4386925]} offset={[25, 50]}>
        <a href="https://www.google.com/maps/place/Gen.+Zygmunta+Sierakowskiego+69,+91-324+%C5%81%C3%B3d%C5%BA/@51.7963234,19.4361176,17z/data=!3m1!4b1!4m6!3m5!1s0x471bca93eee92d43:0x3d7e39fb8e930225!8m2!3d51.7963234!4d19.4386925!16s%2Fg%2F11bw3y004n?entry=ttu">
          <img src={dataMarkerValue ? dataMarkerValue : ""} width={50} alt="" />
        </a>
      </Overlay>
    </Map>
  );
}
