class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  post '/users' do
    user = User.create(username: params[:username], email: params[:email], password: params[:password])
    if user.save
      { message: 'User created successfully' }.to_json
    else
      console.log('wtf')
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

  get '/users/:username?' do
    username = params[:username] || params[:username]
    if username == 'all'
      users = User.all
    else
      users = User.where(username: username)
    end
    users.to_json
  end


end
