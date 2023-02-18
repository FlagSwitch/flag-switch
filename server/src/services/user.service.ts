import { TCreateUser } from 'types/user.types'
import { userRepository } from '../db/respositories'

const createUser = async (createUserFields: TCreateUser) => {
    return await userRepository.create(createUserFields);
}

export {
    createUser
}