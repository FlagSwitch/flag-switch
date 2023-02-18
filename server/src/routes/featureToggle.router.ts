import { FastifyInstance } from 'fastify'
import { ClientSchema } from '../schema/client.schema'
import { createClient } from '../controllers/.controller'

async function FeatureToggleRouter(fastify: FastifyInstance) {
    fastify.route({
        method: 'POST',
        url: '/create',
        schema: {
            body: ClientSchema
        },
        handler: createClient
    })
}

export default FeatureToggleRouter