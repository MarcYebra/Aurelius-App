class QuestionsAndAnswersController < ApplicationController
  def update_response
    question_answer = QuestionsAndAnswers.find(params[:id])

    transcribed_text = GoogleSpeechService.transcribe(params[:audio_file].path)

    question_answer.update(answer: transcribed_text)

    render json: { question_answer: question_answer }
  end
end
