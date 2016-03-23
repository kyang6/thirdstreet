class Student < ActiveRecord::Base
	has_many :experiences
  	accepts_nested_attributes_for :experiences, reject_if: :all_blank, allow_destroy: true

  	has_many :skills
  	accepts_nested_attributes_for :skills, reject_if: :all_blank, allow_destroy: true

  	has_many :projects
  	accepts_nested_attributes_for :projects, reject_if: :all_blank, allow_destroy: true

  	has_many :awards
  	accepts_nested_attributes_for :awards, reject_if: :all_blank, allow_destroy: true

  	has_many :activities
  	accepts_nested_attributes_for :activities, reject_if: :all_blank, allow_destroy: true

  	has_many :educations
  	accepts_nested_attributes_for :educations, reject_if: :all_blank, allow_destroy: true

    belongs_to :user

    belongs_to :team


end
