CouchbasePrototype::Application.routes.draw do
  root :to => 'welcome#index'
 	match '/dashboards' => 'dashboards#index'
  resources :stat_configuration_types
  resources :stat_configurations
  resources :stat_configuration_stats
end
