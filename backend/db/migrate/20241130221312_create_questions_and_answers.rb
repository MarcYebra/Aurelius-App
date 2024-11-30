class CreateQuestionsAndAnswers < ActiveRecord::Migration[8.0]
  def change
    create_table :questions_and_answers do |t|
      t.references :interviews, null: false, foreign_key: true 
      t.text :question 
      t.text :answer
      t.integer :sequence
      t.timestamps
    end
  end
end
