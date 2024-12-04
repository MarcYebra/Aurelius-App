module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action :verify_authenticity_token

      def create
        user = User.new(user_params)
        if user.save
          render_success(user)
        else
          render_errors(user)
        end
      end

      private

      def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
      end

      def render_success(user)
        render json: {
          message: 'Account created successfully',
          user: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          }
        }, status: :created
      end

      def render_errors(user)
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end
end
