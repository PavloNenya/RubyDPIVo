class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # Guest user (not logged in)
    if user.role_id == Role::ADMIN
      can :manage, :all
    else
      can :read, :all
    end
  end
end
