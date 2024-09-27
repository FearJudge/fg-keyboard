export function WidthInput({setWidth}: {setWidth: React.Dispatch<React.SetStateAction<number>>}) {
  function onWidthChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newWidth = parseInt(e.target.value);
    setWidth(newWidth);
  }

  return (
    <div className="mb-5" onChange={onWidthChange}>
        <label className="block text-gray-200
          text-base font-bold font-sans mb-5" htmlFor="widthInput">Select the width of output picture:
        </label>
        <div className="my-4" id="widthInput">
          <div className="inline">
            <input className="hidden peer" type="radio" id="sm" value={266} name="width" defaultChecked/>
            <label className="py-3 px-3 mr-2 border-2 border-b-4 border-r-4 border-cyan-900 rounded-md peer-checked:bg-cyan-900 peer-checked:border-cyan-600 hover:bg-neutral-600 hover:border-gray-400" htmlFor="sm">266 px</label>
          </div>
          <div className="inline">
            <input className="hidden peer" type="radio" id="md" value={586} name="width" />
            <label className="py-3 px-3 mr-2 border-2 border-b-4 border-r-4 border-cyan-900 rounded-md peer-checked:bg-cyan-900 peer-checked:border-cyan-600 hover:bg-neutral-600 hover:border-gray-400" htmlFor='md'>586 px</label>
          </div>
          <div className="inline">
            <input className="hidden peer" type="radio" id="lg" value={906} name="width" />
            <label className="py-3 px-3 border-2 border-b-4 border-r-4 border-cyan-900 rounded-md peer-checked:bg-cyan-900 peer-checked:border-cyan-600 hover:bg-neutral-600 hover:border-gray-400" htmlFor='lg'>906 px</label>
          </div>
        </div>
      </div>
  );
}