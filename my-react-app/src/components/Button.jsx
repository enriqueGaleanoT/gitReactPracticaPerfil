//props = {nameButton, descripcion, subtitulo} props va agarrando las
//las llaves
export default function Button({subtitulo, nameButton, descripcion,}){
    return(
        <div>
            {/* <h2>{subtitulo}</h2>
            <button class ="pruebaEstilos">{nameButton}</button>
            <p>{descripcion}</p> */}
            <button>{descripcion}</button>

        </div>
    )
}