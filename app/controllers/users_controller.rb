class UsersController < ApplicationController
	def show
		@user = User.find(params[:id])
		@student = Student.where(user_id: current_user.id)
	end
end
