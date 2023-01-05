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
    # Find the user by their email or username
    user = User.find_by(email: params[:emailOrUsername]) || User.find_by(username: params[:emailOrUsername])
  
    # If the user exists and the password is correct, log the user in by saving their information in the session
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      { message: 'Logged in successfully' }.to_json
      redirect "/dashboard/#{user.username}"
    # If the user doesn't exist or the password is incorrect, return an error message
    else
      { error: 'Invalid email/username or password' }.to_json
    end
  end

  get '/dashboard/:username' do
    user = User.find_by(username: params[:username])
    if user
      user.to_json
    else
      # Handle the case where the user doesn't exist
    end
  end

  post '/recipes' do
    user = User.find_by(username: params[:username])
    recipe = Recipe.new(
      user_id: user.id,
      name: params[:name],
      ingredients: params[:ingredients],
      instructions: params[:instructions]
    )
    if recipe.save
      { message: 'Recipe created successfully' }.to_json
    else
      { error: 'Error creating recipe' }.to_json
    end
  end

end
