# Moves header icons back to the header(s)kw
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html"){
	$(".//div[@class='main_container']"){
		add_class("_newsResourcesContainer")

		$(".//h1"){
			remove()
			# $("../hr"){
			# 	remove()
			# }
		}

		$(".//div[@class='mw_was_table']"){
			attributes(class: "_newsContentContainer")
			
			# Menu Bar for Resources Page
			move_here(".//div[@data-mw-id='mw_dump_table3']", "top"){
				attributes(class: "_menuContainer")
				attribute("data-ur-set", "toggler")
				$("./div[1]"){
					attributes(class: "_mainLink", id: "_RHomeLink")
				}
				$("./div[2]"){
					attributes(class: "_mainLink", id: "_VideoLink")
				}
				$("./div[3]"){
					$(".//strong[contains(text(),'Product')]"){
						$(".."){
							$(".."){
								$(".."){
									remove()
								}
							}
						}
						
					}
				}
				$("./div[3]"){
					attributes(class: "_newsToggler", id: "_NewsLink")
					$("./div"){
						remove()
					}
					insert("strong", "Industry News")
				}
				$("./div[4]"){
					attributes(class: "_subLink", id: "_BMLink")
				}
				$("./div[5]"){
					attributes(class: "_subLink", id: "_EquipmentLink")
				}
				$("./div[6]"){
					attributes(class: "_subLink", id: "_FSLink")
				}
				$("./div[7]"){
					attributes(class: "_subLink", id: "_JSLink")
				}
				$("./div[8]"){
					attributes(class: "_subLink", id: "_PTLink")
				}
				$("./div[9]"){
					attributes(class: "_subLink", id: "_SafetyLink")
				}
				$("./div[10]"){
					attributes(class: "_subLink", id: "_WPLink")
				}
				$("./div[11]"){
					attributes(class: "_mainLink", id: "_RBlogLink")

					
				}


				$("./div[@id='_NewsLink']"){
					attributes(data-ur-toggler-component: "button", data-ur-id: "resourcemenu")
				}
				$("./div[@class='_subLink']"){
					attributes(data-ur-toggler-component: "content", data-ur-id: "resourcemenu")
				}

				$("./div[@class='_mainLink']"){
					$(".//a"){
						$old_url = fetch("@href")
						$old_url{
							replace(/Resources_/,"Resources_m")
						}
						attributes(href: $old_url)
					}
				}

				$("./div[@class='_subLink']"){
					 move_here(".//a")
					# $("./div"){
					# 	remove()
					# }

					$("./a"){
						text(){
							replace(/> /, "")
						}
					}
					$(".//div"){
						text(){
							replace(/> /, "")
						}
					}
				}



				wrap("div", class: "_menuToggler-content"){
					wrap("div", class: "_menuToggler"){
						insert_top("div", class: "_menuToggler-button", "Navigation")
						$("./div[@class='_menuToggler-button']"){

						}
					}
				}
			}

			$("./div[@data-mw-id='mw_dump_tr1']"){
				remove()
			}

			$("./div[2]"){
				attributes(class: "_pageTitle")
				$("./div[1]"){
					remove()
				}
				$("./div[1]"){
					attributes(class: "_titleContainer")
					$("./strong"){
						name(){
							set("h2")
						}
					}
				}
				$("./div[2]"){
					attributes(class: "_titleImage")
				}
			}
			$("./div[3]"){
				remove()
			}
			$("./div[3]"){
				attributes(class: "_textContent")
				$("./div/p"){
					add_class("_textSection")
					$("./strong[1]"){
						add_class("_textLink")
						insert_after("br")
					}
					$("./strong[2]"){
						add_class("_readMore")
						insert_before("br")
					}
					insert_after("br")

				}
			}



			
			$("./div[@class='_menuToggler']"){
				attribute("data-ur-set", "toggler")
				$("./div[@class='_menuToggler-button']"){
					attributes(data-ur-toggler-component: "button", data-ur-id: "menuToggler")
				}
				$("./div[@class='_menuToggler-content']"){
					attributes(data-ur-toggler-component: "content", data-ur-id: "menuToggler")
				}
			}

		}
	}
}