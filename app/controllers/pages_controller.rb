require "open-uri"

class PagesController < ApplicationController

  def home
  end

  def trending
    response = URI.open("https://imdb-api.com/en/API/ComingSoon/k_k3s70pl3")
    json = JSON.parse(response)
    json['title']
  end

end
