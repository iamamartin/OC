Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	# First route
	root to: 'pages#index'
	
	
	
	namespace :api do 
		namespace :v1 do 
			resources :heros
		 end 
	end 

end
