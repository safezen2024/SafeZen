import React from "react"
import { Link } from "react-router-dom"


export default function Checkout1() {
    const [formData, setFormData] = React.useState({
        fullName:"",
        email: "",
        phoneNumber: "",
        shippingAddress: ""
    })
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully Logged In")
        } else {
            console.log("Passwords do not match")
            return
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Full Name"
                    className="form--input"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                />
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="number" 
                    placeholder="Phone Number"
                    className="form--input"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                />
                <input 
                    type="text" 
                    placeholder="Shipping Address"
                    className="form--input"
                    name="shippingAddress"
                    onChange={handleChange}
                    value={formData.shippingAddress}
                />
                <Link to="/checkout/step2">
                    <button className="checout-proceed" >
                        Proceed
                    </button>
                </Link>
            </form>
        </div>
    )
}
