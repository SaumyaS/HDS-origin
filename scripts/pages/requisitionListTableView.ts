$(".//div[@class='requisition_list_table']"){
	$("./div[@class='mw_was_table']/thread"){
		remove()
	}
	$(".//div[@class='mw_was_tbody']"){
		attributes(class: "_listContainer")
		$("./div[@class='mw_was_tr']"){
			attributes(class: "_eachList", style: "")
			$("./div[1]"){
				insert_before("span", class: "_name", "List Name: " )
			}
			$("./div[2]"){
				insert_before("span", class: "_updated", "Last Updated: " )
			}
		}


	}
}