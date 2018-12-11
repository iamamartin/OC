
function changezip(){
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
	slide(iSlide)
}

function slide(iSlide){

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
	color = gJSON[e.selectedIndex]['shingle_colors']

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
	$('#bookmarkme').click(function() {

	i = $('#body_iline')[0].selectedIndex
	
	sLine = $('#body_iline')[0].options[i].value
	sColor = getColor();

	url = window.location.pathname;
	url += '?line=' + sLine + '&color=' + sColor

	if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
		window.sidebar.addPanel(document.title, url, '');
	} else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
		window.external.AddFavorite(url, document.title);
	} else if (window.opera && window.print) { // Opera Hotlist
		this.title = document.title;
		return true;
	} else { // webkit - safari/chrome
		alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
	}
	
	});
	
	function getColor(){

		i = $('#body_iline')[0].selectedIndex
		j=0
		for (var oL in gJSON[i]['shingle_colors']){
			// Find active image
			var oNodes = $('.carousel-inner')[j].childNodes
			for (j=0; j<oNodes.length; j++){
				// This is the one we want
				if (oNodes[j].className =="item active"){
					return gJSON[i]['shingle_colors'][j]['name']
				}
			};
		}
	}

});


// fave
$(function() {
	$('#fave').click(function() {

		i = $('#body_iline')[0].selectedIndex
		
		sLine = $('#body_iline')[0].options[i].value
		sColor = getColor();
	
		var UserID
		UserID = getCookieValue("UserID")
		if (UserID=="undefined" || UserID==""){
			UserID = guid();
			setCookie("UserID", UserID, 1);
			setCookie("UColor", sColor, 1);
		}

		
		sParams = '?UserID=' + UserID + '&ULine=' + sLine + '&UColor=' + sColor

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
	
		oR("/faves/save" + sParams , function( err, response ){
				// Do your post processing here. 
				if( err ) { console.log( "Error!" ); }
			
				gJSON = JSON.parse(response)
				//alert('API call to replace form post' + body[e.selectedIndex]["name"]);
			
			})

		});
	
	function guid(){
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
		});
	}

	function getColor(){
		i = $('#body_iline')[0].selectedIndex
		j=0
		for (var oL in gJSON[i]['shingle_colors']){
			// Find active image
			var oNodes = $('.carousel-inner')[j].childNodes
			for (j=0; j<oNodes.length; j++){
				// This is the one we want
				if (oNodes[j].className =="item active"){
					return gJSON[i]['shingle_colors'][j]['name']
				}
			}
		}
	}
})

// email
$(function() {
	$('#email').click(function() {


	})
})
