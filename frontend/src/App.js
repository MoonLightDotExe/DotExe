import { useLoadScript } from "@react-google-maps/api";
import Map from "./pages/Map";
// import "./styles.css";

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCkIdp1ZbRPtNQ0vZuJgpx8pdlmTrKWts4" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}
