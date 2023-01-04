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
    creator_name = params[:creator_name] || 'all'
    if creator_name == 'all'
      recipes = Recipe.all
    else
      User = User.find_by(name: creator_name)
      recipes = Recipe.where(creator: creator)
    end
    recipes.to_json
  end

  get '/users/:username' do
    user = User.find_by(username: params[:username])
    user.to_json
  end

end
