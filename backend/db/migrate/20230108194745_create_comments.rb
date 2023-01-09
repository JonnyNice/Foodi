class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment
      t.integer :rating
      t.belongs_to :user
      t.belongs_to :recipe
    end
  end
end