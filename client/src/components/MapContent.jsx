import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapContent() {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    setPosition([33.75802053519801, -84.39615273715765]);
  }, []);

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100wh", height: "22.5vh" }}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=PbI47Jfo6miMbKKlBtFz"
        />
        <div style={{ height: "218px", width: "100%" }}></div>
        <Marker position={position}>
          <Popup>Stadium Position</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default MapContent;
