$$("#requisition_list_popup_main_div"){
  	attributes(style: "display:none;")
}

# Removes breadcrumbs
$$("#breadcrumb"){
	attributes(style: "display: none;")
}

# Remove Session Timeout Div
$$("#sessionTimeoutModalDiv"){
	remove()
}

$$("body"){
	table_dump(".//table")
	
	# move scripts to bottom of page
	move_here("//script", "bottom")
	$("./script[contains(@src, 'jquery-1.7.2.min.js')]"){
		move_to("../../head")
	}
	$("./script[contains(@src, 'main.js')]"){
		move_to("../../head")
	}

	$(".//div[@class='header_wrapper']"){
		$("./div[@class='header_top']"){
			$("./div[@class='header_container']"){
				# Make message scrolling
				$("./div[@class='message']"){
					$(".//div[@class='ad']"){
						name(){
							set("marquee")
						}
					}
				}
			}
			$("./form[@id='Logon']"){
				wrap("div", class: "_logonContainer")
			}
			$("./div[@class='_logonContainer']"){
				move_here("../div[@class='header_container']/div[@class='new_login']")
			}
		}
		$("./div[@class='header_container']"){
			move_here("../div[@class='header_top']/div[@class='_logonContainer']")
			$("./div[contains(@class, 'logo')]"){
				$(".//img"){
					attributes(height: "", width: "")
				}
			}
			$("./div[@class='checkout_wrapper']"){
				$("./ul[@class='cart_menu']"){
					attributes(class: "_userTools")
					$("./li[@class='call']"){
						remove()
					}
					$("./li[@class='line']"){
						remove()
					}
					$("./li[2]"){
						attributes(class: "_payInvoice")
					}
				}
				$("./div[@id='outerCartContainer']"){
					$(".//div[@class='shoppingcart_wrapper']"){
						$(".//div[@class='shoppingcart_rect_full']"){
							$("./span"){
								remove()
							}
							$("./div[1]"){
								attributes(class: "_numberSKUs", style: "")
							}
							$("./div[2]"){
								remove()
							}
							remove_text_nodes()
						}
					}
				}
				wrap("div", class: "_userButtons")
			}
			$("./div[@class='_logonContainer']"){
				move_here("../div[@class='_userButtons']/div[@class='checkout_wrapper']/ul[@class='_userTools']")
			}
			$("./div[@class='_userButtons']"){
				insert("div", id: "image-user", data-ur-tab-id: "user", data-ur-tabs-component: "button"){
					attributes(class: "Icons-user")
					wrap("div", class: "_nav")
				}
				insert("div", id: "image-menu"){
					attributes(class: "Icons-menu-w")
					wrap("div", class: "_nav")
				}
			}
		}
		
	}
	$(".//div[@id='main_content_wrapper']"){
		move_here("../div[@class='header_wrapper']/div[@class='nav_container']", "top")
	}


}



$("/html"){
	remove(".//script[contains(@src,'navigation.js')]")
	remove(".//script[contains(@src,'jquery.dataTables.min.js')]")

	
}