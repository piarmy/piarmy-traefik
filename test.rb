require 'uri'
require 'net/http'
require 'json'
require 'awesome_print'

threads = []

iterations = 10000

hosts = []

iterations.times do |iteration|
  puts iteration

  threads << Thread.new do
    url = URI("http://mqtt/api")

    http = Net::HTTP.new(url.host, url.port)

    request = Net::HTTP::Get.new(url)
    request["Content-Type"] = 'application/json'

    response = http.request(request)
    #puts "[#{Time.now()}] #{response.read_body}"
    #ap JSON.parse(response.read_body)["hostname"]
    hosts.push(JSON.parse(response.read_body)["hostname"])
  end

  threads.each(&:join)
end

counts = Hash.new(0)
hosts.each { |name| counts[name] += 1 }
ap hosts
ap counts