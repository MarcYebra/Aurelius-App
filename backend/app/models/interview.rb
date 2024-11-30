class Interview < ApplicationRecord
  belongs_to :user
  has_many :questions_and_answers, dependent: :destroy
end
