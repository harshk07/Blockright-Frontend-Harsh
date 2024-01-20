import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CircularProgressWithLabel from "@mui/material/CircularProgress";
import images from "../Images/images.png";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [labelText, setLabelText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 20
      );
    }, 1200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const statements = [
      "Defining Contract for Digital Rights...",
      "Deploying Contract on Blockchain",
      "Awaiting Confirmation...",
    ];

    const randomIndex = Math.floor(Math.random() * statements.length);
    setLabelText(statements[randomIndex]);

    if (progress >= 100) {
      // Route to the Dashboard page
      navigate("/Dashboard");
    }
  }, [progress, navigate]);

  return (
    <div className="bg-black">
      <Stack spacing={2} direction="column" alignItems="center">
        <div className="h-screen flex flex-col w-screen items-center justify-center">
          <img
            src={images}
            style={{ position: "absolute", marginBottom: "50px" }}
            alt=""
          />
          <div className="">
            <CircularProgressWithLabel
              style={{ width: "100px", height: "100px" }}
              variant="determinate"
              value={progress}
            />
          </div>
          <div className="mt-5" style={{ color: "white" }}>
            {labelText}
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Loader;
