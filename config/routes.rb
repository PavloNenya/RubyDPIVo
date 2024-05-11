Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'producers/:id', to: 'producers#show'
    get 'producers/name/:name', to: 'producers#name'
    get 'categories/:id', to: 'categories#show'
    get 'categories/name/:name', to: 'categories#name'
    get 'roles/:id', to: 'roles#show'
    get 'roles/name/:name', to: 'roles#name'
    get 'colors/:id', to: 'colors#show'
    get 'colors/name/:name', to: 'colors#name'
    get 'sizes/:id', to: 'sizes#show'
    get 'sizes/name/:name', to: 'sizes#name'
    resources :producers, only: [:index]
    resources :categories, only: [:index]
    resources :colors, only: [:index]
    resources :roles, only: [:index]
    resources :sizes, only: [:index, :create]
  end
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
