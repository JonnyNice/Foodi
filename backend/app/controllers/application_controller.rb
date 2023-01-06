class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  enable :sessions
  set :session_secret, SecureRandom.hex

  before do
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end

  get '/protected_route' do
    @current_user = User.find(session[:user_id])
    puts "session[:user_id]: #{session[:user_id]}"
    if @current_user.save
      redirect "/dashboard/#{@current_user.username}"
    else
      redirect '/login'
    end
  end

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

  get '/recipes/:id/comments' do
    recipe = Recipe.find(params[:id])
    comments = recipe.comments
    comments.to_json
  end

  get '/comments/:user_id' do
    user_id = params[:user_id]
    comments = Comment.where(user_id: user_id)
    comments.to_json
  end

  patch '/comments/:id' do
    id = params[:id]
    comment = Comment.find_by(id: id)
    if comment
      comment.update(comment: params[:comment])
      updated_comments = Comment.where(user_id: comment.user_id)
      return updated_comments.to_json
    else
      status 404
    end
  end

  get '/comments_with_recipes/:user_id' do
    user_id = params[:user_id]
    comments = Comment.where(user_id: user_id).includes(:recipe)
    comments_with_recipes = comments.map do |comment|
      {
        id: comment.id,
        comment: comment.comment,
        recipe_id: comment.recipe_id,
        recipe_title: comment.recipe.name
      }
    end
    comments_with_recipes.to_json
  end

  patch '/users/:id' do
    id = params[:id]
    user = User.find_by(id: id)
    if user
      user.update(image: params[:image], bio: params[:bio])
      redirect '/users'
    else
      status 404
    end
  end

  post '/comments' do
    user_id = params[:user_id]  # Retrieve the user_id from the request parameters
    if user_id.nil?  # If user_id is nil, return a 422 status code
      status 422
    else
      comment = Comment.new(comment: params[:comment], user_id: user_id, recipe_id: params[:recipe_id])
      if comment.save
        status 201
      else
        status 422
      end
    end
  end

  get '/users/:username' do
    user = User.find_by(username: params[:username])
    if user
      user.to_json
    else
      status 404
      { error: 'User not found' }.to_json
    end
  end

  delete '/comments/:id' do
    comment = Comment.find(params[:id])
    comment.destroy
  end
  

end
