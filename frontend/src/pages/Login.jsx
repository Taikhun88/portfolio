import { useState } from 'react';
import classNames from './Login.module.css';
import { Redirect } from 'react-router'

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [token, setToken] = useState("")
	// ces 2 variables sont les useState pour l'email et le password. Ils ont pour élément 1 valeur initial email et password et élément 2 changement valeur initial

	const onChangeHandler = (event) => {
		setEmail(event.target.value)
	}

	const onChangePassword = (event) => {
		setPassword(event.target.value)
	}

	const onSubmitHandler = async (event) => {
		event.preventDefault()
		const response = await fetch("http://localhost:3005/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})			
		})
		
		const data = await response.json()
		setToken(data.token)
	}

	if(token){
		return <Redirect to = "/"/>
	}
	
	return (
		<main className={classNames.fond}>

			<div className={classNames.container}>
				<label className={classNames.title}>Identifiez vous !</label>
				<form className="w-72 p-6 rounded-xl shadow-lg" onSubmit={onSubmitHandler}>
					<div>
						<div className={classNames.input}>
							<label htmlFor="email" className="text-gray-600 text-sm">Adresse email: </label>
							<input
								className="border-b-2 border-blue-500"
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={onChangeHandler}
								required
							/>
						</div>

						<div className="mb-4 flex flex-col">
							<label className="text-gray-600 text-sm" htmlFor="password">Mot de passe: </label>
							<input className="border-b-2 border-blue-500" type="password" id="password" name="mot de passe" value={password} onChange={onChangePassword} required />
						</div>
					</div>
					<div className={classNames.parentbutton}>
						<button type="submit" className={classNames.button}>Se connecter</button>
					</div>
				</form>
			</div>
		</main>

	)
}

export default Login
