class PagesController < ApplicationController

	def index

		#store Zip in a cookie
		@zip =  43606
		if (cookies[:zip].present?)
			@zip = cookies['zip']
		end

		@userID =  ""
		@fave=""
		puts "userID" 
		if (cookies[:UserID].present?)
			puts "user Cookie found" 
			@userID = cookies['UserID']
			@fave=Fave.find_by UserID: cookies['UserID']
			puts @fave.ULine
		end

		@line=0
		@uline="trudefinition-duration"
		if (params[:line].present?)
			@uline = params['line']
		end
			
		@color = ''
		if (params[:line].present?)
			@color = params['color']
		end

	
	end


end
