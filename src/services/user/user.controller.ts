import { usersService } from './user.service';

class UsersController {
    
    public async updateUser() {
        return await usersService.updateUser();
    }
    
    public async saveNewUser() {
        return await usersService.saveNewUser();
    }
    
    public async getUser() {
        return await usersService.getUser();
    }

}

export const usersController = new UsersController();