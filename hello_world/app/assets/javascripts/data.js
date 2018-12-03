
function subline(e){
	p = e.selectedIndex
	var url = window.location.href;
	if (url.indexOf('?') > -1){
	   url += '&line=' + p
	}else{
	   url += '?line=' + p
	}
window.location.href = url;
}


function newline(e){

var oR = function(url, callback ) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url );

    xhr.onload = function() {
        callback( null, xhr.response );
    }; 

    xhr.onerror = function() {
        callback( xhr.response );
    };

    xhr.send();
}

oR("https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659", function( err, response ){
	// Do your post processing here. 
	if( err ) { console.log( "Error!" ); }

	//var body = JSON.parse(response)
	//alert('API call to replace form post' + body[e.selectedIndex]["name"]);

});	

}

function slideTo(e){

	iSlide= e.id.replace('gal_', '')


	var oNodes = $('.carousel-inner')[0].childNodes
	var oInd = $('.carousel-indicators')[0].childNodes
	
	// So I know this isn't the "right" way....
	for (i=0; i<oNodes.length; i++){
		oNodes[i].className="item"
		oInd[i].className=""
	 	if (i==iSlide){
	 		oNodes[i].className="item active"
	 		oInd[i].className="active"
	 	}		
	}
	




}