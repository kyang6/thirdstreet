class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    if user.admin?

        can :manage, :all

        can :import, [Student, Project]

    else

        can :update, Student do |student|
            student.user == user
        end

        can :destroy, Project do |project|
            project.user == user
        end

        can :create, Project
    end
  end
end
