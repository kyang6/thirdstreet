class AddStudentIdToAwards < ActiveRecord::Migration
  def change
    add_column :awards, :student_id, :integer
  end
end
