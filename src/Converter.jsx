export const convertoc = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
export const convertof = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const common = (temperature, convert) => {
  let input = parseFloat(temperature);
  if (isNaN(input)) {
    return "";
  }
  let output = convert(input);
  let outputostring = output.toString();
  return outputostring;
};
