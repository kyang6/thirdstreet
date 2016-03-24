class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    if user.admin?

        can :manage, :all
        can :access, :rails_admin   # grant access to rails_admin
        can :dashboard              # grant access to the dashboard

        can :import, [Student, Project]

    else

        can :update, :all
        
        can :destroy, :all

        can :create, :all

   
    end
  end
end
