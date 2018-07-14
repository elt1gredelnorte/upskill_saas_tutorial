class CreatePlan < ActiveRecord::Migration[5.0]
  def change
    create_table :plan do |t|
      t.string :name
      t.decimal :price
      t.timestamps
    end
  end
end