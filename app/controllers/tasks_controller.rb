class TasksController < ApplicationController
  def edit
    @todo = Todo.find(params[:edit])
  end
end
