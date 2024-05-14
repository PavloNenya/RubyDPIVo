Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'role/index'
    get 'role/show'
    get 'role/create'
    get 'cart_item/:id', to: 'cart_item#show'
    get 'cart_item', to: 'cart_item#index'
    post 'cart_item', to: 'cart_item#create'
    delete 'cart_item/:id', to: 'cart_item#delete'
    get 'cart_item/create'
    get 'user_profile/index'
    get 'user_profile/show'
    get 'user_profile/create'
    get 'gender/:id', to: 'gender#show'
    get 'gender', to: 'gender#index'
    post 'gender/create', to: 'gender#create'
    delete 'gender/:id', to: 'gender#delete'
    get 'users/:id', to: 'user#show'
    get 'users', to: 'user#index'
    get 'carts/:id', to: 'shopping_cart#show'
    get 'carts', to: 'shopping_cart#index'
    get 'carts/name/:name', to: 'shopping_cart#name'
    post 'carts/:user_id', to: 'shopping_cart#create'
    delete 'carts/:id', to: 'shopping_cart#delete'
    post 'products/filter', to: 'product#filter'
    get 'products/:id', to: 'product#show'
    get 'products', to: 'product#index'
    get 'products/name/:name', to: 'product#name'
    put 'products/:id', to: 'product#update'
    post 'products', to: 'product#create'
    delete 'products/:id', to: 'product#delete'
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
