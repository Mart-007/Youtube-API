const https = require('https')


channel_id = "UCYc2dDPuAzbySHNj-CzLckQ"
key = "AIzaSyAmfuCVpImQT3vUBZD5CRA6z-urx5XM8GY" // api key ko to sir haha palitan nyo nalang ng inyo if u want- jerome
count = 10
subject = "math"
part = "id"
order = "relevance"
url = `https://youtube.googleapis.com/youtube/v3/search?part=${part}&channelId=${channel_id}&maxResults=${count}&q=${subject}&order=${order}&key=${key}`

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