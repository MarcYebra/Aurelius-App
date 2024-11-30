Rails.application.routes.draw do
  devise_for :users
  
  root to: "home#index"

  resources :users, only: [:show, :edit, :update] do 
    collection do 
      get :dashboard
    end
  end


  resources :mock_interviews, only: [:create, :index, :show] do
    resources :questions_and_answers, only: [:update]
  end

end
