class Team < ActiveRecord::Base
	has_many :students
	has_many :events

	accepts_nested_attributes_for :events, reject_if: :all_blank, allow_destroy: true

	has_attached_file :image, :styles => { :large => "600x600#", :medium => "300x300#", :thumb => "100x100>" }
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
