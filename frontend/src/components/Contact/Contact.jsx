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

    const formData = [
        { value: firstname, name: 'firstname', type: 'text' ,label: "Prénom: ", onChange: setFirstname, required: true},
        { value: lastname, name: 'lastname', type: 'text' ,label: "Nom: ", onChange: setLastname, required: true},
        { value: email, name: 'email', type: 'email' ,label: "Email: ", onChange: setEmail, required: true},
        { value: phoneNumber, name: 'phoneNumber', type: 'tel' ,label: "Téléphone: ", onChange: setPhoneNumber, required: true},
    ]
    
    return (
        <div className={classNames.papaContainer}>
            <h2 onClick={onClick}>Contactez moi <i class="far fa-edit"></i></h2>
        <div className={classNames.container + (open ? "" : " " + classNames.disable)}>
            
            <form action="">
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
                    <select name="" id="">
                    <option value="" disabled selected>Select your option</option>
                        <option value="">Avis</option>
                        <option value="">Devis</option>
                        <option value="">Partenariat</option>
                        <option value="">Informations générales</option>
                        <option value="">Autres</option>
                    </select>
                </div>
                <br/>
                <div className={classNames.message}>
                    <label htmlFor="">Votre message: </label><br/>
                    <textarea name="message" id="" cols="" rows="" required></textarea>
                </div>

                <div className={classNames.span}>
                    <input type="checkbox" required/>
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
