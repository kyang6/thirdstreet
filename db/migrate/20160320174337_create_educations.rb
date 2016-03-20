class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
      t.text :description
      t.integer :student_id

      t.timestamps null: false
    end
  end
end
