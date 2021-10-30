const argon2 = require('argon2')
const createError = require('http-errors')
const transport = require('../nodemailer')

async function routes (fastify, options) {
    // #region Create new user ADMIN only
    const optsPost = {
        // cette constante permet de créer tous les champs requis pour créer un compte USER admin
        schema: {
            body: {
                properties: {
                    email: { type: 'string'}, 
                    username: { type: 'string'}, 
                    password: { type: 'string' },         
                }, 

                required: ['email', 'password'],
                additionalProperties: false, 
                // ce champ permet de refuser toute autre donnée qui serait saisie
            }
        }
    }

    fastify.post('/users', optsPost, async (request, reply) => {
        const {password, email} = request.body;
        // récupère la requête de l'utilisateur envoyé via le BODY du form
        const db = fastify.mongo.db;
        // permet de se connecter à la bdd mongo
        const collection = db.collection('users');
        // créer une table SQL qui récupère les données
        const userExists = await collection.findOne({ email 
        });
        
        if (userExists) throw new createError.Conflict("This email already exists");

        const hashedPassword = await argon2.hash(password);
        // Permet de hacher, crypter le mot de passe
        const result = await collection.insertOne({
            ...request.body,
            password: hashedPassword,
            // cette const result vient apporter une modification qu'est le HASHEDPASSWORD à la request.body codée initialement. Il s'agit d'une copie superficielle. A check
        });
        return {
            id : result.ops[0]._id
            // ce return permet d'éviter d'afficher le mot de passe haché à l'écran
        }    
    })
    // //#endregion

    //Login ADMIN
    const optsLogin = {
        schema: {
            body: {
                type: 'object',
                properties: {
                    email: { type: 'string'},
                    password: { type: 'string'},
                },
                required: ['email', 'password'],
                additionnalProperties: false,
            }
        }
    }

    fastify.post('/login', optsLogin, async (request, reply) => {
        const { email, password } = request.body;
        const db = fastify.mongo.db;
        const collection = db.collection('users');
        const user = await collection.findOne({email});

        if (!user) throw new createError.NotFound('The data you have entered are wrong');
        // cette condition permet de vérifier si le mail utilisé existe déjà
        const match = await argon2.verify(user.password, password);
        // vérifie que le password enregistré en bdd match avec celui envoyé par le body request

        const token = await reply.jwtSign({
            id: user._id,
            role: user.role, 
            expiresIn: '10m',
        })
        // ce token délivré à l'utilisateur permet de naviguer avec ses données d'authentification en toute sécurité pendant une durée fixée

        
        await transport.sendMail({ 
            from: '"Notre Site" <notresitecontact@gmail.com>',
            to: user.email,
            subject: "Test",
            text: "Ceci est un test",
            html: "<p>Ceci est un test au format HTML</p>"
        })

        reply.code(200).send({ token })
        // si les infos id et mdp match alors un token est délivré via le reply.code 200. 
    })

}

module.exports = routes