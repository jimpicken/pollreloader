var lastmodification;

function makerequest() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.timeout = 2000;

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 ) {
			if(xmlhttp.status == 200){
				handleResponse(xmlhttp.responseText);
			}
		}
	}
	
	var d = new Date();
	var pollurl = "/pollfile?" + d.getTime();
	xmlhttp.open("GET", pollurl);
	xmlhttp.send();
	poll();
};

function handleResponse(text) {
	if (! lastmodification) {
		lastmodification = text;
	} else {
		if (lastmodification !== text) {
			location.reload();
		};
	}
}

function poll() {
	window.setTimeout(makerequest, 500);
}

window.onload = poll;
