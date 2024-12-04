class Interview < ApplicationRecord
  belongs_to :user
  has_many :questions_and_answers, class_name: 'QuestionsAndAnswers', foreign_key: 'interview_id',  dependent: :destroy
end
