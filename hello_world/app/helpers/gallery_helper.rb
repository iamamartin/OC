# app/helpers/gallery_helper.rb

module GalleryHelper
	def gallery_for(images, descriptions)
		Gallery.new(self, images, descriptions).html
	end

	class Gallery
		def initialize(view, images, descriptions)
			@view, @images, @descriptions = view, images, descriptions
			@uid = SecureRandom.hex(6)		
		end
		
		def html
			content = gallery			
			content_tag(:div, gallery, id: uid, class: 'row')
		end
		
		private
		
		attr_accessor :view, :images, :descriptions, :uid
		delegate :link_to, :content_tag, :image_tag, :safe_join, to: :view

		def gallery	
			pics = images.map { |image| pic(image) }
			tures = descriptions.map{ |description| ture(description)}
			
			# join images and text here (errrr)
			pictures = pics.map.with_index{|val, index| picture(val, tures[index], index) }

			#puts pictures
				
			content_tag(:div, safe_join(pictures))
		end
 
 		def pic(image)
 			 content_tag(:div, image_tag(image))
 		end
 		
 		def ture(description)
 			 content_tag(:div, description)
 		end 
 
 		def picture(pic, ture, index)
 			content= safe_join([pic, ture])
 			
 			#, { :onClick =>'slideTo(this);' }
 			content_tag(:div, content, id:('gal_' +index.to_s), class:'col-md-2', onclick:'slideTo(this)')
 		end
 
	end
end