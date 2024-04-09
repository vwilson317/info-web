import express, { Request, Response } from 'express';
import { getCountAsync, createReviewAsync, createIngredientAsync, getIngredientsAsync, searchForIngredient } from './dataAccess';
import { Review } from './models/review';
import { Ingredient } from './models/ingredient';
import _ from 'lodash';

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
  const review: Review = req.body;
  await createReviewAsync(review);
  console.log('Review created:', review.Id);
});

app.get('/api/reviews', async (req: Request, res: Response) => {
  res.json({} as Review);
});

app.get('/api/ingredients', async (req: Request, res: Response) => {
  const hasParams = !_.isEmpty(req.query.query);
  if(hasParams) {
    const ingredients: Ingredient[] = await searchForIngredient(req.query?.query);
    res.json(ingredients);
  } else {
    const ingredients = await getIngredientsAsync();
    res.json(ingredients);
  }
});

app.post('/api/ingredients', async (req: Request, res: Response) => {
  const ingredient: Ingredient = req.body;
  const id = await createIngredientAsync(ingredient);

  console.log('Ingredient created:', id);

  ingredient.Id = id;
  res.json(ingredient);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})