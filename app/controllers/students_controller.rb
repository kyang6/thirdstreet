class StudentsController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]
  before_action :set_student, only: [:update, :destroy]

  # GET /students
  # GET /students.json
  def index
    if user_signed_in? 
      @students = Student.all
    else 
      redirect_to root_path, notice: "You cannot view students"
    end
  end

 

  # GET /students/1
  # GET /students/1.json
  def show
    if can? :update, @student
      set_student
    else
      redirect_to root_path, notice: "You do not have permission to view this Student's Resume"
    end
  end

  # GET /students/new
  def new
    if can? :update, @student
      @student = current_user.students.build
    else 
      redirect_to root_path, notice: "You do not have permission to create a student"
    end
  end

  # GET /students/1/edit
  def edit
    if can? :update, @student
      set_student
    else
      redirect_to root_path, notice: "You do not have permission to Update this Student"
    end
  end

  # POST /students
  # POST /students.json
  def create
    @user = current_user
    @student = @user.students.build(student_params)

    respond_to do |format|
      if @student.save
        format.html { redirect_to @student, notice: 'Student was successfully created.' }
        format.json { render :show, status: :created, location: @student }
      else
        format.html { render :new }
        format.json { render json: @student.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /students/1
  # PATCH/PUT /students/1.json
  def update
    respond_to do |format|
      if @student.update(student_params)
        format.html { redirect_to current_user, notice: 'Student was successfully updated.' }
        format.json { render :show, status: :ok, location: @student }
      else
        format.html { render :edit }
        format.json { render json: @student.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /students/1
  # DELETE /students/1.json
  def destroy
    @student.destroy
    respond_to do |format|
      format.html { redirect_to current_user, notice: 'Student was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      @student = Student.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def student_params
      params.require(:student).permit(:name, :email, :phone_number, :team_id, experiences_attributes: [:id, :description, :_destroy],
        skills_attributes: [:id, :description, :_destroy], projects_attributes: [:id, :description,:name, :_destroy], 
        awards_attributes: [:id, :title, :description, :_destroy], activities_attributes: [:id, :description, :_destroy],
        educations_attributes: [:id, :description, :_destroy])
    end
end
