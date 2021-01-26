const youtube = require('scrape-youtube').default;
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
youtube.search('Team Lyqa/Algebra Fundamentals').then(results => { 
 // console.log(results.videos);
 //res.send(results.videos).then((response)=>{
 res.send(results.videos.map((vid)=> ({id: vid.id, title: vid.title}))
 
   );
  
     
  });
});

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
});


//const { dotenv } = require('dotenv').config();
//const { google } = require('googleapis');
//const { data } = require('googleapis');

//google.youtube('v3').search.list({
  //key: process.env.TOKEN,
  //part: 'snippet',
  //q: 'Team Lyqa',
//}).then((response) => {
  //const { data } = response;
  //data.items.forEach((item) =>{
    //console.log('Title: ${item.snippet.title}\nLink:${item.snippet.link}\n');
 //})
//}).catch((err) => console.log(err));