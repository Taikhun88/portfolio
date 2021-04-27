import React, { useState } from 'react'
import classNames from './Contact.module.css';

function Contact() {
    const [open, setOpen] = useState(false);
    const onClick = (event) => {
		setOpen(!open)
	}
    
    return (
        <div className={classNames.papaContainer}>
            <h2 onClick={onClick}>Contactez moi <i class="far fa-edit"></i></h2>
        <div className={classNames.container + (open ? "" : " " + classNames.disable)}>
            <form action="">
                <div className={classNames.row}>
                <div>
                    <label htmlFor="">Prénom: </label>
                    <input name="firstname" type="text" required/>
                </div>

                 <div>  
                    <label htmlFor="">Nom: </label>
                    <input name="lastname" type="text" required/>
                </div> 

                <div>
                    <label htmlFor="">Email: </label>
                    <input name="email" type="email" required/>
                </div>

                <div>
                    <label htmlFor="">Téléphone: </label>
                    <input name="phonenumber" type="tel"/>
                </div>
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
