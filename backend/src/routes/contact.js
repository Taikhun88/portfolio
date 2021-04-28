async function routes (fastify, oprions) {

    const optsContact = {
            schema: {
                body: {
                    type: 'object',
                    properties:{
                        firstname: { type: 'string'},
                        lastname: { type: 'string' },
                        email: { type: 'string' },
                        phoneNumber: { type: 'integer' },
                        select: { type: 'string' },
                        message: { type: 'string' }

                    }
                }
            }
        }
    fastify.post('/contact', optsContact, async (request, reply) => {
        const db = fastify.mongo.db
        const collection = db.collection('contact')
        const result = await collection.insertOne(request.body)

        return result.ops[0]
    })
}
module.exports = routes