class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable



  has_many :messages
  has_many :group_user
  has_many :grops, through: :group_users  
end    