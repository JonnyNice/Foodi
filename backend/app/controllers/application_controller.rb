class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/creators" do 
    creators = Creator.all
    creators.to_json
  end
  
  get '/recipes' do
    creator_name = params[:creator_name] || 'all'
    if creator_name == 'all'
      recipes = Recipe.all
    else
      creator = Creator.find_by(name: creator_name)
      recipes = Recipe.where(creator: creator)
    end
    recipes.to_json
  end

    get '/creators/:name' do
      creator = Creator.find_by(name: params[:name])
      creator.to_json
    end

end
