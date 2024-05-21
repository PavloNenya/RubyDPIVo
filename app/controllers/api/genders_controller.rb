class Api::GendersController < ApplicationController
  def index
    @genders = Gender.all
    render json: @genders
  end

  def show
    @gender = Gender.find_by(id: params[:id])
    if @gender
      render json: @gender
    else
      render json: { error: "Gender not found" }, status: :not_found
    end
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
