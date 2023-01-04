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
    username = params[:username]
    if username.nil? || username == 'all'
      recipes = Recipe.all
    else
      recipes = Recipe.joins(:user).where(users: { username: username })
    end
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

  get '/recipes/:id' do
    recipe = Recipe.find(params[:id])
    recipe.to_json
  end
  post '/login' do
    # Check if the user entered a username or an email
    user = User.find_by(username: params[:username]) || User.find_by(email: params[:username])

    # Check if the user exists and the password is correct
    if user && user.authenticate(params[:password])
      # Generate a new session and return a JSON response with a success message
      session[:user_id] = user.id
      { message: 'Logged in successfully' }.to_json
    else
      # Return a JSON response with an error message
      { error: 'Invalid username/email or password' }.to_json
    end
  end


end
