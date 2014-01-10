$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body"){
	$("//div[@class='main_container']"){
		add_class("_accountSummary")

		$("./div[@class='login-box']"){
			$("./div[@class='col-1']"){
				$("./form"){
					$("./label[2]"){
						insert_after("br")
					}
					$("./input[@type='text']") {
						wrap("div", class: "test")
					}
					# $("./div[@class='test']"){
					# 	attributes(data-ur-set: "input-clear")
					# 	$("./input"){
					# 		attributes(data-ur-input-clear-component: "input")
					# 	}
					# }
					# $("./a[@id='WC_AccountDisplay_links_1']"){
					# 	insert_before("br")
					# }
					$("./a"){
						insert_before("br")
						add_class("expand")
					}
				}
			}
		}




		$("./div[@class='nav-secondary']"){
			insert_before("div", class: "_userInfo", "My Info"){

			}


		}
		$("./div[@class='_userInfo']"){
			attributes(data-ur-toggler-component: "button")
			wrap("div"){
				attributes(class: "_togglerWidget", data-ur-set: "toggler")
				move_here("../div[@class='nav-secondary']")
			}
			$("../div[@class='nav-secondary']"){
				attributes(data-ur-toggler-component: "content")
				$(".//a[@id='couponWallet']"){
					remove()
				}
			}
		}
	}
}



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

		}
	}
}