class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :Line
      t.integer :Color
      t.string :ULine
      t.string :UColor

      t.timestamps
    end
  end
end
