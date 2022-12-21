# frozen_string_literal: true

module Types
  class TodoType < Types::BaseObject
    field :id, ID, null: false
    field :action, String
    field :deadline, GraphQL::Types::ISO8601Date
    field :important, Boolean
    field :urgent, Boolean
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :email, String
  end
end
