channel_id = "UCYc2dDPuAzbySHNj-CzLckQ"
key = "AIzaSyAmfuCVpImQT3vUBZD5CRA6z-urx5XM8GY" // api key ko to sir haha palitan nyo nalang ng inyo if u want- jerome

url = `https://youtube.googleapis.com/youtube/v3/search?part=id&channelId=UCYc2dDPuAzbySHNj-CzLckQ&maxResults=3&order=relevance&key=${key}`

const https = require('https')

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