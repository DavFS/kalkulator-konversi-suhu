import Input from "../Input/";

export  default function Result({data}) {
  return (
    <div className="w-full flex flex-col gap-1">
      <h3 className="font-semibold">{data.name}:</h3>
      <div className="flex gap-1">
        <Input readOnly={true} value={data.result} className="w-[85%]"/>
        <span className="inline-flex h-auto items-center justify-center font-semibold rounded-sm w-[15%] bg-slate-300">{data.symbol}</span>
      </div>
      <div className="bg-orange-200 p-2 rounded">
        <h3 className="font-semibold">Rumus:</h3>
        <p>{data.formula}</p>
      </div>
    </div>
  );
}