
function  changezip(){
	sZip = document.getElementById("zip").value;
	setCookie("zip", sZip, 1);
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookieValue(a){
	var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}

function subline(e){
	//p = e.selectedIndex
	p = e.options[e.selectedIndex].value
	var url = window.location.pathname;
	url += '?line=' + p
	window.location.href = url;
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

function newline(e){
	uline = e.options[e.selectedIndex].value
	//color = gJSON[e.selectedIndex]['shingle_colors']

	datatarget = $('.carousel')[0].id
	//galclass = //$('.gal_0')[0].className
	galclass = "col-md-2"

	sCI = ""
	sInd= ""
	sGal =""
	i=0
	
	for (var oL in gJSON[e.selectedIndex]['shingle_colors']){
		sActive=""
		if (i==0) 
			sActive = " active"
			
		sCI += "<div class='item" + sActive + "'><img src='" +  gJSON[e.selectedIndex]['shingle_colors'][oL]['swatch_768x485_url'] + "'></div>"
		sInd += "<li class='" + sActive + "' data-target='" + datatarget+ "' data-slide-to='" + i+ "'></li>"
		sGal +="<div id='gal_" + i +"' class='"+ galclass+"' onclick='slideTo(this)'><div><img src='" +gJSON[e.selectedIndex]['shingle_colors'][oL]['swatch_160x160_url']  + "'></div><div>" + gJSON[e.selectedIndex]['shingle_colors'][oL]['name']+ "</div></div>"
		i++	
	}
	
	iSlide= e.id.replace('gal_', '')

	// create new inner HTML
	$('.carousel-inner')[0].innerHTML = sCI
	$('.carousel-indicators')[0].innerHTML = sInd
	$('.row')[0].innerHTML = sGal



}


// global JSON object
var gJSON;

$(document).on('turbolinks:load', function() {
	//console.log("It works on each visit!")

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

	// Get cookie here
	sZip = getCookieValue("zip")
	if (sZip.length == 0){ 
		sZip = "43606"
	}
	oR("https://mdms.owenscorning.com/api/v1/product/shingles?zip=" + sZip , function( err, response ){
		// Do your post processing here. 
		if( err ) { console.log( "Error!" ); }
	
		 gJSON = JSON.parse(response)
		//alert('API call to replace form post' + body[e.selectedIndex]["name"]);
	
	})	


})


// bookmark
$(function() {
	$('bookmarkme').click(function() {

	document.getElementById("").value;
	document.getElementById("").value;
	

	 url = window.location.pathname;
	url += '?line=1' +  + '&color=1'
	
	if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
		window.sidebar.addPanel(document.title, window.location.href, '');
	} else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
		window.external.AddFavorite(location.href, document.title);
	} else if (window.opera && window.print) { // Opera Hotlist
		this.title = document.title;
		return true;
	} else { // webkit - safari/chrome
		alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
	}
	});
	
	function getColor(){
	
		for (i=0; i<oNodes.length; i++){
		 	if (oNodes[i].className=="item active"){
				// color = i
				
				
		 	}
		}	
	
	};
	
	

});


