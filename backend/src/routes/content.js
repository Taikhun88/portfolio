// Importation des dépendances
const createError = require('http-errors');
const { ObjectId } = require('mongodb')

async function routes(fastify, options) {
	// #region Get All
	fastify.get('/content', async (request, reply) => {
		const db = fastify.mongo.db;
		const collection = db.collection('content');
		const resultat = await collection.find().toArray();
        // Const resultat attendra que on récupère l'info envoyé dans la collection CONTENT puis quand il FIND il le mettra dans un ARRAY
		return resultat;
	})
	// #endregion

	// #region Post New Product
	const opts = {
		schema: {
			body: {
				type: 'object',
				properties: {
					title: { type: 'string' },
					picture: { type: 'string' },
                    description: { type: 'string'},
                    link: { type: 'string' },
                },
				additionalProperties: false,
				required: ['title', 'picture', 'description', 'link'],
			}
		}
	}// la CONST opts correspond aux champs requis à remplir lors d'une requête pour ajouter des PROJETS

	fastify.route({
		method: 'POST',
		url: '/content',
		schema: opts.schema,
		preValidation: fastify.authenticateAdmin,
		handler: async (request, reply) => {
			const db = fastify.mongo.db;
			const collection = db.collection('content');
			const result = await collection.insertOne(request.body);
			return result.ops[0];
		}
	})

	// #region Get Product by Id
	fastify.get('/content/:id', async (request, reply) => {
		// Si je souhaite récupérer la variable id indiqué par l'utilisateur lors de sa requête, je pourrais le faire via l'objet request.params
		const db = fastify.mongo.db;
		const collection = db.collection('content');
	
		const resultat = await collection.findOne({
			_id: new ObjectId(request.params.id)
		});

        if (resultat === null) {
			// return reply.code(404).send({error: true, message: "Sorry, ressource not found"})
			throw new createError.NotFound()
		}
			return resultat
	})
	// #endregion
	
	// #region Update Product by Id
	const optsPatch = {
		schema: {
			body: {
				...opts.schema.body,
				required: [],
			}// required vide permet de changer ce qu'on veut qui figure dans le required INITIAL
		}
	}
	fastify.patch('/content/:id', optsPatch, async (request, reply) => {
		const db = fastify.mongo.db;
		const collection = db.collection('content');
		const result = await collection.findOneAndUpdate(
			{ _id: new ObjectId(request.params.id) },
			{ $set: request.body },
			{ returnOriginal: false }
		);// On ignore quel champ à update sera demande via le request, donc on les inclut tous avec $set
		if (!result.value) {
			throw new createError.NotFound()
		}
		return result.value;
	})
	// #endregion

	// #region Delete Product by Id
	fastify.delete('/content/:id', async (request, reply) => {
		const db = fastify.mongo.db;
		const collection = db.collection('content')
		const resultat = await collection.findOneAndDelete({
			_id: new ObjectId(request.params.id),
		});
		if (!resultat.value) {
			throw new createError.NotFound()
		}
		return resultat.value;
	})
	// #endregion
}

module.exports = routes