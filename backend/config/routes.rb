Rails.application.routes.draw do
  # Root route for the home controller
  root to: "home#index"

  # Devise routes for user authentication
  devise_for :users

  # API namespace for versioned API routes
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :create]
    end
  end

  # Ensure React routes do not interfere with Devise routes
  # get '*path', to: 'home#index', constraints: ->(req) do
  #   req.format.html? && !req.path.start_with?('/users') &&
  #   !req.path.start_with?('/api') # Exclude API paths as well
  # end

  # API endpoint to fetch the current user
  get '/api/user', to: 'users#show'

  # User-specific routes for edit, update, and dashboard
  resources :users, only: [:edit, :update] do
    collection do
      get :dashboard
    end
  end

  # Routes for interviews and nested questions/answers
  resources :interviews, only: [:create, :index, :show] do
    resources :questions_and_answers, only: [:update]
  end

  # Additional routes for questions and answers
  resources :questions_and_answers, only: [] do
    member do
      post :transcribe
    end
  end
end
