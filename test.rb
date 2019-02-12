require 'uri'
require 'net/http'

threads  = []

100.times do
  threads << Thread.new do
    url = URI("http://mjw-vm-ruby/api")

    http = Net::HTTP.new(url.host, url.port)

    request = Net::HTTP::Get.new(url)
    request["Content-Type"] = 'application/json'

    response = http.request(request)
    puts response.read_body
  end

  threads.each(&:join)
end