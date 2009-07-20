class AddDoneFlagToTodos < ActiveRecord::Migration
  def self.up
    add_column :todos, :done, :boolean
  end

  def self.down
    remove_column :todos, :done, :boolean
  end
end
