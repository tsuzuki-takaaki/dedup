require 'sinatra'
require "sinatra/json"

get '/' do
  a = {id: 1, name: "Hello"}
  json a
end

