import React, { useEffect, useState } from "react";

import GoogleMapReact from "google-map-react";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

function MapContent() {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    setPosition([33.75816322220957, -84.39465060528987]);
  }, []);

  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLE_API_KEY,
        }}
        defaultCenter={position}
        defaultZoom={16}
      ></GoogleMapReact>
    </>
  );
}

export default MapContent;
