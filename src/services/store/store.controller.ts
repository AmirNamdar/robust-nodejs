import { storeService } from './store.service';

class StoreController {
    
    public async updateStore() {
        return await storeService.updateStore();
    }
    
    public async saveNewStore() {
        return await storeService.saveNewStore();
    }
    
    public async getStore() {
        const data = storeService.getStore();
        return data;
    }

}

export const storeController = new StoreController();