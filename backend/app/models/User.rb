class User < ActiveRecord::Base
    has_many :recipes
    has_many :comments

    def as_json(options={})
        super(options.merge({include: :recipes}))
    end

    attribute :username, :string
    attribute :email, :string
    attribute :password_digest, :string

    has_secure_password
end