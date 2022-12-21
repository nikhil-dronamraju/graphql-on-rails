Rails.application.routes.draw do
  get 'task_manager/index'
  get 'tasks/*edit', to: 'tasks#edit'
  get 'users/sign_up'
  get 'users/sign_out'
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  root 'users#sign_in'
end
