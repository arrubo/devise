Rails.application.routes.draw do

  # collections
  resources :collections

  # dashboards
  resources :dashboards

  # pages
  get "/pages/welcome" => "pages#welcome"

  # sources
  resources :sources do
    collection do
      get "import_form" => "sources#import_form"
      post "import_do" => "sources#import_do"
    end
  end

  # projects
  resources :projects

  # users
  devise_for :users
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "pages#welcome"

end
