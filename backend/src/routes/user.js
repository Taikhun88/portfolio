const argon2 = require('argon2')
const createError = require('http-errors')

async function routes (fastify, options){
    //#region Create new User
    const optsPost = {
        schema:{
            body: {
                properties: {
                    email: { type: 'string' },
                    firstname: { type: 'string' },
                    lastname: { type: 'string' },
                    password: { type: 'string' },
                    role:{
                        type: 'string',
                        default: 'member'
                    }
                },
                required: ['email', 'password'],
                additionalProperties: false,
            }
        }
    }

    //login user
    const optsLogin = {
        schema: {
            body: {
                type: 'object',
                properties: {
                    email:{ type: 'string'},
                    password: {type: 'string'},
                },
                required: ['email', 'password'],
                additionalProperties: false,
            }
        }
    }

    fastify.post('/login',optsPost, async (request, reply) =>{
        const db = fastify.mongo.db
        const collection = db.collection('users')
        //Verification si mail est existant 
        const userExist = await collection.findOne({email})
        if (userExist) throw new createError.Conflict('Email already exists')
        //hash du mdp avant l'insertion
        const hashedPassword = await argon2.hash(password)
        const result = await collection.insertOne({
            ...request.body,
            password: hashedPassword,
            role: 'member'
        })
        return {
            id : result.ops[0]._id //pour renvoyer l'id qui sous mongo db est _id il ne faut surtout pas renvoyer le mdp haché car il peut avoir des infos sur ce qu'on a utilisé pour haché le mdp
        }

    })

    fastify.post('/users',optsPost, async (request, reply) =>{
        /*const password = request.body.password
        const email = request.body.email
        const fistrname = request.body.firstname
        const lastname = request.body.lastname
        ces quatres lignes correspond a la ligne du dessous c'est la destructuration
        */
        const {password, email, firstname, lastname} = request.body
        const db = fastify.mongo.db
        const collection = db.collection('users')
        //Verification si mail est existant 
        const userExist = await collection.findOne({email})
        if (userExist) throw new createError.Conflict('Email already exists')
        //hash du mdp avant l'insertion
        const hashedPassword = await argon2.hash(password)
        const result = await collection.insertOne({
            ...request.body,
            password: hashedPassword,
            role: 'member'
        })
        return {
            id : result.ops[0]._id //pour renvoyer l'id qui sous mongo db est _id il ne faut surtout pas renvoyer le mdp haché car il peut avoir des infos sur ce qu'on a utilisé pour haché le mdp
        }
    })
    //#endregion
}
module.exports = routes