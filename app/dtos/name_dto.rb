class NameDTO
  attr_accessor :name
  validates :name, presence: true, length: { minimum: 1 }
  def initialize(name: nil)
    @name = name
  end
end

