const https = require('https')


channel_id = "UCYc2dDPuAzbySHNj-CzLckQ"
key = "AIzaSyAmfuCVpImQT3vUBZD5CRA6z-urx5XM8GY" // api key ko to sir haha palitan nyo nalang ng inyo if u want- jerome
count = 3
url = `https://youtube.googleapis.com/youtube/v3/search?part=id&channelId=${channel_id}&maxResults=${count}&order=relevance&key=${key}`


const req = https.request(url, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()