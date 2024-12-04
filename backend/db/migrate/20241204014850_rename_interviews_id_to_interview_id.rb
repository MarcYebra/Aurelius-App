class RenameInterviewsIdToInterviewId < ActiveRecord::Migration[8.0]
  def change
    rename_column :questions_and_answers, :interviews_id, :interview_id
  end
end
