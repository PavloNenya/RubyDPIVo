class Api::ProducersController < ApplicationController
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
end
