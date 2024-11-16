import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// Import your existing 3D model functions
import { Bird, Island, Plane, Sky } from "../../models"; // Adjust the path to where your functions are

const ProfileModels = ({ modelType, modelProps }) => {
  const renderModel = () => {
    switch (modelType) {
      case "bird":
        return <Bird {...modelProps} />;
      case "island":
        return <Island {...modelProps} />;
      case "plane":
        return <Plane {...modelProps} />;
      case "sky":
        return <Sky {...modelProps} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", maxWidth: "400px", maxHeight: "400px" }}>
      <Canvas camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={1} />
          {/* Render the selected model */}
          {renderModel()}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProfileModels;
