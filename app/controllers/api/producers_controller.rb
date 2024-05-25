class Api::ProducersController < ApplicationController


  before_action :authenticate_request
  def index
    @producers = Producer.all
    render json: @producers
  end

  def show
    @producer = Producer.find_by(id: params[:id])
    if @producer
      render json: @producer
    else
      render json: { error: "Producer not found" }, status: :not_found
    end
  end

  def name
    @producer = Producer.find_by(name: params[:name])
    if @producer
      render json: @producer
    else
      render json: { error: "Producer not found" }, status: :not_found
    end
  end

  def delete
    @producer = Producer.find(params[:id])
    @producer.destroy
    head :no_content
  end
end
