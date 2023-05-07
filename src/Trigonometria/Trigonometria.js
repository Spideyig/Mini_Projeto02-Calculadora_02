const grausRadianos = (graus) => {
    return (graus * Math.PI) / 180;
  };
  
  const sin = (graus) => {
    return Math.sin(grausRadianos(graus)).toFixed(6);
  };
  
  const cos = (graus) => {
    return Math.cos(grausRadianos(graus)).toFixed(6);
  };
  
  const tan = (graus) => {
    return Math.tan(grausRadianos(graus)).toFixed(6);
  };
  
  export { sin, cos, tan };