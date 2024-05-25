# class Api::ApplicationController < Api::ActionController::Base
#
#
#   include Api::JsonWebTokenHelper
#
#   protect_from_forgery with: :null_session
#
#   before_action :authenticate_request
#
#   attr_reader :current_user
#
#   private
#
#   def authenticate_request
#     @current_user = authorize_request
#     render json: { error: 'Not Authorized' }, status: 401 unless @current_user
#   end
#   # def authenticate_admin_user!
#   #   true
#   # end
#
#   def authorize_request
#     header = request.headers['Authorization']
#     puts "HEADER Authorization = #{header}"
#     header = header.split(' ').last if header
#     puts "HEADER TOKEN = #{header}"
#     decoded = Api::JsonWebTokenHelper.decode(header)
#     puts "HEADER DECODED = #{decoded}"
#     User.find_by(username: decoded[:username]) if decoded
#   rescue
#     nil
#   end
#   #
#   # SECRET_KEY = "8f04b6ce9411ec7021b9fc093397920bccfa4f00a2180f4e0b243ecb95293aa2"
#   #
#   # def encode(payload, exp = 24.hours.from_now)
#   #   payload[:exp] = exp.to_i
#   #   JWT.encode(payload, SECRET_KEY, 'HS256')
#   # end
#   #
#   # def decode(token)
#   #   puts "SECRET + " + SECRET_KEY
#   #   puts "TOKEN +#{token}"
#   #   begin
#   #     decoded_token = JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256')
#   #     puts "Decoded token: #{decoded_token}"
#   #     body = decoded_token[0]
#   #     puts "BODY = " + body.to_s
#   #     HashWithIndifferentAccess.new(body)
#   #   rescue JWT::DecodeError => e
#   #     puts "JWT decoding error: #{e.message}"
#   #     nil
#   #   rescue => e
#   #     puts "Unknown error: #{e.message}"
#   #     nil
#   #   end
#   # end
# end
