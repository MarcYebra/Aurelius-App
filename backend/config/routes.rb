Rails.application.routes.draw do
  devise_for :users

  root to: "home#index"


  resources :users, only: [:show, :edit, :update] do 
    collection do 
      get :dashboard
    end
  end

  resources :interviews, only: [:create, :index, :show] do
    resources :questions_and_answers, only: [:update]
  end

  resources :questions_and_answers, only: [] do
    member do
      post :transcribe 
    end
  end
end
