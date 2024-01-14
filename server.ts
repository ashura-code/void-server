import main from './logic'
import express from "express";
const app = express();

//main server

app.get('/songs/:name', async (req, res) => {
  const name = req.params.name;
  if(false){ 
    //search existing database for the song.
    // if not available add the new data into the database.
  }else{ 
  const result = await main(name);
  res.json(result);
  }
});


app.listen(process.env.PORT || 3000);



// app.listen(PORT,()=>{
//      console.log(`listening on port ${PORT}`)
// })
