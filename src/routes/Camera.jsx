import "./camera.css";

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Camera = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeoutCancel = window.setInterval(() => {
      setReady(!ready);
    }, 1500);

    return () => window.clearTimeout(timeoutCancel);
  }, [ready]);

  const cameraClass = () => {
    if (ready) {
      return "lens lens-ready";
    } else {
      return "lens";
    }
  };

  return (
    <div className="camera">
      <div className="container">
        <video muted loop controls src="lineSeq_2.webm" autoPlay></video>
      </div>
      <div className={cameraClass()} />
      <Button className="photobtn" href="/treeprofile">
        Take Photo
      </Button>
    </div>
  );
};

export default Camera;
