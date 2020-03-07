Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  
  devise_scope :registrations do 
    post 'create', to: "devise/users/registrations#create"
    get :logged_in, to: "devise/users/sessions#logged_in"
    delete :logout, to: "devise/users/session#logout" 
  end

  root 'pages#index'
  get 'pages/index'

  match '*path', to: 'pages#index', via: :all
end
