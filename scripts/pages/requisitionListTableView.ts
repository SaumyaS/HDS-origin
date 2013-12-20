$(".//div[@class='requisition_list_table']"){
	$("./div[@class='mw_was_table']/thread"){
		//remove()
	}
	$(".//div[@class='mw_was_th'][1]"){
		remove_text_nodes()
		attribute("style", "width:50%")
	}
	# $(".//div[@class='mw_was_th'][2]"){
	# 	attribute("style", "width:50%")
	# }
	$(".//div[@class='mw_was_th'][1]/a"){
		remove_text_nodes()
		insert_top("span", "Name")
	}
	$(".//div[@class='mw_was_th'][2]"){
		remove_text_nodes()
		attribute("style", "width:50%")
	}
	$(".//div[@class='mw_was_th'][2]/a"){
		remove_text_nodes()
		insert_top("span", "Last Updated")
	}
	$(".//div[@class='mw_was_tbody']"){
		attributes(class: "_listContainer")
		$("./div[@class='mw_was_tr']"){
			attributes(class: "_eachList", style: "")
			$("./div[1]"){
				//insert_before("span", class: "_name", "List Name: " )
				# move_to("/a")
				//attribute("class", "btn")
			}
			$("./div[1]/a"){
				//insert_before("span", class: "_name", "List Name: " )
				# move_to("/a")
				attribute("class", "btn")
				attribute("style", "display:block")
			}
			$("./div[2]"){
				//insert_before("span", class: "_updated", "Last Updated: " )
				move_to("../div/a")

			}
		}
	}
	$(".//div[@class='mw_was_td']"){
		# move_to("./")
		# attribute("class", "btn")
		
	}
}