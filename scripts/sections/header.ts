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
		with(/Return_Policy/){}
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
			$("./form[@id='LogonHeader']"){
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
					$("./li[1]"){

						attributes(class: "_userToolsLinks", id: "_payInvoice")
					}
					$("./li[2]"){
						move_to("..", position("top"))
						attributes(class: "_userToolsLinks", id: "_myAccount")
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
				# move_here("//div[@id='MiniShoppingCart']")
				# $("./div[@id='outerCartContainer']"){
				# 	remove()
				# }
				wrap("div", class: "_userButtons")
			}
			$("./div[@class='_logonContainer']"){
				# move_here("../div[@class='_userButtons']/div[@class='checkout_wrapper']/ul[@class='_userTools']")

				$("./form[@id='LogonHeader']"){
					$("./input[contains(@class, 'login_name')]"){
						insert_after("br")
					}
					$("./a[@class='login_btn_container']"){
						$("./img"){
							remove()
						}
						insert("div", class: "_loginButton", "Sign In")
					}
				}
				$("./div[@class='new_login']"){

					$("./a"){
						match(text()){
							with(/Forgot/){
								attributes(class: "_forgotPassBtn")
							}
							with(/Register/){
								attributes(class: "_registerBtn")
							}
						}
					}


					$("./span"){
						remove()
					}
					$("./a[3]"){
						remove()
					}
					insert("div", class: "_userAccessBtnContainer"){
						move_here("../a[@class='_forgotPassBtn']")
						insert("br")
						move_here("../a[@class='_registerBtn']")
					}
					
				}
				$("./ul[@class='_userTools']"){
					attributes(style: "display: none;")
				}
				wrap("div", class: "_logonDiv")
			}
			$("./div[@class='_userButtons']"){
				insert("div", id: "image-user"){
					attributes(class: "Icons-user")
					wrap("div", class: "_nav", id: "_userContainer")
				}
				insert("div", id: "image-menu"){
					attributes(class: "Icons-menu-w")
					wrap("div", class: "_nav", id: "_menuContainer")
				}
				insert_after("div", class: "_searchContainer")
			}
			$("./div[@class='_searchContainer']"){
				move_here("//form[@id='CatalogSearchForm']")
				$(".//input[contains(@class,'search_btn')]"){
					add_class("Icons-search-icon")
				}
			}
			move_here("//div[@id='header-search']")
		}

		$("./div[@class='header_container']"){
			attributes(data-ur-set: "tabs", data-ur-closeable: "true")
			# $("./div[@class='_userButtons']/div[@id='_userContainer']"){
			# 	attributes(data-ur-tabs-component: "button", data-ur-tab-id: "user")
			# }
			# $("./div[@class='_logonDiv']"){
			# 	attributes(data-ur-tabs-component: "content", data-ur-tab-id: "user")
			# }
		}
		insert_after("div", class: "_blkBG")
		insert_after("div", class: "_logonTest"){
			move_here("//div[@class='_logonContainer']")
			move_here("//div[@class='header_top']/div[@class='header_container']/div[@class='new_login']")
		}
	}
	$(".//div[contains(@class,'logonTest')]"){
		$("./div[@class='new_login']"){
			move_here("//div[@class='_userButtons']/div[@class='checkout_wrapper']/ul[@class='_userTools']")
			$("./ul[@class='_userTools']"){
				attributes(style: "display: block !important;")
			}
			$("./span"){
				remove()
			}
			$("./a[1]"){
				attributes(class: "_greeting")
			}
			$("./a[@class='logout_btn']"){
				add_class("btn")
				add_class("expand")
			}
			$("./a[3]"){
				remove()
			}
		}
	}
	$(".//div[@class='main_wrapper']"){
		move_here("//div[@class='header_wrapper']/div[@class='nav_container']", "top")
	}


}



$("/html"){
	remove(".//script[contains(@src,'navigation.js')]")
	remove(".//script[contains(@src,'jquery.dataTables.min.js')]")

	
}

