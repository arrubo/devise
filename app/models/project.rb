class Project < ApplicationRecord

  has_many :dashboards
  has_many :sources
  has_many :collections

  validates :name, :presence => true

end
