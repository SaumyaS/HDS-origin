$("/html"){


	# Moves header icons back to the header
	$("//*[@id='ad_17601']"){
		move_here("//*[@id='_icons_bar']")
	}

	$("//*[@id='main_content_wrapper']/div/div"){
		$("./div"){
			attribute("class", "_contact")
		}
	}
}