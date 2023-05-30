import React, { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
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
                <label>Nombre</label>
                <input type="text" className='input form-control' value={name} onChange={(target) => setName(target.value)} />
            </form>

        </div>
    )
}

export default CheckoutForm;
