class CreateCreators < ActiveRecord::Migration[6.1]
  def change
    create_table :creators do |t|
      t.string :name
      t.string :bio
      t.string :image
    end
  end
end
