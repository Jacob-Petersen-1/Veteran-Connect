import React, { useState, useEffect} from 'react';

import { Typography } from '@mui/material';

const Typewriter = ({ text,variant }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((value) => value + text.charAt(index));
      setIndex((value) => value + 1);
    }, 100);

    return () => clearInterval(intervalId);
  }, [index, text]);



  return (
    <Typography variant={variant}>{currentText}<span className="blink">|</span></Typography>
  );
};

export default Typewriter;