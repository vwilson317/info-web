const sqlServer = require('mssql')

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

// export const DataAccess = {
//     async GetCountAsync(){

//     }
// }