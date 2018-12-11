class MailTestMailer < ApplicationMailer
	default from: 'iamamartin@gmail.com'

	def shingle_email(user)
		@user = user
		mail(to: @user.email, subject: 'Shingle Bells...')
	end




end
