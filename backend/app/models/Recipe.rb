class Recipe < ActiveRecord::Base
    belongs_to :user
    has_many :comments

    def as_json(options={})
        super(options.merge({include: :user}))
    end
end