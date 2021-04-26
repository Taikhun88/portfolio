import React, { useState } from 'react'
import classNames from './Contact.module.css';

function Contact() {
    const [open, setOpen] = useState(false);
    const onClick = (event) => {
		setOpen(!open)
	}
    
    return (
        <div className={classNames.papaContainer}>
            <h2 onClick={onClick}>Contactez moi<i class="far fa-edit"></i></h2>
        <div className={classNames.container + (open ? "" : " " + classNames.disable)}>
            <form action="">
                <div className={classNames.row}>
                <div>
                    <label htmlFor="">Prénom: </label><br/>
                    <input name="firstname" type="text" required/>
                </div>

                 <div>  
                    <label htmlFor="">Nom: </label><br/>
                    <input name="lastname" type="text" required/>
                </div> 

                <div>
                    <label htmlFor="">Email: </label><br/>
                    <input name="email" type="email" required/>
                </div>

                <div>
                    <label htmlFor="">Numéro de téléphone: </label><br/>
                    <input name="phonenumber" type="tel"/>
                </div>
                </div>

                <div>
                    <label htmlFor="">Objet: </label><br/>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="">Votre message: </label><br/>
                    <textarea name="message" id="" cols="30" rows="10" required></textarea>
                </div>

                <div>
                    <input type="checkbox"/>
                    <span>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la Politique de confidentialité.</span>
                </div>

                <button type="submit">Envoyer</button>
            </form>
        </div>
        </div>
    )
}

export default Contact
