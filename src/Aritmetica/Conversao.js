const decimalBinario = (decimal) => {
    return (decimal >>> 0).toString(2);
  };
  
  const binarioDecimal = (binario) => {
    return parseInt(binario, 2);
  };
  
  const decimalOcta = (decimal) => {
    return (decimal >>> 0).toString(8);
  };
  
  const octaDecimal = (octa) => {
    return parseInt(octa, 8);
  };
  
  const decimalHexadecimal = (decimal) => {
    return (decimal >>> 0).toString(16).toUpperCase();
  };
  
  const hexadecimalDecimal = (hexadecimal) => {
    return parseInt(hexadecimal, 16);
  };
  
  export { decimalBinario, binarioDecimal, decimalOcta, octaDecimal, decimalHexadecimal, hexadecimalDecimal };