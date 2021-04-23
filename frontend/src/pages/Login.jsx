import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
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
		console.log(data)
	}

    return (
		<div className="flex justify-center">
			<form className="w-72 p-6 rounded-xl shadow-lg" onSubmit={onSubmitHandler}>
				<div className="mb-4 flex flex-col">
					<label htmlFor="email" className="text-gray-600 text-sm">Email</label>
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
					<label className="text-gray-600 text-sm" htmlFor="password">Mot de passe</label>
					<input className="border-b-2 border-blue-500" type="password" id="password" name="mot de passe" value={password} onChange={onChangePassword} required />
				</div>
				<button type="submit" className="w-full bg-blue-500 px-3 py-1 rounded text-white">Se connecter</button>
			</form>
		</div>
	)
}

export default Login
