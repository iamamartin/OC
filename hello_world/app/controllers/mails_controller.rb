class MailController < ApplicationController


def create
  @mail = Mail.new(mail_params)

  respond_to do |format|
    if @user.save

      # Sends email to user when mail is created.
      ExampleMailer.sample_email(@mail).deliver

      format.html { redirect_to @mail, notice: 'Mail was successfully created.' }
      format.json { render :show, status: :created, location: @mail }
    else
      format.html { render :new }
      format.json { render json: @mail.errors, status: :unprocessable_entity }
    end
  end
end
