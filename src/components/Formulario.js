import React from 'react';
import './style/Form.css'
import CartContext from '../context/CartContext'
import { useContext } from "react"
import { useNotification } from '../notification/Notification'



const Formulario = () => {
    const { setNotification } = useNotification()
    const {dataFormName, setDataFormName,dataFormAdress, setDataFormAdress,
             dataFormPhone, setDataFormPhone,dataFormEmail, setDataFormEmail,
             dataFormZip, setDataFormZip, setButtonState
             } = useContext(CartContext)
    

    const setData = () => {
        if (dataFormAdress !== "" && dataFormEmail !== "" && dataFormName !== ""
         && dataFormPhone !== "" && dataFormZip !== ""  )
            {setButtonState(false)
            setNotification('success', 'Formulario completado')
            }else{
                setNotification('Error', 'Complete todos los campos')
            }
           
    }

    

    return (
        <form className='formulario' onSubmit={e => e.preventDefault()}>
            <div>
                
                <label className='input' htmlFor="name">Nombre:</label>
                <input type="text" id="name" size="47"  onChange={(e) => {
                    setDataFormName(e.target.value)   
                }} value={dataFormName} />
            </div>

            <div >
                <label className='input' htmlFor="phone">Telefono:</label>
                <input type="text" id="phone"size="47"  onChange={(e) => {
                    setDataFormPhone(e.target.value)   
                }} value={dataFormPhone} />
            </div>

            <div >
                <label className='input' htmlFor="adress">Direccion:</label>
                <input type="text" id="adress" size="47"  onChange={(e) => {
                    setDataFormAdress(e.target.value)   
                }} value={dataFormAdress} />
            </div>

            <div >
                <label className='input' htmlFor="zipcode">Codigo postal:</label>
                <input type="text" id="zipcode"  size="47" onChange={(e) => {
                    setDataFormZip(e.target.value)   
                }} value={dataFormZip} />
            </div>

            <div>
                <label className='input' htmlFor="email">Email: </label>
                <input type="email" id="email" size="47" onChange={(e) => {
                    setDataFormEmail(e.target.value)   
                }} value={dataFormEmail} />
            </div>


            <button className="myButton" onClick={setData}>Completar datos</button>


        </form>
    )

}

export default Formulario;