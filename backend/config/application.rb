require_relative "boot"
require "rails/all"

require 'dotenv/load' if ENV['RAILS_ENV'] == 'development' || ENV['RAILS_ENV'] == 'test'

Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application

    config.load_defaults 8.0
    config.autoload_paths << Rails.root.join('app/services')

    config.eager_load_paths << Rails.root.join('app/services')

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*' # Replace '*' with your frontend URL in production
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end

  end
end
