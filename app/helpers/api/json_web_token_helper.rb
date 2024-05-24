module Api::JsonWebTokenHelper

  SECRET_KEY = "8f04b6ce9411ec7021b9fc093397920bccfa4f00a2180f4e0b243ecb95293aa2"

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY, 'HS256')
  end

  def self.decode(token)
    puts "SECRET + " + SECRET_KEY
    puts "TOKEN +#{token}"
    begin
      decoded_token = JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256')
      puts "Decoded token: #{decoded_token}"
      body = decoded_token[0]
      puts "BODY = " + body.to_s
      HashWithIndifferentAccess.new(body)
    rescue JWT::DecodeError => e
      puts "JWT decoding error: #{e.message}"
      nil
    rescue => e
      puts "Unknown error: #{e.message}"
      nil
    end
  end

  private

end