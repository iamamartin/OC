class FavesController < ApplicationController 
	before_action only:[ :show, :save, :index]


	def index
		@faves = Fave.all
		@counts = Fave.all.select("ULine, UColor, count(*) as X").group("Uline, UColor")



	end

	# POST /faves/save
	# POST /faves/save.json	3
	def save
		puts "save or update" 
		# if this id exists then update else create new
		if Fave.exists?(UserID:params['UserID'])
			# need to get primary key, so update works properly here
			@fave=Fave.find_by UserID: params['UserID']
			@fave.update(fave_params)
			puts "update"
		else
		
			@fave = Fave.new(fave_params)
			@fave.save
			puts "save"
			puts @fave.UserID 
			puts "tony tony tony"
		end

	end



  private
 


    # Never trust parameters from the scary internet, only allow the white list through.
    def fave_params
    	puts params[:UserID]
    	puts params[:ULine]
    	puts params[:UColor]
      params.permit(:id, :UserID, :ULine, :UColor)
    end
end
