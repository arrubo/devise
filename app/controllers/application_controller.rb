class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?


  ###### DEVISE #####

  # Adding attributes to the sign up (user creation) permited parameters
  def configure_permitted_parameters
    attributes = [:name]
    devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
    devise_parameter_sanitizer.permit(:account_update, keys: attributes)
  end
  protected :configure_permitted_parameters

  # Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    pages_welcome_path
  end
  private :after_sign_out_path_for

end
