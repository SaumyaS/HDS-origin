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
				$("./div[@class='loginFormContainer']"){
					attributes(style: "")
					move_here("../../div[@class='header_container']/div[@class='new_login']")
				}
			}
			$("./form[@id='LogonHeader']"){
				wrap("div", class: "_logonContainer")
			}
			$("./div[@class='_logonContainer']"){
				
			}
		}
		$("./div[@class='header_container']"){
			move_here("../div[@class='header_top']/div[@class='header_container']/div[@class='loginFormContainer']")
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
								$qty =  fetch("text()")
								insert_before("input", type: "hidden", value: $qty, id: "qtyInputHolder")
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
			$("./div[@class='loginFormContainer']"){
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
						move_here("//a[@class='_forgotPassBtn']")
						insert("br")
						move_here("//a[@class='_registerBtn']")
					}
					
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
			move_here("//div[@class='loginFormContainer']")
			# move_here("//div[@class='header_top']/div[@class='header_container']/div[@class='new_login']")
		}
	}
	$(".//div[contains(@class,'logonTest')]"){
		$("./div[@class='loginFormContainer']"){
			$("./div[@class='new_login']"){
				attributes(style: "")
				$("./span"){
					remove()
				}
				$("./a[1]"){
					attributes(class: "_greeting", id: "acct-name")
				}
				$("./a[@class='_greeting']"){
					$("//ul[@class='_userTools']"){
						attributes(style: "display: block !important;")
					}
					$("//div[@class='_userAccessBtnContainer']"){
						remove("br")
					}
				}
				$("./a[@class='logout_btn']"){
					add_class("btn")
					add_class("expand")
				}
				$("./a[3]"){
					remove()
				}
			}
			move_here("//ul[@class='_userTools']")
		}
	}
	$(".//div[@class='main_wrapper']"){
		move_here("//div[@class='header_wrapper']/div[@class='nav_container']", "top")
	}


}



$("/html"){
	remove(".//script[contains(@src,'navigation.js')]")
	remove(".//script[contains(@src,'jquery.dataTables.min.js')]")
	remove(".//div[@id='MiniShoppingCart']/@onmouseover")

	
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
						$(".//form"){
							attributes(id: "MQuickOrderFormMW")
						}
						$(".//div[contains(@class,'qo-table')]"){
							$("./div[@class='mw_was_tbody']"){
								$("./div"){
									attributes(class: "_itemContainer")

								}
								$("./div[@class='_itemContainer'][1]"){
									$("./div[contains(@class,'qo_item')]"){
										$("./input"){
											attributes(id: "mw_partNumber_1")
										}
									}
									$("./div[contains(@class,'qo_qty')]"){
										$("./input"){
											attributes(id: "mw_quantityPad_1")
										}
									}
								}
								$("./div[@class='_itemContainer'][2]"){
									$("./div[contains(@class,'qo_item')]"){
										$("./input"){
											attributes(id: "mw_partNumber_2")
										}
									}
									$("./div[contains(@class,'qo_qty')]"){
										$("./input"){
											attributes(id: "mw_quantityPad_2")
										}
									}
								}
								$("./div[@class='_itemContainer'][3]"){
									$("./div[contains(@class,'qo_item')]"){
										$("./input"){
											attributes(id: "mw_partNumber_3")
										}
									}
									$("./div[contains(@class,'qo_qty')]"){
										$("./input"){
											attributes(id: "mw_quantityPad_3")
										}
									}
								}
								$("./div[@class='_itemContainer'][4]"){
									$("./div[contains(@class,'qo_item')]"){
										$("./input"){
											attributes(id: "mw_partNumber_4")
										}
									}
									$("./div[contains(@class,'qo_qty')]"){
										$("./input"){
											attributes(id: "mw_quantityPad_4")
										}
									}
								}
								$("./div[@class='_itemContainer'][5]"){
									$("./div[contains(@class,'qo_item')]"){
										$("./input"){
											attributes(id: "mw_partNumber_5")
										}
									}
									$("./div[contains(@class,'qo_qty')]"){
										$("./input"){
											attributes(id: "mw_quantityPad_5")
										}
									}
								}
							}
							#addToMWOrderPadAjax
						}
						$(".//div[@class='btn_addtocart']"){
							$("./a"){
								attributes(onclick: "javaScript: setCurrentId('WC_QuickOrderForm_Submit_1'); quickOrderJS.addToMWOrderPadAjax('MQuickOrderFormMW');")
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
		insert_top("div", class: "_classMiddleHeader", id: "classMiddleHeader"){
			move_here("../div[contains(@class, 'left')]")
			move_here("../div[@class='_userButtons']")
		}
	}
}