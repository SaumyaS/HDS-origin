$("/html"){


	# Moves header icons back to the header
	$("//*[@id='ad_17601']"){
		move_here("//*[@id='_icons_bar']")
	}

	$("//*[@id='main_content_wrapper']/div/div"){
		$("./div"){
			attribute("class", "_contact")
			$(".//div[@data-mw-id='mw_dump_td3']"){
				$("./p[2]"){
					attributes(class: "_phone")
					text(){
						clear()
					}
					insert("a", href: "tel:800-944-8322", "800-944-8322")
				}
			}
			$(".//iframe"){
				attributes(id: "mw_contactForm", width: "", style: "width: 100%;", height: "1300px")
			}
		}
	}
}

# $("/html"){


	# Moves header icons back to the header
	# $("//*[@id='ad_17601']"){
	# 	move_here("//*[@id='_icons_bar']")
	# }

	# $("//*[@id='main_content_wrapper']/div/div"){
	# 	$("./div"){
	# 		attribute("class", "_contact")
	# 		$(".//div[@data-mw-id='mw_dump_td3']"){
	# 			$("./p[1]"){
	# 				attributes(class: "_phone")
	# 				text(){
	# 					replace(/ 800-944-8322./, ":")
	# 				}
	# 				insert("a", href: "tel:800-944-8322", "800-944-8322")
	# 			}
	# 		}
	# 	}
	# }
# }