$("./body"){
	match($path){
		with(/AutoSuggestView/){}
		with(/AjaxLogonFormCenterLinksDisplayView/){}
		with(/AjaxAddressBookForm/){}
		with(/AjaxRequisitionListDisplayView/){}
		with(/AjaxRequisitionListDetailView/){}
		with(/AjaxTrackOrderStatus/){}
		with(/AjaxCouponWallet/){}
		with(/WillCallModalView/){}
		with(/AjaxQuickCartDisplay/){}
		with(/AjaxCatalogSearchResultView/){}
		with(/SearchBasedNavigationCategoryResultDisplayView/){}
		with(/AddToCartModalView/){}
		with(/AjaxOrderChangeServiceItemAdd/){}
		with(/editRegistration/){}
		with(/AjaxTrackOrderStatus/){}
		with(/OrderStatusTableDetailsHelper/){}
		with(/AjaxOrderDetail/){}
		with(/ShopCartDisplayView/){}
		with(/AjaxOrderChangeServiceItemUpdate/){}
		with(/Standard/){}
		with(/BillingAddressDisplayView_1/){}
		with(/AddressEditView/){}
		with(/POSnippetDisplay/){}
		with(/ShopCartPageView/){}
		with(/RequisitionListDetailTableView/){}
		with(/ShippingAddressDisplayView/){}
		with(/AjaxAddressDisplayView/){}
		with(/AjaxOrderChangeServiceShipInfoUpdate/){}
		with(/AjaxUpdateUserAddress/){}
		with(/AjaxOrderChangeServiceItemAdd/){}
		with(/QuickOrderCartDisplayView/){}
		with(/OrderItemPageView/){}
		with(/AjaxAccountAddressForm/){}
		with(/OrderStatusTableDetailsDisplay/){}
		with(/AjaxPromotionCodeDisplayView/){}
		with(/RequisitionListTableView/){}
		with(/AutoSuggestView/){}
		else (){
			inner_wrap("div", id: "body-content"){
				insert_bottom("div", id: "pers-nav-mask")
				insert_before("div", id: "pers-nav"){
					copy_here("//div[@class='nav_container']")
					$("./div[@class='nav_container']"){
						$(".//div[contains(@class,'qo-table')]"){
							$("./div[@class='mw_was_tbody']"){
								$("./div"){
									attributes(class: "_itemContainer")

								}
								$("./div[@class='_itemContainer']"){
									
								}
							}
						}
					}
				}
			}
			$("./div[@id='pers-nav']"){
				$("./div[@class='nav_container']"){
					attributes(style: "display: block;")
				}
				$(".//ul[@class='nav-primary']"){
					# attributes(style: "display:block; !important")
					# attributes(data-ur-state: "enabled")
					$("./li"){
						$("./a"){
							add_class("_box-shadow")
						}
					}
					$("./li[@id='menu1']"){
						$("./a"){

							attributes(data-ur-id: "pers-nav-menu")
						}
						$("./ul[@class='subnav']"){
							attributes(data-ur-id: "pers-nav-menu")
						}
					}
					$("./li[@id='menu6']"){
						$("./a"){

							attributes(data-ur-id: "pers-nav-account")
						}
						$("./ul[@class='subnav']"){
							attributes(data-ur-id: "pers-nav-account")
						}
					}
				}
			}
		}
	}

	# Move GTM (Google Tag Manager) to top of body
	$("./div[@id='body-content']"){
		$("./script"){
			match(text()){
				with(/www.googletagmanager.com/){
					move_to("../../../body", "top")
				}
			}
		}	
	}
	move_here(".//noscript","top")
	
}


$("/html"){
	$(".//div[@class='header_container']"){
		insert_top("div", class: "_classMiddleHeader"){
			move_here("../div[contains(@class, 'left')]")
			move_here("../div[@class='_userButtons']")
		}
	}
}