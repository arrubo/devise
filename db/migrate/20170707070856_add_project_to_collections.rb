class AddProjectToCollections < ActiveRecord::Migration[5.1]
  def change
    add_reference :collections, :collection, foreign_key: true
  end
end
