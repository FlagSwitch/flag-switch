import { TClient } from 'types/client.types'
import { clientRepository } from '../db/respositories'

const createClient = async (createClientFields: TClient) => {
    return await clientRepository.create(createClientFields);
}

export {
    createClient
}