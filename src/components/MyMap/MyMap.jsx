import React from "react";
import AppLayout from "../../AppLayout";
import image from "../../assets/clustering-custom-icon.png";

const MyMap = () => {
  return (
    <div>
      <AppLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img src={image} width={"900px"} />
        </div>
      </AppLayout>
    </div>
  );
};

export default MyMap;
