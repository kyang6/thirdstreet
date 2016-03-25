class Event < ActiveRecord::Base
	belongs_to :team
	has_attached_file :image, :styles => { :large => "600x600#", :thumb => "100x100>" }
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
