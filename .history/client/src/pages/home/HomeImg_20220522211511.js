import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function HomeImg() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default HomeImg;