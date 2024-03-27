import express, { Request, Response } from 'express';
import { getCountAsync } from './dataAccess';
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/count', async (req: Request, res: Response) => {
    const count = await getCountAsync();
    // res.send('Hello, TypeScript Express!');
    res.json({count: count});
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })