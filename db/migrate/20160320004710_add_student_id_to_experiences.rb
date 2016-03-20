class AddStudentIdToExperiences < ActiveRecord::Migration
  def change
    add_column :experiences, :student_id, :integer
  end
end
