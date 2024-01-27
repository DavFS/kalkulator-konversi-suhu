export default function Input({className, ...props}) {
  return (
    <input type="number" className={`outline-none p-2 rounded border-2 border-geay-500 focus:border-green-600 shadow ${className}`} {...props}/>
  );
}