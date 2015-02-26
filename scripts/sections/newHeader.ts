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
	# remove(".//script[contains(@src,'jcarousel.min.js')]")
	# remove(".//script[@id='content_wrapper_box']/script[5]")
	//*[@id="content_wrapper_box"]/script[5]
	table_dump(".//table")
	
	# move scripts to bottom of page
	move_here("//script", "bottom")
	$("./script[contains(@src, 'jquery-1.7.2.min.js')]"){
		move_to("../../head")
	}

	

	$("./script[contains(@src, 'main.js')]"){
		move_to("../../head")
	}

	# Removes all the breakpoints
	match($path){
		with(/Footer_Terms_Conditions/){}
		with(/OrderShippingBillingView/){}
		with(/SingleShipmentOrderSummaryView/){}
		with(/OrderShippingBillingConfirmationView/){}
		with(/AjaxRequisitionListCreateView/){}
		with(/quickorder/){}
		# with(/OrderCalculate/){}
		with(/AjaxOrderDetail/){}
		with(/locations-branch/){}
		else(){
			$$("br"){
				remove()
			}
		}
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
						$(".//div[contains(@class,'shoppingcart_rect')]"){
							$("./span"){
								remove()
							}
							$("./div[1]"){
								attributes(class: "_numberSKUs", style: "")
							}
							$("./div[2]"){
								remove()
							}
							$("./div[2]"){
								remove()
							}
						}
					}
				}
				wrap("div", class: "_userButtons")
			}
			$("./div[@class='_logonContainer']"){
				move_here("../div[@class='_userButtons']/div[@class='checkout_wrapper']/ul[@class='_userTools']")

				$("./form[@id='Logon']"){
					$("./input[contains(@class, 'login_name')]"){
						move_to("../input[contains(@class,'login_pass')]", position("before"))
						insert_after("br")
					}
				}
				$("./div[@class='new_login']"){
					$("./span"){
						remove()
					}
					$("./a[3]"){
						remove()
					}
					$("./a[2]"){
						move_to("..", position("top"))
					}
					$("./a[1]"){
						insert_after("br")
					}
				}
				$("./ul[@class='_userTools']"){
					attributes(style: "display: none;")
				}
				wrap("div", class: "_logonDiv")
				insert_after("div", class: "_blkBG")
			}
			$("./div[@class='_userButtons']"){
				insert("div", id: "image-user"){
					attributes(class: "Icons-user")
					wrap("div", class: "_nav", id: "_userContainer")
				}
				insert("div", id: "image-menu"){
					attributes(class: "Icons-menu-w")
					wrap("div", class: "_nav")
				}
				insert_after("div", class: "_searchContainer")
			}
			$("./div[@class='_searchContainer']"){
				move_here("//form[@id='CatalogSearchForm']")
				$(".//input[contains(@class,'search_btn')]"){
					add_class("Icons-search-icon")
				}
			}
		}

		$("./div[@class='header_container']"){
			attributes(data-ur-set: "tabs", data-ur-closeable: "true")
			$("./div[@class='_userButtons']/div[@id='_userContainer']"){
				attributes(data-ur-tabs-component: "button", data-ur-tab-id: "user")
			}
			$("./div[@class='_logonDiv']"){
				attributes(data-ur-tabs-component: "content", data-ur-tab-id: "user")
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