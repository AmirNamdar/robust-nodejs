import { Request, Response, Router }    from 'express';
import { usersController }              from './user.controller';

export const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => {
    const data = usersController.getUser();
    res.send(data);
});

userRouter.post('/', (req: Request, res: Response) => {
    const response = usersController.saveNewUser();
    res.send(response);
});

userRouter.put('/', (req: Request, res: Response) => {
    const response = usersController.updateUser();
    res.send(response);
});
