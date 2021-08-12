import { getRepository }    from "typeorm";
import { User }             from './user.entity';
class UsersService {

    public async getUser() {
        return 'HiHiHi';
    }
    public async saveNewUser() {
        throw new Error('Method not implemented.');
    }
    public async updateUser() {
        throw new Error('Method not implemented.');
    }

}

export const usersService = new UsersService();