import Headers from "./Headers"
export default function Body({texto, edad}){
    return (
        <div>
            <p>{texto}</p>
            <p>{edad}</p>
            {/* <p>{props.parrafo}</p>
            <Headers login ="True"></Headers> */}
        </div>
    )
}