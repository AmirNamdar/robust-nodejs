class StoreService {

    public async getStore() {
        const data = 'HiHiHi';
        return data;
    }
    public async saveNewStore() {
        throw new Error('Method not implemented.');
    }
    public async updateStore() {
        throw new Error('Method not implemented.');
    }

}

export const storeService = new StoreService();