// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// function MapComponent() {
//   const [locations, setLocations] = useState([]);

//   //   useEffect(() => {
//   //     // Fetch your geolocation data here (replace with your API endpoint)
//   //     axios
//   //       .get("YOUR_API_ENDPOINT")
//   //       .then((response) => {
//   //         setLocations(response.data);
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching geolocation data:", error);
//   //       });
//   //   }, []);

//   const Map = withGoogleMap(() => (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 51.505, lng: -0.09 }} // Set initial center coordinates
//     >
//       {locations.map((location, index) => (
//         <Marker
//           key={index}
//           position={{ lat: location.lat, lng: location.lng }}
//           icon={{
//             path: window.google.maps.SymbolPath.CIRCLE,
//             fillColor: location.color,
//             fillOpacity: 1,
//             scale: 8,
//             strokeWeight: 0,
//           }}
//         />
//       ))}
//     </GoogleMap>
//   ));

//   return (
//     <div style={{ height: "500px", width: "100%" }}>
//       <Map
//         containerElement={<div style={{ height: "100%" }} />}
//         mapElement={<div style={{ height: "100%" }} />}
//       />
//     </div>
//   );
// }

// export default MapComponent;
