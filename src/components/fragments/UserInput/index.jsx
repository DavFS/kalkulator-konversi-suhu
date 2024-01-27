import { useState } from "react";
import useConvert from "@/hooks/useConvert.js";
import Input from "../../ui/Input";
import Result from "../../ui/Result";

export default function UserInput(){
  const [inputMode, setInputMode] = useState("celcius");
  const [input, setInput] = useState(0);
  
  function changeOption(value) {
    return setInputMode(value);
  }
  const data = useConvert(inputMode, Number(input));
  
  return (
    <section className="mx-auto flex flex-col items-center gap-3">
      <div className="grid gap-2 w-[90%] sm:grid-cols-[1fr,0.3fr]">
        <Input placeholder="Masukan angka..." className="w-full" value={input} onChange={({target}) => setInput(target.value)}/>
        <select className="outline-none bg-green-600 rounded p-2 text-slate-200 w-full shadow" onChange={(e) => changeOption(e.target.value)}>
          <option value="celcius">Celcius (°C)</option>
          <option value="kelvin">Kelvin (K)</option>
          <option value="fahrenheit">Fahrenheit (°F)</option>
          <option value="reamur">Reamur (°Ré)</option>
        </select>
      </div>
      <div className="flex flex-col w-[90%] gap-2">
        {data.map(result => (<Result data={result} key={result.name}></Result>))}
      </div>
    </section>
  );
}