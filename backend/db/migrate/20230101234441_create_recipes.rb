class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :ingredients
      t.string :instructions
      t.string :image
      t.integer :cooktime
      t.boolean :spicy
      t.boolean :vegan
      t.boolean :contains_thc
      t.belongs_to :user
    end
  end
end
