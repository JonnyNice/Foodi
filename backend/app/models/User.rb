class User < ActiveRecord::Base
    has_many :recipes
    has_many :comments

    attribute :username, :string
    attribute :email, :string
    attribute :password_digest, :string

    has_secure_password
end