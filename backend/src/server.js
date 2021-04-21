// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Connection to Database
fastify.register(require('fastify-mongodb'), {
	// Documentation: https://www.fastify.io/docs/latest/Getting-Started/#your-first-plugin
	// Documentation: https://www.npmjs.com/package/fastify-mongodb
	// Documentation: https://docs.mongodb.com/manual/crud/
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,
  url: 'mongodb://localhost:27017/portfolio-project-api'
	// Si la collection n'existe pas, elle sera automatiquement créé dès l'insertion du premier document.
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()