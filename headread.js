var http = require('http')
var https = require('https')

var url = "https://r12---sn-o097znes.googlevideo.com/videoplayback?requiressl=yes&id=f87d9f67f9ed98d8&itag=22&source=webdrive&app=texmex&ip=73.66.2.110&ipbits=32&expire=1457840198&sparams=expire,id,ip,ipbits,itag,mm,mn,ms,mv,nh,pl,requiressl,source&signature=37B8ED1A6BABD13E9F61AF5A422C61E5E6890478.086C0601F3CEE7C2A1421D9F4BD300B6065E8664&key=cms1&pl=16&req_id=186d22265b8da3ee&redirect_counter=2&cms_redirect=yes&mm=30&mn=sn-o097znes&ms=nxu&mt=1457833471&mv=m&nh=IgpwcjA0LnNqYzA3KgkxMjcuMC4wLjE"

var data_server_request_options = {
  host: 'r12---sn-o097znes.googlevideo.com',
  path: "/videoplayback?requiressl=yes&id=f87d9f67f9ed98d8&itag=22&source=webdrive&app=texmex&ip=73.66.2.110&ipbits=32&expire=1457840198&sparams=expire,id,ip,ipbits,itag,mm,mn,ms,mv,nh,pl,requiressl,source&signature=37B8ED1A6BABD13E9F61AF5A422C61E5E6890478.086C0601F3CEE7C2A1421D9F4BD300B6065E8664&key=cms1&pl=16&req_id=186d22265b8da3ee&redirect_counter=2&cms_redirect=yes&mm=30&mn=sn-o097znes&ms=nxu&mt=1457833471&mv=m&nh=IgpwcjA0LnNqYzA3KgkxMjcuMC4wLjE",
  port: 443,
  method: "HEAD",
  headers: {

  },
}

var my_req = https.request(data_server_request_options, function (data_server_response) {
  console.log('res.headers', data_server_response.headers)
  // console.log("RESPONSE CODE:", data_server_response.statusCode)

  if ( data_server_response.statusCode >= 400 ) {
    var err = "Error fetching data from data server. (status code: " + data_server_response.statusCode + ")"
    console.log('ERR:', err)
    return
  }

  var json_str = ''
  data_server_response.on('data', function (chunk) {
    json_str += chunk;
  })

  data_server_response.on('end', function () {
    // console.log("DATA RECEIVED:", json_str)
    console.log('no errror')
  })
})
my_req.end()