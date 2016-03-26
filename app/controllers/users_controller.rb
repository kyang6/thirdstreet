class UsersController < ApplicationController
	def show
		if current_user.admin?
			@student = Student.all
		else
			@user = User.find(params[:id])
			@student = Student.where(user_id: current_user.id)
		end
	end
end
