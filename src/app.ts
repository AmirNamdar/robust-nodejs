import * as Routers                 from './services/routers';
import express                      from 'express';
import cors                         from 'cors';


const app = express();
// Middlewares
app.use(cors());

// Routes
app.use('/assets', express.static('public'))
app.use('/user', Routers.userRouter);
app.use('/store', Routers.storeRouter);

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello Human");
});

export default app;