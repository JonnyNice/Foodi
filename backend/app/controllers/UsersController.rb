require_relative './application_controller'


class UsersController < ApplicationController
    # Handle a POST request to create a new user
    # post '/users' do
    #   user = User.create(username: params[:username], email: params[:email], password: params[:password])
    #   if user.save
    #     { message: 'User created successfully' }.to_json
    #   else
    #     console.log('wtf')
    #     # return a JSON response with an error message
    #   end
    # end
    get "/users" do 
        users = User.all
        users.to_json
      end
    # get '/users' do
    #     users = User.all
    #     users.to_json
    #   end
  
    # Other actions (e.g., GET '/users/:id', DELETE '/users/:id') go here
  end