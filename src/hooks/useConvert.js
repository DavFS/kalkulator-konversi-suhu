export default function useConvert(t, value){
  const temp = t.toLowerCase();
  if(temp == "celcius") return fromCelcius(value);
  if(temp == "kelvin") return fromKelvin(value);
  if(temp == "reamur") return fromReamur(value);
  if(temp == "fahrenheit") return fromFahrenheit(value);
  else throw new Error("Invalid unit");
}

function fixedNum(number) {
  const strNumber = number.toString();
  if (strNumber.includes(".")) {
    if(strNumber.split(".")[1].length>2) return Number(number.toFixed(2));
  }
  return Number(number);
}

function fromCelcius(value) {
  return [
    {
      name: "Kelvin",
      result: fixedNum(value+273.15),
      formula: `${value} °C + 273.15`,
      symbol: "K",
    },
    {
      name: "Reamur",
      result: fixedNum(value*4/5),
      formula: `${value} °C × 4/5`,
      symbol: "°Ré",
    },
    {
      name: "Fahrenheit",
      result: fixedNum((value*9/5)+32),
      formula: `(${value} °C × 9/5) + 32`,
      symbol: "°F",
    },
  ];
}

function fromKelvin(value) {
  return [
    {
      name: "Celcius",
      result: fixedNum(value-273.15),
      formula: `${value} K - 273.15`,
      symbol: "°C",
    },
    {
      name: "Reamur",
      result: fixedNum((value-273.15)*4/5),
      formula: `(${value} K - 273.15) × 4/5`,
      symbol: "°Ré",
    },
    {
      name: "Fahrenheit",
      result: fixedNum(((value-273.15)*9/5)+32),
      formula: `(${value} K - 273.15) × 9/5 + 32`,
      symbol: "°F",
    },
  ];
}

function fromReamur(value) {
  return [
    {
      name: "Celcius",
      result: fixedNum(value*5/4),
      formula: `${value} °Ré × 5/4`,
      symbol: "°C",
    },
    {
      name: "Kelvin",
      result: fixedNum((value*5/4)+273.15),
      formula: `(${value} °Ré × 4/5) + 273.15`,
      symbol: "K",
    },
    {
      name: "Fahrenheit",
      result: fixedNum((value*9/4)+32),
      formula: `(${value} °Ré × 9/4) + 32`,
      symbol: "°F",
    },
  ];
}

function fromFahrenheit(value) {
  return [
    {
      name: "Celcius",
      result: fixedNum((value-32)*5/9),
      formula: `(${value} °F - 32) × 5/9`,
      symbol: "°C",
    },
    {
      name: "Kelvin",
      result: fixedNum((value-32)*5/9+273.15),
      formula: `(${value} °F - 32) × 5/9 + 273.15`,
      symbol: "K",
    },
    {
      name: "Reamur",
      result: fixedNum((value-32)*4/9),
      formula: `(${value} °F - 32) × 4/9`,
      symbol: "°Ré",
    },
  ];
}