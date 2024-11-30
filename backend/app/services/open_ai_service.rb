class OpenAIService
  require 'openai'

  def self.generate_questions(job_description)
    client = OpenAI::Client.new(api_key: ENV['OPENAI_API_KEY'])

    response = client.completions(
      parameters: {
        model: "text-davinci-003",
        prompt: "Generate 7 interview questions based on this job description: #{job_description}",
        max_tokens: 200
      }
    )

    response['choices'][0]['text'].split("\n").reject(&:blank?)
  end
end
