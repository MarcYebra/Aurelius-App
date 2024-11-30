class GoogleSpeechService
  require 'google/cloud/speech'

  def self.transcribe(audio_file_path)
    speech = Google::Cloud::Speech.speech
    audio  = { content: File.binread(audio_file_path) }
    config = { encoding: :LINEAR16, sample_rate_hertz: 16000, language_code: 'en-US' }

    response = speech.recognize config: config, audio: audio
    response.results.map(&:alternatives).map(&:transcript).join("\n")
  end
end
