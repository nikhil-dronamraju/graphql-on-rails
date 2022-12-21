require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::TodosFilter < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)
  scope { Todo.all }

  type [Types::TodoType], null: false

  class OrderEnum < Types::BaseEnum
    graphql_name 'CategoryOrder'
    value 'EARLIEST'
    value 'LATEST'
  end

  option :action_contains, type: String, with: :action_contains
  option :order, type: OrderEnum, default: 'EARLIEST'
  option :important, type: Boolean, with: :is_important
  option :urgent, type: Boolean, with: :is_urgent
  option :email, type: String, with: :email_is


  def action_contains(scope, value)
    def escape_search_term(term)
        "%#{term.gsub(/\s+/, '%')}%"
    end
    scope.where 'action LIKE ?', escape_search_term(value)
  end

  def apply_order_with_earliest(scope)
    scope.order 'deadline ASC'
  end

  def apply_order_with_latest(scope)
    scope.order 'deadline desc'
  end

  def is_important(scope, value)
    scope.where important: value
  end

  def is_urgent(scope, value)
    scope.where urgent: value
  end

  def email_is(scope, value)
    scope.where email: value
  end
  
end