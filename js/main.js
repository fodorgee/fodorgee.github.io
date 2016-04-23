(function () {
	loadOptions();
	submitHandler();
})();

function submitHandler() {
	var $submitButton=$('#submitButton');

	$submitButton.on('click', function() {
		console.log('Jeeee');

		var return_to = getQueryParam('return_to','pebblejs://close#');
		document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
	});
}

function loadOptions() {
	var $QRstring = $('#QRstring');

	if (localStorage.QRToDecode) {
		$QRstring[0].value = localStorage.QRToDecode; 
	}
}

function getAndStoreConfigData() {
	var $QRstring = $('#QRstring');

	var options = {
		QRToDecode: $QRstring.val()
	};

	localStorage.QRToDecode = options.QRToDecode;
	console.log('Got options' + JSON.stringify(options));

	return options;
}

function getQueryParam(variable, defaultValue) {
	var query = location.search.substring(1);
	var vars  = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (pair[0] === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return defaultValue || false;
}