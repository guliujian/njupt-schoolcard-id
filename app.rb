# encoding: utf-8
require "nokogiri"
require "open-uri"
require 'json'

start_time = Time.now 

$data = []

def parse(url)

  str = open(url)
  doc = Nokogiri::HTML(str, nil, "UTF-8")

  doc.css("tr").each do |t|
    element = t.css("td")
    
    # 忽略最后一行
    if element.size != 4 
      next
    end

    person = []

    element.each do |e|
      person << e.text

      # puts element.index(e)
      # puts e.text 

      # 打印单位信息
      # if e && (element.index(e) == 2)
      #   puts e.text
      # end
    end
    # 加入信息来源网址
    person << url
    $data << person
  end
end

for i in 0..5948 do

  if i % 10 == 0
    puts "Finish #{i}"
  end

  parse("http://my.njupt.edu.cn/ccs/main/searchUser.do?page=#{i}")
end



end_time = Time.now  


File.open("data.json","w") do |f|
  f.write(JSON.pretty_generate($data))
end


puts "=" * 20
puts "Get #{$data.size} Items"
puts "Finish in #{end_time - start_time} s"
puts "Data Write To data.json"







