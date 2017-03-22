Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get 'hello_world', to: 'hello_world#index'
  root 'appointments#index'
  resources :appointments
end
