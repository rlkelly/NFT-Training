function decrement(e) {
  const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
  );
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value--;
  target.value = value;
}

function increment(e) {
  const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
  );
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value++;
  target.value = value;
}

export default function(props) {
  const { numPumpkins, setNumPumpkins } = props;
  return (
    <div className="custom-number-input h-10 w-32">
      <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Counter Input
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button onClick={e => setNumPumpkins(Math.max(0, numPumpkins - 1))} data-action="decrement" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={props.numPumpkins}></input>
      <button onClick={e => setNumPumpkins(Math.min(numPumpkins + 1, 5))} data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  </div>
  )
}
