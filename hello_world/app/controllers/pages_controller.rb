class PagesController < ApplicationController

	def index

		#store Zip in a cookie
		@zip =  43606 		
		if (cookies[:zip].present?)
			@zip = cookies['zip']
		end
		
		@line=0
		@uline="trudefinition-duration"
		if (params[:line].present?)
			@uline = params['line']	
		end
			
			
				
		#@color = params['color']
		#params['zip']
		

	
	end

end
