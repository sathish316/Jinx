class TodosController < ApplicationController
  skip_before_filter :verify_authenticity_token

  # GET /todos
  # GET /todos.xml
  def index
    @todos = Todo.all

    respond_to do |format|
      format.html # index.html.erb
      format.json  { render :json => @todos.to_json }
    end
  end

  # GET /todos/1
  # GET /todos/1.xml
  def show
    @todo = Todo.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json  { render :json => @todo.to_json }
    end
  end

  # GET /todos/new
  # GET /todos/new.xml
  def new
    @todo = Todo.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @todo }
    end
  end

  # GET /todos/1/edit
  def edit
    @todo = Todo.find(params[:id])
  end

  # POST /todos
  # POST /todos.xml
  def create
    @todo = Todo.new(params[:todo])

    respond_to do |format|
      if @todo.save
        flash[:notice] = 'Todo was successfully created.'
        format.html { redirect_to(@todo) }
        format.json { head :created, :location => todo_url(@todo, :format => :json)}
      else
        format.html { render :action => "new" }
        format.json  { render :json => @todo.errors.to_json, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /todos/1
  # PUT /todos/1.xml
  def update
    @todo = Todo.find(params[:id])

    respond_to do |format|
      if @todo.update_attributes(params[:todo])
        flash[:notice] = 'Todo was successfully updated.'
        format.html { redirect_to(@todo) }
        format.json  { head :ok }
      else
        format.html { render :action => "edit" }
        format.json  { render :json => @todo.errors.to_json, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.xml
  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy

    respond_to do |format|
      format.html { redirect_to(todos_url) }
      format.json  { head :ok }
    end
  end
end
