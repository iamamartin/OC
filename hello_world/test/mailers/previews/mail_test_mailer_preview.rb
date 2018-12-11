# Preview all emails at http://localhost:3000/rails/mailers/mail_test_mailer
class MailTestMailerPreview < ActionMailer::Preview

	def sample_mail_preview
		ExampleMailer.sample_email(User.first)
	end


end
