import React, { useState } from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CheckoutForm = ({ onConfirm }) => {
    // const [lastname, setLastname] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault()
        if (!name || !phone || !email || !address) {
            const formSwal = withReactContent(Swal)
            formSwal.fire({
                title: 'Por Favor, completa todos los campos',
            })
            return;
        }
        const userData = {
            name,
            phone,
            email,
            address
        };
        if (email !== emailConfirmation) {
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                title: 'Los correos electrónicos ingresados no coinciden',
            })
            return;
        }

        onConfirm(userData)
    }
    return (
        <div className='container form-container'>
            <form onSubmit={handleConfirm} className='form form-group'>

                <label>Nombre</label>
                <input type="text" className='input form-control' value={name} onChange={(event) => setName(event.target.value)} />

                <label>Teléfono</label>
                <input type="number" className='input form-control' value={phone} onChange={(event) => setPhone(event.target.value)} />

                <label>Email</label>
                <input type="email" className='input form-control' value={email} onChange={(event) => setEmail(event.target.value)} />

                <label>Confirmar Email</label>
                <input type="email" className="input form-control" value={emailConfirmation} onChange={(event) => setEmailConfirmation(event.target.value)} />

                <label>Dirección</label>
                <input type="text" className='input form-control' value={address} onChange={(event) => setAddress(event.target.value)} />

                <button type='submit' className='btn btn-outline-success mt-4'>Crear Orden</button>
            </form>

        </div>
    )
}

export default CheckoutForm;
