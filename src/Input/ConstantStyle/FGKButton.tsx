export default function FGKButton(props: {id: string, name: string, type: string, value: string | number, str: string, defaultChecked?: boolean}) {
  return (
    <div className="inline">
      <input className="hidden peer" type={props.type} id={props.id} value={props.value} name={props.name} defaultChecked={props.defaultChecked}/>
        <label className="py-3 px-3 mr-2 border-2 border-b-4 border-r-4 
        border-cyan-900 rounded-md peer-checked:bg-cyan-900 peer-checked:border-cyan-600 
        hover:bg-neutral-600 hover:border-gray-400" htmlFor={props.id}>{props.str}</label>
    </div>
);
}
