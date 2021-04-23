// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-cors'), { 
  origin: "http://localhost:3000"
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return 'Welcome on the admin portal'
})

// Importation des routes
fastify.register(require('./routes/users'));

fastify.register(require('./routes/content'));

// Connection to Database
fastify.register(require('fastify-mongodb'), {
  // the default value is false
  forceClose: true,
  // permet de maintenir la connexion entre le server et la bdd continue. Par défaut, c'est false et donc ça provoque l'interruption de la co.
  url: 'mongodb://localhost:27017/portfolio-project-api'
})

async function authenticateJWT(request, reply) {
	try {
    const decoded = await request.jwtVerify()
    //cette methode va verifier si un token est present dans le header(postman, les header lorsqu'on fait une requete), si aucun token n'est présent ou que celui ci est invalide alors on retourne une erreur 500
		return decoded
	} catch (error) {
		reply.code(500).send(error)
	}
}
fastify.register(require('fastify-jwt'), {
  secret: 'JeSUIStropCON@mourir*cestSUR@100%'
})
fastify.decorate('authenticate', authenticateJWT)

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3005)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()