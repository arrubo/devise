class AddUploadedAtAndPersistedAtToSources < ActiveRecord::Migration[5.1]
  def change
    add_column :sources, :uploaded_at, :datetime
    add_column :sources, :persisted_at, :datetime
  end
end
