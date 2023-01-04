class Recipe < ActiveRecord::Base
    belongs_to :creator
    has_many :comments

    def as_json(options={})
        super(options.merge({include: :creator}))
    end
end