class RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token, if: -> { request.format.json? }

  respond_to :json

  def create
    build_resource(sign_up_params)

    resource.save
    if resource.persisted?
      render json: { message: 'Account created successfully', user: resource }, status: :created
    else
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
