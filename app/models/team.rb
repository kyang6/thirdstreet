class Team < ActiveRecord::Base
	has_many :students
	has_many :events

	accepts_nested_attributes_for :events, reject_if: :all_blank, allow_destroy: true

end
