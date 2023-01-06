class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  enable :sessions
  set :session_secret, SecureRandom.hex

  ##TEST##
  ##The before block runs before each request and checks for the presence of the user_id
  ##in the session. If it exists, it sets the @current_user variable to the user with that ID.
  before do
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end
  ##The /protected_route route checks for the presence of the @current_user variable. If it exists, it redirects the user to the 
  ##/dashboard/:username route, where :username is the user's username. If the @current_user variable is not set, it redirects the user to the /login route.
  get '/protected_route' do
    ##test
    @current_user = User.find(session[:user_id])
    ##test - so far no change
    puts "session[:user_id]: #{session[:user_id]}"
    if @current_user.save
      ##.save is also a test - so far no change
      # The user is logged in, so allow them to access the route
      redirect "/dashboard/#{@current_user.username}"
    else
      # The user is not logged in, so redirect them to the login page or return an error
      redirect '/login'
    end
  end
  ##test##
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  post '/users' do
    user = User.create(username: params[:username], email: params[:email], password: params[:password])
    if user.save
      { message: 'User created successfully' }.to_json
    else
      puts('wtf')
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

  delete '/recipes/:id' do
    recipe = Recipe.find(params[:id])
    recipe.destroy
    { message: 'Recipe deleted successfully' }.to_json
  end

  get '/users/:username' do
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
    user = User.find_by(email: params[:emailOrUsername]) || User.find_by(username: params[:emailOrUsername])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      @current_user = user
      redirect "/dashboard/#{user.username}"
    else
      { error: 'Invalid email/username or password' }.to_json
    end
  end

  ##TESTING###
  # get '/dashboard/:username' do
  #   user = User.find_by(username: params[:username])
  #   if user
  #     user.to_json
  #   else
  #     # Handle the case where the user doesn't exist
  #     status 404
  #   { error: 'User not found' }.to_json
  #   end
  # end
  get '/dashboard/:username' do
    @current_user = User.find_by(username: params[:username])
    if @current_user
      @current_user.to_json
    else
      status 404
      { error: 'User not found or not logged in' }.to_json
    end
  end
  
  get '/user/:username' do
    user = User.find_by(username: params[:username])
    if user
      user.to_json
    else
      status 404
      { error: 'User not found' }.to_json
    end
  end

  get '/comments/:recipe_id' do
    comments = Comment.joins(:user).where(recipe_id: params[:recipe_id]).select('comments.*, users.username as username, users.image as image')
    comments.to_json
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

  patch '/recipes/:id/likes' do
    recipe = Recipe.find(params[:id])
    recipe.update(likes: params[:likes])
    recipe.to_json
  end

  get '/recipes/:id/comments' do
    recipe = Recipe.find(params[:id])
    comments = recipe.comments
    comments.to_json
  end

end
