class Api::ImagesController < ApplicationController

  def show
    image = ActiveStorage::Blob.find_by(id: params[:id])
    if image
      send_data image.download, filename: image.filename.to_s, type: image.content_type, disposition: 'inline'
    else
      head :not_found
    end
  end

end
