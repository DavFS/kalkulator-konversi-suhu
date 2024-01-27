import UserInput from "@/components/fragments/UserInput";


export default function Home() {
  return (
    <>
      <header className="container p-2 mx-auto mt-3">
        <h1 className="font-inter text-3xl text-slate-900 tracking-tight text-center font-semibold">Kalkulator Konversi Suhu</h1>
      </header>
      <main className="mx-auto container">
        <div className="mx-auto w-full p-2">
          <UserInput></UserInput>
        </div>
        <div className="mx-auto w-full p-3 mt-2">
          <h2 className="text-xl text-slate-900 font-semibold tracking-tight mb-2">Perbandingan titik beku dan titik didih antar satuan</h2>
          <table className="border border-slate-900 mx-auto w-[90%]">
            <thead className="bg-orange-400">
              <tr>
                <td className="p-2 border border-slate-900">Satuan</td>
                <td className="p-2 border border-slate-900">Titik Beku</td>
                <td className="p-2 border border-slate-900">Titik Didih</td>
              </tr> 
            </thead>
            <tbody className="bg-slate-50">
              <tr>
                <td className="p-2 border border-slate-900">Celcius</td>
                <td className="p-2 border border-slate-900">0°C</td>
                <td className="p-2 border border-slate-900">100°C</td>
              </tr> 
              <tr>
                <td className="p-2 border border-slate-900">Kelvin</td>
                <td className="p-2 border border-slate-900">273.15K</td>
                <td className="p-2 border border-slate-900">373.15k</td>
              </tr> 
              <tr>
                <td className="p-2 border border-slate-900">Fahrenheit</td>
                <td className="p-2 border border-slate-900">32°F</td>
                <td className="p-2 border border-slate-900">212°F</td>
              </tr> 
              <tr>
                <td className="p-2 border border-slate-900">Reamur</td>
                <td className="p-2 border border-slate-900">0°Ré</td>
                <td className="p-2 border border-slate-900">80°Ré</td>
              </tr> 
            </tbody>
          </table>
        </div>
        
      </main>
    </>
  );
}
