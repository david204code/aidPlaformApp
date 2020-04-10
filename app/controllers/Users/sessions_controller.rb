# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  include CurrentUserConcern

  # POST /resource/sign_in
  def create
    user = User
    .find_by(email: params["user"]["email"])
    .try(:authenticate, params["user"]["password"])

    if user 
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: true,
        user: user
      }
    else
      render json: { status: 401 }
    end
  end

  # GET /resource/sign_in
  def logged_in
    if @current_user
      render json: { 
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end


  # DELETE /resource/sign_out
  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
