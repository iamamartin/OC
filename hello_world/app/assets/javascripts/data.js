
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

	var body = JSON.parse(response)
	alert(body[e.selectedIndex]["name"]);

});	
	
	

		
}

