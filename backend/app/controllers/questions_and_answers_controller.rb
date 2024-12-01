class QuestionsAndAnswersController < ApplicationController

  def transcribe
    question_answer = QuestionsAndAnswers.find(params[:id])

    transcription = GoogleSpeechService.transcribe(params[:audio].path)

    question_answer.update!(answer: transcription)

    render json: { message: "Answer recorded", transcription: transcription }, status: :ok
  rescue StandardError => e 

    render json: { error: "Failed to transcribe audio", details: e.message }, status: :unprocessable_entry
  end

  def update_response
    question_answer = QuestionsAndAnswers.find(params[:id])

    transcribed_text = GoogleSpeechService.transcribe(params[:audio_file].path)

    question_answer.update(answer: transcribed_text)

    render json: { question_answer: question_answer }
  end

end
