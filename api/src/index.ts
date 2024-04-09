import express, { Request, Response } from 'express';
import { getCountAsync, createReviewAsync } from './dataAccess';
import { Review } from '../models/review';
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/count', async (req: Request, res: Response) => {
  const count = await getCountAsync();
  // res.send('Hello, TypeScript Express!');
  res.json({ count: count });
});

app.post('/api/reviews', async (req: Request, res: Response) => {
  const review = req.body;
  await createReviewAsync(review);
  console.log('Review created:', review.Id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})