class Api::GenderController < ApplicationController
  def index

  end

  def show
  end

  def create
    @gender = Gender.create(name: NameDTO.new(name: params[:name]).name)
    if @gender.save
      render json: @gender, status: :created
    else
      render json: @gender.errors, status: :unprocessable_entity
    end
  end

  def delete
    @gender = Gender.find(params[:id])
    @gender.destroy
    head :no_content
  end
end
