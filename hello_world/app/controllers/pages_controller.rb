class PagesController < ApplicationController

	def index
		
		@line = params['line']	
		@line= @line.to_i
		@zip =  43606 
		
		#params['zip']
		


  

		
	end

end
