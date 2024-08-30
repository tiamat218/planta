import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

const VantaClouds = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      speed: 1.2,
      skyColor: 0x4fc3e3,
      cloudColor: 0xadc1de,
      cloudShadowColor: 0x183550,
      sunColor: 0xceeb42,
      sunGlareColor: 0xff6633,
      sunlightColor: 0xff9933,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}></div>;
};

export default VantaClouds;
