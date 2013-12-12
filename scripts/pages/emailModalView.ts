$("//div[@id='email_modal_dialog']"){
	add_class("messagepop")
	add_class("shadow")
	add_class("changePosition")
	$("./div[1]"){
		attributes(style: "text-align: left;")
	}
	$(".//div[@class='email_input_box']/form"){
		$("./input"){
			attributes(style: "width: 140px !important; margin-bottom: 10px;", class: "_popinput")
		}
	}
}