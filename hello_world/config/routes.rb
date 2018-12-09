Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	# First route
	root to: 'pages#index'
	
	# Sample User Page
	resources :users
	
	# save the fave !
	get '/faves/save', to: 'faves#save'
	get '/faves', to: 'faves#index'
	
	
	# Attempted API
	namespace :api do 
		namespace :v1 do 
			resources :heros
		 end 
	end 

end
