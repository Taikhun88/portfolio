import React, { useState } from 'react'
import classNames from './Contact.module.css';

function Contact() {
    const [open, setOpen] = useState(false);
    const onClick = (event) => {
		setOpen(!open)
	}

    const [firstname, setFirstname] = useState ();
    const [lastname, setLastname] = useState ();
    const [email, setEmail] = useState ();
    const [phoneNumber, setPhoneNumber] = useState ();

    const [ select, setSelect ] = useState ();
    const onClickSelect = (event) => {
        console.log(event.target.value)
        setSelect(event.target.value)
    };
    const [ message, setMessage ] = useState ();
    const onChangeMessage = (eventMsg) => {
        console.log(eventMsg.target.value)
        setMessage(eventMsg.target.value)
    }
    
    const formData = [
        { value: firstname, name: 'firstname', type: 'text' ,label: "Prénom: ", onChange: setFirstname, required: true},
        { value: lastname, name: 'lastname', type: 'text' ,label: "Nom: ", onChange: setLastname, required: true},
        { value: email, name: 'email', type: 'email' ,label: "Email: ", onChange: setEmail, required: true},
        { value: phoneNumber, name: 'phoneNumber', type: 'tel' ,label: "Téléphone: ", onChange: setPhoneNumber, required: true},    ]

    const onChangeHandler = async (event) => {
        event.preventDefault()
        const response = await fetch("http://localhost:3005/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                phoneNumber,
                select,
                message,               

            })
        })
        const data = await response.json()
		console.log(data)
    }
    
    return (
        <div className={classNames.papaContainer}>
            <h2 onClick={onClick}>Contactez moi <i class="far fa-edit"></i></h2>
        <div className={classNames.container + (open ? "" : " " + classNames.disable)}>
            
            <form onSubmit= {onChangeHandler}>
                <div className={classNames.row}>
                
                    {formData.map(object => {
                        return (
                            <div>
                                <label> {object.label} </label>
                                <input 
                                type={object.type} 
                                value={object.value} 
                                name={object.name} 
                                onChange={ (ev) => console.log(ev.target.value) } 
                                required={object.required} 
                                />
                            </div>
                        )
                    })
                    }  

                </div>
                <br/>
                <div>
                    <label htmlFor="">Objet: </label><br/>
                    <select value = { select } onChange= { onClickSelect } name="" id="">
                    <option value="" disabled selected>Select your option</option>
                        <option value="Avis">Avis</option>
                        <option value="Devis">Devis</option>
                        <option value="Partenariat">Partenariat</option>
                        <option value="Informations">Informations générales</option>
                        <option value="Autres">Autres</option>
                    </select>
                </div>
                <br/>
                <div className={classNames.message}>
                    <label htmlFor="">Votre message: </label><br/>
                    <textarea value={ message } onChange= { onChangeMessage } name="message" id="" cols="" rows="" required></textarea>
                </div>

                <div className={classNames.span}>
                    <input value="" type="checkbox" required/>
                    <span>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la Politique de confidentialité.</span>
                </div>
                <br/>
                <button type="submit">Envoyer</button>

            </form>
        </div>
        </div>
    )
}

export default Contact
