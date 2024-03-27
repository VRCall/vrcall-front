import React, { useState } from "react";
import { RegisterData, registerUser } from "../../services/register";
import "./index.scss";
import { FaEnvelope, FaLock, FaRegUser } from "react-icons/fa"

export default function Index() {

    const [formData, setFormData] = useState<RegisterData>({ pseudo: "", email: "", password: "", confirmPassword: "", profilePicture: null });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        let file;
        if(name === "profilePicture") {
            file = event.target.files ? event.target.files[0] : null;
            setFormData({...formData, [name]: file});
        }
        else {
            setFormData({...formData, [name]: value});
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        registerUser(formData)
    }

    return (

        <div className="main">
            <div className="main-register">
                <form className="register-form" onSubmit={ handleSubmit }>
                    Register
                    <div className="textual-input-div">
                        <FaRegUser />
                        <input placeholder="Username" className="textual-input" required type="text" id="pseudo" name="pseudo" value={ formData.pseudo } onChange={ handleInputChange }></input>
                    </div>
                    <div className="textual-input-div">
                        <FaEnvelope />
                        <input placeholder="Email address" className="textual-input" required type="email" id="email" name="email" value={ formData.email } onChange={ handleInputChange } />
                    </div>
                    <div className="textual-input-div">
                        <FaLock />
                        <input placeholder="Password" className="textual-input" required type="password" id="password" name="password" value={ formData.password } onChange={ handleInputChange } />
                    </div>
                    <div className="textual-input-div">
                        <FaLock />
                        <input placeholder="Confirm Password" className="textual-input" required type="password" id="confirmPassword" name="confirmPassword" value={ formData.confirmPassword } onChange={ handleInputChange } />
                    </div>
                    <div className="file-input-div">
                        <label htmlFor="profilePicture">Profile picture (optional)</label>
                        <input type="file" id="profilePicture" name="profilePicture" onChange={ handleInputChange } accept="image/*" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>

    )

}