require_relative "./config/environment"
use Rack::Session::Cookie, secret: SecureRandom.hex

# require_relative './app/controllers/UsersController'

# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end

# Parse JSON from the request body into the params hash
use Rack::JSONBodyParser

# map '/users' do
#   run UsersController.new
# end

# Our application
run ApplicationController
