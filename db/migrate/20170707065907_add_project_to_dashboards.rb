class AddProjectToDashboards < ActiveRecord::Migration[5.1]
  def change
    add_reference :dashboards, :project, foreign_key: true
  end
end
