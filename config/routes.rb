Rails.application.routes.draw do
  devise_for :users, controllers: { 
    sessions: 'users/sessions' 
  }
  root 'pages#index'
  get 'pages/index'

  match '*path', to: 'pages#index', via: :all
end
