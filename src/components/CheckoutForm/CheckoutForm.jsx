import React, { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    // const [lastname, setLastname] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email, address
        }

        onConfirm(userData)
    }
    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='form form-group'>

                {/* <label>Apellido</label>
                <input type="text" className='input form-control' value={lastname} onChange={(target) => setLastname(target.value)} /> */}

                <label>Nombre</label>
                <input type="text" className='input form-control' value={name} onChange={(event) => setName(event.target.value)} />

                <label>Teléfono</label>
                <input type="number" className='input form-control' value={phone} onChange={(event) => setPhone(event.target.value)} />

                <label>Email</label>
                <input type="email" className='input form-control' value={email} onChange={(event) => setEmail(event.target.value)} />

                {/* <label>Reingresar Email</label>
                <input type='email' className='input form-control' value={email} onChange={(target) => setEmail(target.value)}> */}
                <label>Dirección</label>
                <input type="text" className='input form-control' value={address} onChange={(event) => setAddress(event.target.value)} />

                <button type='submit' className='btn btn-outline-success'>Crear Orden</button>
            </form>

        </div>
    )
}

export default CheckoutForm;
