class CreateFaves < ActiveRecord::Migration[5.2]
  def change
    create_table :faves do |t|
      t.string :UserID
      t.string :ULine
      t.string :UColor

      t.timestamps
    end
  end
end
