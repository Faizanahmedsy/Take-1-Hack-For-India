// import React, { useEffect } from "react";

// const MapSearchComponent = () => {
//   useEffect(() => {
//     const loadMapScript = () => {
//       const script = document.createElement("script");
//       script.src =
//         "https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.js";
//       script.async = true;
//       script.onload = () => {
//         // Initialize the map search once the script is loaded
//         placeSearch({
//           //   key: "8nIoYUx9GyjZsdehJySzjprSvZIqgM42",
//           key: "YcWXrnrLPbjWalPtzYdvo2pkjOeczhMi",
//           container: document.querySelector("#search-input"),
//           useDeviceLocation: true,
//           collection: ["poi", "airport", "address", "adminArea"],
//         });
//       };

//       document.head.appendChild(script);
//     };

//     // Load the map script when the component mounts
//     loadMapScript();
//   }, []);

//   return (
//     <div style={{ border: 0, margin: "40px" }}>
//       <input type="search" id="search-input" placeholder="Start Searching..." />
//     </div>
//   );
// };

// export default MapSearchComponent;

import React, { useEffect } from "react";
import { Form, Input } from "antd";

const MapSearchComponent = () => {
  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.js";
      script.async = true;
      script.onload = () => {
        // Initialize the map search once the script is loaded
        placeSearch({
          key: "YcWXrnrLPbjWalPtzYdvo2pkjOeczhMi",
          container: document.querySelector("#search-input"),
          useDeviceLocation: true,
          collection: ["poi", "airport", "address", "adminArea"],
        });
      };

      document.head.appendChild(script);
    };

    // Load the map script when the component mounts
    loadMapScript();
  }, []);

  return (
    <div style={{ border: 0, margin: "40px" }}>
      <Form>
        <Form.Item label="Start Searching...">
          <Input id="search-input" placeholder="Start Searching..." />
        </Form.Item>
      </Form>
    </div>
  );
};

export default MapSearchComponent;
