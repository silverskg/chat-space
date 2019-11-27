Rails.application.routes.draw do
  root to: "messages#index"
  devise_for :users
  resource :users, only: [:index, :edit, :update]
  # resource :groups, only: [:new, :create, :edit, :update]
end
