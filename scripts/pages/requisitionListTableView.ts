$(".//div[@class='requisition_list_table']"){
	$("./div[@class='mw_was_table']/thread"){
		# remove()
		$("./div/div"){
			remove_text_nodes()
		}
		$("./div"){
			attributes(style: "height:40px")
		}
		$("./div/div[1]"){
			attributes(class: "_name")
			$("./a"){
				insert_top("span", "Name")
			}
		}
		$("./div/div[2]"){
			attributes(class: "_updated")
			$("./a"){
				insert_top("span", "Last Updated")
			}
		}
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