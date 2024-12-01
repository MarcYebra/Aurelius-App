class InterviewsController < ApplicationController
  before_action :authenticate_user!

  def show
    interview = current_user.interviews.find(params[:id])
    render json: interview, include: :questions_and_answers, status: :ok
  end

  def create 
    #This will fetch the job description from the form
    job_description = param[:job_description]

    #This will call OpenAI API to generate questions
    questions = OpenAIService.generate_questions(job_description)

    #This will create a new interview and save questions
    interview = current_user.interviews.create(title: "Interview")

    questions.each_with_index do |question, index|
      interview.questions_and_answers.create(question: question, sequence: index + 1)
    end

    render json: { id: interview.id, message: "Interview created successfully"}, status: :created
  end
end