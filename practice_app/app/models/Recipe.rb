class Recipe < ActiveRecord::Base
    belongs_to :creator
    has_many :comments
    
end