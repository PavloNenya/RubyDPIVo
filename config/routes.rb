Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do

    get 'cart_items', to: 'cart_items#index'
    get 'cart_items/:id', to: 'cart_items#show'
    post 'cart_items', to: 'cart_items#create'
    delete 'cart_items/:id', to: 'cart_items#delete'
    # get 'cart_items/create'

    get 'user_profiles', to: 'user_profiles#index'
    get 'user_profiles/show' , to: 'user_profiles#show'
    # get 'user_profiles/create', to: 'user_profiles#create'

    get 'genders/:id', to: 'genders#show'
    get 'genders', to: 'genders#index'
    post 'genders/create', to: 'genders#create'
    delete 'genders/:id', to: 'genders#delete'

    get 'users/:id', to: 'users#show'
    get 'users', to: 'users#index'

    get 'carts/:id', to: 'shopping_cart#show'
    get 'carts', to: 'shopping_cart#index'
    get 'carts/name/:name', to: 'shopping_cart#name'
    post 'carts/:user_id', to: 'shopping_cart#create'
    delete 'carts/:id', to: 'shopping_cart#delete'

    post 'products/filter', to: 'products#filter'
    get 'products/:id', to: 'products#show'
    get 'products', to: 'products#index'
    get 'products/name/:name', to: 'products#name'
    put 'products/:id', to: 'products#update'
    post 'products', to: 'products#create'
    delete 'products/:id', to: 'products#delete'

    get 'producers/:id', to: 'producers#show'
    get 'producers/name/:name', to: 'producers#name'

    get 'categories/:id', to: 'categories#show'
    get 'categories/name/:name', to: 'categories#name'
    post 'categories', to: 'categories#create'
    delete 'categories/:id', to: 'categories#delete'

    get 'roles/:id', to: 'roles#show'
    get 'roles/name/:name', to: 'roles#name'
    post 'roles', to: 'roles#create'
    delete 'roles/:id', to: 'roles#delete'

    get 'colors/:id', to: 'colors#show'
    get 'colors/name/:name', to: 'colors#name'
    post 'colors', to: 'colors#create'
    delete 'colors/:id', to: 'colors#delete'

    get 'sizes/:id', to: 'sizes#show'
    get 'sizes/name/:name', to: 'sizes#name'
    post 'sizes', to: 'sizes#create'
    delete 'sizes/:id', to: 'sizes#delete'

    resources :producers, only: [:index]
    resources :categories, only: [:index]
    resources :colors, only: [:index]
    resources :roles, only: [:index]
    resources :sizes, only: [:index]
    resources :images, only: [:show]

    devise_scope :user do
      post 'users', to: 'user#create'
      post 'users/login', to: 'user#login'
    end
    devise_for :users, path_names: { sign_up: 'register', sign_in: 'login' }
    delete 'logout', to: 'sessions#destroy'
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
