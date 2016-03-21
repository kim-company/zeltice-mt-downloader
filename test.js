var url = require("url")
var path = require("path")
var mtd = require('./index.js')

// Easy https
// var target_url = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"

// Https that has already been manually redirected
// var target_url = "https://upload.wikimedia.org/wikipedia/commons/4/47/Gadget_the_pug_expressive_eyes.jpg"

// Redirecting URL
// var target_url = "http://upload.wikimedia.org/wikipedia/commons/4/47/Gadget_the_pug_expressive_eyes.jpg"

// Large video file, manually redirected
// this actually redirects to a similar url
// var target_url = "https://r6---sn-q4f7sn7s.googlevideo.com/videoplayback?requiressl=yes&id=f87d9f67f9ed98d8&itag=22&source=webdrive&app=texmex&ip=2001:4800:7821:105:be76:4eff:fe06:850e&ipbits=32&expire=1457840198&sparams=expire,id,ip,ipbits,itag,mm,mn,ms,mv,nh,pl,requiressl,source&signature=36295210A631AE6168D0A0841C6F2C32033713B5.74BD563372CE0E5D38080993A7EDCED70766B29A&key=cms1&pl=48&redirect_counter=1&req_id=186d22265b8da3ee&cms_redirect=yes&mm=30&mn=sn-q4f7sn7s&ms=nxu&mt=1457831954&mv=u&nh=IgpwcjAxLmRmdzA2KgkxMjcuMC4wLjE"

// The real world URL that would be used often.
// var target_url = "https://redirector.googlevideo.com/videoplayback?requiressl=yes&id=a59ef6254f60f8c8&itag=18&source=webdrive&app=texmex&ip=2001:19f0:6000:9ad4:5400:ff:fe20:66ec&ipbits=32&expire=1457845541&sparams=requiressl,id,itag,source,ip,ipbits,expire&signature=86BEBB382120D560E2620F3FB7D7F1FA8AA4AECF.2A790E168B3A74B849C54B5EBFDC57A8E9B3E7AD&key=ck2&mm=30&mn=sn-a5m7ln76&ms=nxu&mt=1457830977&mv=u&nh=IgpwcjAxLmxheDAyKgkxMjcuMC4wLjE&pl=38"

// Shorthand URL
var target_url = "upload.wikimedia.org/wikipedia/commons/4/47/Gadget_the_pug_expressive_eyes.jpg"

var file_name = path.basename(url.parse(target_url).pathname)
// console.log('file_name:', file_name)

var file_path = path.join(__dirname, file_name)

var options = {
  count: 8,
  onEnd: (err) => {
    if (err)
      console.log("Ended with error:", err)
    else
      console.log("Finished downloading file.")
  }
}

var downloader = new mtd(file_path, target_url, options)
console.log('file_path:', file_path)

downloader.start()
