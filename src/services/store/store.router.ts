import { Request, Response, Router }    from 'express';
import { storeController }              from './store.controller';

export const storeRouter = Router();

storeRouter.get('/', async(req: Request, res: Response) => {
    const data = await storeController.getStore();
    res.send(data);
});

storeRouter.post('/', (req: Request, res: Response) => {
    const response = storeController.saveNewStore();
    res.send(response);
});

storeRouter.put('/', (req: Request, res: Response) => {
    const response = storeController.updateStore();
    res.send(response);
});
