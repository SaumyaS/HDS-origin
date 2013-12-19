$("/html"){

	$("//label[1]"){
		attributes(style: "display: inline-block;padding-left: 5px;")
	}
	log("this is a test")
	$$("h1"){
		log("this is a test")
		match(text()){
			with(/SpeedBuild/){
				$(".."){
					wrap("div"){
						attributes(class: "_ReqListView")
					}
				}
			}
		}
		
	}

	$$("._ReqListView"){
		$(".//form"){
			$("./div"){
				attributes(style: "")
			}
		}
		$(".//div[@class='checkout-container']"){
			$(".//div[@class='requisition_list_table']"){
				$("./div[@class='mw_was_table']/thread"){
					# remove()
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

		}
	}
}