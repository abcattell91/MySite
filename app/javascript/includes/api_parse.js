require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://movies115.p.rapidapi.com/cartaz/%7BcinemaId%7D")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["X-RapidAPI-Host"] = 'movies115.p.rapidapi.com'
request["X-RapidAPI-Key"] = '2e94d4b0b8mshf58fa3b3ddda0bdp1bddb6jsn9db0cf918898'

response = http.request(request)
puts response.read_body
