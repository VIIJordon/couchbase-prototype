CouchbasePrototype::Application.routes.draw do
  root :to => 'welcome#index'
 	match '/dashboards' => 'dashboards#index'
  resources :stat_configuration_types, :only =>[:index, :show]
  resources :stat_configurations, :only =>[:index, :show]

  namespace :api do
  	resources :stat_configurations

  end
end
