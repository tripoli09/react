import { useContext } from "react"
import { useNotification } from '../notification/Notification'
import CartContext from '../context/CartContext'

const Contacto = () =>{
    const { setNotification } = useNotification()
    const {dataFormName, setDataFormName,dataFormEmail, setDataFormEmail,
           dataTextArea, setDataTextArea
             
             } = useContext(CartContext)

    const send = () => {
        if (dataFormEmail !== "" && dataFormName !== ""
         && dataTextArea !== ""  ){
            setNotification('success', 'Formulario completado')
            }else{
                setNotification('Error', 'Complete todos los campos')
            }
    }

    
    return(
        <form className='formulario' onSubmit={e => e.preventDefault()}>
            <div>
                <label className='input' htmlFor="name" >Nombre:</label>
                <input type="text" id="name" size="47" onChange={(e) => {
                    setDataFormName(e.target.value)   
                }} value={dataFormName}   />
            </div>
            

            <div >
                <label className='input' htmlFor="textarea">Comentario:</label>
                <textarea name="textarea" rows="10" cols="50" placeholder="Escriba su consulta" onChange={(e) => {
                    setDataTextArea(e.target.value)   
                }} value={dataTextArea}></textarea>
            </div>


            <div>
                <label className='input' htmlFor="email" >Email: </label>
                <input type="email" id="email" size="47"  onChange={(e) => {
                    setDataFormEmail(e.target.value)   
                }} value={dataFormEmail} />
            </div>


            <button className="myButton"  onClick={send}>Enviar</button>


        </form>
    )
}

export default Contacto