// pollfile url to watch
var pollfile="/pollfile"

var lastmodification;

function makerequest() {
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.timeout = 2000;
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 ) {
			if(xmlhttp.status == 200){
				handleResponse(xmlhttp.responseText);
			}
		}
	}
	var d = new Date();
	//adding a date to the URL prevents caching of the pollfile
	var pollurl = pollfile + "?" + d.getTime();
	xmlhttp.open("GET", pollurl);
	xmlhttp.send();
	//poll every second
	window.setTimeout(makerequest, 1000);
};

function handleResponse(text) {
	if (! lastmodification) {
		//initialise lastmodification
		lastmodification = text;
	} else {
		if (lastmodification !== text) {
			location.reload();
		};
	}
}

(makerequest());
