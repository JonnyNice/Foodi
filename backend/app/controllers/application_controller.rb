class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  post '/users' do
    user = User.create(username: params[:username], email: params[:email], password: params[:password])
    if user.save
      { message: 'User created successfully' }.to_json
    else
      console.log('wtf')
      # return a JSON response with an error message
    end
  end
  get "/users" do 
    users = User.all
    users.to_json
  end
  

  get '/recipes' do
    recipes = Recipe.all
    recipes.to_json
  end

end
