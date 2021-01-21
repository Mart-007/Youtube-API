const youtube = require('scrape-youtube').default;
//const express = require('express');
//const app = express();

youtube.search('Team Lyqa/Algebra Fundamentals').then(results => {
    console.log(results.videos);
});



//var Team = require('https://www.youtube.com/c/TeamLyqa/featured')
//app.get('Team Lyka/Algebra Fundamentals',(req, res) => {
  //  res.send(Team)
//});

//app.listen(3001, function() {
  //  console.log('listening on port 3001...');
//})

