class ApplicationController < ActionController::Base
  include ActionController::MimeResponds
  
  allow_browser versions: :modern
end
