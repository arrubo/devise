class AddProjectToSources < ActiveRecord::Migration[5.1]
  def change
    add_reference :sources, :source, foreign_key: true
  end
end
