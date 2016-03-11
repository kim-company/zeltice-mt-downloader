var url = require("url")
var path = require("path")
var mtd = require('./index.js')

// Easy https
var target_url = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"

// Https that has already been manually redirected
var target_url = "https://upload.wikimedia.org/wikipedia/commons/4/47/Gadget_the_pug_expressive_eyes.jpg"

// Redirecting URL
// TODO does not handle redirects
// var target_url = "http://upload.wikimedia.org/wikipedia/commons/4/47/Gadget_the_pug_expressive_eyes.jpg"

// Large video file, manually redirected
// var target_url = "https://r6---sn-o097znek.googlevideo.com/videoplayback?requiressl=yes&id=bc5e466893bd8dfd&itag=22&source=webdrive&app=texmex&ip=73.66.2.110&ipbits=32&expire=1457653631&sparams=expire,id,ip,ipbits,itag,mm,mn,ms,mv,nh,pl,requiressl,source&signature=0A46BEC939C8C38B9173A9BEFEDF822F6E46256F.1038A82EC7EBF8B87D975E5C49FE4A00BC026A6B&key=cms1&pl=16&cms_redirect=yes&mm=31&mn=sn-o097znek&ms=au&mt=1457641728&mv=m&nh=IgpwcjA0LnNqYzA3KgkxMjcuMC4wLjE"

// The real world URL that would be used often.
// var target_url = "https://redirector.googlevideo.com/videoplayback?requiressl=yes&id=bc5e466893bd8dfd&itag=22&source=webdrive&app=texmex&ip=2001:19f0:6000:9ad4:5400:ff:fe20:66ec&ipbits=32&expire=1457653631&sparams=requiressl,id,itag,source,ip,ipbits,expire&signature=54B4128F7DEE869B5F9634F4324381615E2EE5F8.82BFEF3C6413E546CE110BC02682DED8C25FD3D8&key=ck2&mm=30&mn=sn-a5m7ln7y&ms=nxu&mt=1457638426&mv=u&nh=IgpwcjAxLmxheDAyKgkxMjcuMC4wLjE&pl=38"

var file_name = path.basename(url.parse(target_url).pathname)
// console.log('file_name:', file_name)

var file_path = path.join(__dirname, file_name)

var options = {
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
