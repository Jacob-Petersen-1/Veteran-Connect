import React, { useState, useEffect } from "react";

import { Typography } from "@mui/material";

const TypeWriter = ({ text, variant, size }) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((value) => value + text.charAt(index));
      setIndex((value) => value + 1);
    }, 100);

    return () => clearInterval(intervalId);
  }, [index, text]);

  return (
    <Typography
      sx={{
        fontSize: {
          xs: size === "small" ? "1rem" : "2rem",
          sm: "3rem",
          md: "5rem",
        },
        lineHeight: { xs: 1.2, sm: 1.5, md: 1.8 },
        marginBottom: "1rem",
      }}
      variant={variant}
    >
      {currentText}
      <span className="blink">|</span>
    </Typography>
  );
};

export default TypeWriter;
