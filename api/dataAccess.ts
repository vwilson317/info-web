const sqlServer = require('mssql')
import { Ingredient } from './models/ingredient';
import { Review } from './models/review';

// Create a connection pool
const config = {
  server: 'localhost',
  user: 'ServiceAccount',
  password: 'local123',
  database: 'BodyByBurgersDB',
    // port: 1433,
  options: {
    // encrypt: true // Use this if you're on Windows Azure
    trustServerCertificate: true  
  }
}
let _pool: any;
sqlServer.connect(config).then((pool: any) => {
  if(pool.connecting) {
    console.log('Connecting to the database...');
  } else if (pool.connected) {
    console.log('Connected to the database.');
    _pool = pool; 
  }
}).catch((err: any) => {
  console.error('Database connection failed!', err);
});

async function query(sql: string, params =[]){
  try{
    if(params.length == 0) {
      const results = await _pool.request().query(sql);
      return results.recordsets[0];
    } else {
      //todo: not fully implemented for mutiple or different value types
      //only support 1 Id parameter for now
      const results = await _pool.request()
      .input('id', sqlServer.BigInt, params[0])
      .query(sql, params);
      return results.recordsets[0];
    }

  } catch(err){
    console.log(err);
    // throw err;
  }
  // const [rows] = await pool.execute(sql, params);
  // return rows;
};

export async function getCountAsync(): Promise<number>{
    const quertStr = "select count(*) from BurgersEaten";
    
    //this is business logic, so it should not be in the data access layer
    const results = await query(quertStr);
    return results[0][''];
};

export async function createReviewAsync(review: Review): Promise<number> {
  let id: number;

  const request = _pool.request()
  .input('Name', sqlServer.VarChar, review.Name)
  .input('Description', sqlServer.VarChar, review.Description)
  .input('Location', sqlServer.VarChar, review.Location)
  .input('GeoLocation', sqlServer.VarChar, review.GeoLocation)
  .input('Date', sqlServer.Date, review.Date)
  .input('Rating', sqlServer.Decimal(2,1), review.Rating)
  .input('Price', sqlServer.Decimal(5,2), review.Price)
  .output('Id', sqlServer.Int);
  
  request.execute('sp_CreateReview', function(err, recordsets, returnValue, affected) {
    if(err) console.log(err);
    id = request.parameters.Id;
  });

  // write to insert pictures
  // foreach (ingredient in review.Ingredients) {
  //   _pool.request()
  //   .input('Id', sqlServer.Int, id)
  //   .input('Ingredient', sqlServer.VarChar, ingredient)
  //   .execute('SP_CreateIngredient')
  // }

  return id;
};

export async function createIngredientAsync(ingredient: Ingredient): Promise<number> {
  let id: number;

  const request = _pool.request()
  .input('Name', sqlServer.VarChar, ingredient.Name)
  .input('Icon', sqlServer.VarChar, ingredient.Icon)
  .output('Id', sqlServer.Int);
  
  request.execute('sp_CreateIngredient', function(err, recordsets, returnValue, affected) {
    if(err) console.log(err);
    id = request.parameters.Id;
  });

  return id;
}

export async function getIngredientsAsync(): Promise<Ingredient[]> {

  const selectStr = "select * from Ingredients";
  const results = await query(selectStr);
  return results[0][''];
}

export async function searchForIngredient(query: string | undefined): Promise<Ingredient[]> {
  //todo: implement search
  return [];
}