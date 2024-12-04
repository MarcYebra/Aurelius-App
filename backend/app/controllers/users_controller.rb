class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: {
      fullName: "#{current_user.first_name} #{current_user.last_name}",
      preferredName: current_user.first_name,
      email: current_user.email
    }
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render json: { message: "Profile updated successfully." }, status: :ok
    else
      render json: { error: "Error updating profile.", details: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def dashboard
    @interviews = current_user.interviews
    render json: @interviews
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end
end
