import main from './logic';
import express from 'express';
const app = express();
import { data_inter, data_search } from './database_interaction';


// main server

app.get('/songs/:name', async (req, res) => {
  const name = req.params.name;
  //search for the song in the db
  const searchResult = await data_search(name);

  //if the result from the database is less than or  5

  if (searchResult.length <= 5) {
    //get the results from the server and show it
    const result = await main(name);
    res.json(result);
    //add the new data to the database
    result.map((song) => {
      data_inter(song.name, song.image, song.subtitle, song.url);
    });
  }else{
    res.json(searchResult);
  }
});



app.listen(process.env.PORT || 3000);
