# $("./div[@id='body-content']"){
# 	# $("./div[@class='will_call_form_border']"){
# 	# 	$("./form"){
# 	# 		move_here("//*[@id='will_call_modal_dialog']/div[1]/div/div[1]/a")
# 	# 	}
# 	# }
# }

# //*[@id="will_call_modal_dialog"]/div[2]/div/div[1]/a

$("/html"){
	$(".//div[@id='will_call_modal_dialog']"){
		$(".//div[@class='will_call_form_border']/form"){
			$("./input[@id='cityMarker']"){
				insert_after("br")
			}
			$("./span[2]"){
				insert_after("br")
			}
			$("./a"){
				insert_before("br")
			}
		}
	}
}

$$("#map_canvas"){
	attributes(style: "display: none;")
}

$$("#postalcode"){
	attributes(type: "tel")
}

$("//a[@title='Cancel']"){
	$(".."){
		add_class("_cancelContainer")
		attributes(style: "")
	}
}

# $$(".will_call_map_wrapper"){
# 	attributes(style: "display:none;")
# }