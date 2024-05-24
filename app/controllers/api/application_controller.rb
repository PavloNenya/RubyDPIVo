# class Api::ApplicationController < Api::ActionController::Base
#
#   include Api::JsonWebTokenHelper
#
#   protect_from_forgery with: :null_session
#
#   before_action :authenticate_request
#
#   # skip_before_action :verify_authenticity_token
#
#
#   attr_reader :current_user
#
#   private
#
#   def authenticate_request
#     @current_user = authorize_request
#     render json: { error: 'Not Authorized' }, status: 401 unless @current_user
#   end
#
#   def authorize_request
#     header = request.headers['Authorization']
#     header = header.split(' ').last if header
#     decoded = JsonWebTokenHelper.decode(header)
#     puts "DECODED  = #{decoded}"
#     User.find_by(username: decoded[:username]) if decoded
#   rescue
#     nil
#   end
# end
