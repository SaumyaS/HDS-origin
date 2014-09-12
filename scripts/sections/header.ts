

remove(".//script[contains(@src,'jquery.dataTables.min.js')]")

$$("#ad_17601"){
		$("./img"){
			attributes(style: "max-width: 74%;padding-left: 10px;margin-top: -6px;margin-bottom: -11px;")
		}
		# insert("div", class: "Icons-white-cap-logo-no-tagline", )
	move_here("//div[@id='_icons_bar']")
}

$$("#requisition_list_popup_main_div"){
  	attributes(style: "display:none;")
}

$$("body"){
  	add_class("_home")
	table_dump(".//table")
}

$("./head"){


	
	$("./meta[@name='viewport']"){
		attributes(content: "width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0")
	}

	insert("link", rel: "apple-touch-icon", sizes: "72x72", href: asset("images/WhiteCap.png"))
	insert("link", rel: "apple-touch-icon", sizes: "114x114", href: asset("images/WhiteCap.png"))

    $("./script[contains(@src, 'dojo.js')]") {
    	match($secure){
    		with(/true/){
    			insert_after("script", "dojo.config.dojoIframeHistoryUrl = 'https://"+$host+"/wcsstore/dojo15/dojo/resources/iframe_history.html'", type:"text/javascript")
    		}
    		else(){
    			insert_after("script", "dojo.config.dojoIframeHistoryUrl = 'http://"+$host+"/wcsstore/dojo15/dojo/resources/iframe_history.html'", type:"text/javascript")
    		}
    	}
      //comment
    }

	$("./script"){
		match(text()){
			with(/_gaq/){
				remove()
			}
		}
	}
	$("./script[10]"){

		match($host){
			with(/m.whitecap.com/){
				# Prod
				insert_after("script", type: "text/javascript", "  var _gaq = _gaq || [];
					_gaq.push(['_setAccount', 'UA-10289527-4']);
					_gaq.push(['_trackPageview']);

					(function() {
					var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					})();
				")
			}
			with(/stg-whitecap/){
				# STG
				insert_after("script", type: "text/javascript", "  var _gaq = _gaq || [];
					_gaq.push(['_setAccount', 'UA-10289527-6']);
					_gaq.push(['_trackPageview']);

					(function() {
					var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					})();

				")
			}
			with(/qa-whitecap/){
				# QA
				insert_after("script", type: "text/javascript", "  var _gaq = _gaq || [];
					_gaq.push(['_setAccount', 'UA-10289527-5']);
					_gaq.push(['_trackPageview']);

					(function() {
					var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					})();

				")
			}
		}
		

		

		

	}
}

$("/html"){
  remove(".//script[contains(@src,'navigation.js')]")
  	$("./body"){

  		move_here("//script", "bottom")
  		$("./script[contains(@src, 'jquery-1.7.2.min.js')]"){
  			move_to("../../head")
  		}
  		$("./script[contains(@src, 'main.js')]"){
			move_to("../../head")
		}

# 		# Removes all the breakpoints
		match($path){
			with(/Footer_Terms_Conditions/){}
			with(/OrderShippingBillingView/){}
			with(/SingleShipmentOrderSummaryView/){}
			with(/OrderShippingBillingConfirmationView/){}
			with(/AjaxRequisitionListCreateView/){}
			with(/quickorder/){}
			# with(/OrderCalculate/){}
			with(/AjaxOrderDetail/){}
			else(){
				$$("br"){
					remove()
				}
			}
		}

# 		# Removes breadcrumbs
		$$("#breadcrumb"){
			attributes(style: "display: none;")
		}

		$$("#sessionTimeoutModalDiv"){
			remove()
		}

		match($path){
			with(/AjaxCheckoutDisplayView/){
				$(".//div[@id='MessageArea']"){
					attributes(style: "display:none;")
				}
			}
			with(/UserRegistrationAdd/){
				$(".//div[@id='MessageArea']"){
					remove()
				}
			}
			with(/AjaxOrderItemDisplayView/){
				$(".//div[@id='MessageArea']"){
					attributes(style: "display: none;")
				}
			}
		}

		$(".//div[@class='header_wrapper']"){
			attributes(id: "moovweb-header")
			wrap("div"){
			  	attributes(class: "header_widget", data-ur-set: "tabs", data-ur-closeable: "true")
			  	move_here("../div[@class='nav_wrapper']")
			}
		}

	$(".//li[@class='MyAccountURLSep']"){
		move_to("../../ul[@class='cart_menu']", position("top"))
		$("./a[1]"){
		  attributes(onclick: "", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301")
		}
	}
  }
}

# Creates toggler for Navigation
$$(".nav_wrapper"){
	$("./div/ul"){
		$("li[1]"){
			attribute("id", "menu1")
		}
	}

	$$(".nav-primary"){
		attributes(style: "display:none;")
		$$(">li"){
			attribute("class", "col")

			$$(">a"){
				attributes(class: "_category")
			}
		}
		$("./li[@id='menu1']"){
			attributes(class: "_accordian")
		}
		$("./li[@id='menu5']"){
			$("./a"){
				attributes(href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Resources_mHome")
			}
		}

		$("./li[@id='menu6']"){
			attributes(class: "_accordian")
		}
	}

	$$("#menu1"){
		attribute("data-ur-set", "toggler")
		$$(">a"){
		  attributes(data-ur-toggler-component: "button", data-ur-id: "submenu")
		}

		$$(".subnav"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "submenu")
			$(".//a"){
				attribute("class", "_sub2")
			}
		}
	}

	$(".//li[@id='menu6']"){
		attribute("data-ur-set", "toggler")
		$$(">a"){
		  attributes(data-ur-toggler-component: "button", data-ur-id: "submenu2")
		}

		$$(".subnav"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "submenu2")
			$(".//a"){
				attribute("class", "_sub2")
			}
			$(".//a[contains(text(),'Coupons')]"){
				remove()
			}
		}
	}
}

$$("#msgpopup1_x"){
	remove()
}

# Creates the menu buttons
$$(".checkout_wrapper"){
	insert("div", class: "_accountURL"){
		move_here("../ul[@class='cart_menu']"){
		  	$(".//li[@class='MyAccountURLSep']"){
				attributes(data-ur-tabs-component: "content", data-ur-tab-id:"user")
		  	}
		}
	}
	insert("div", id: "_icons_bar"){
		

		insert("div", id: "image-cart"){
		  	copy_here("//div[@id='shopping-cart']"){
		  		$(".//a[@id='shoppingCartBar']"){
					wrap_text_children("span") {
						match(text()) {
							with(/Empty/){
								$("../img") {
									remove()
								}
						 		insert("div", id: "cart-image")
							}
							with(/Checkout/){
						  		$("../img") {
									remove()
						  		}
						  		insert("div", id: "cart-image")
							}
						}
						remove_text_nodes()
					}
				}
		  	}
		  	add_class("_cart")
		}
		insert("div", id: "image-user", data-ur-tab-id: "user", data-ur-tabs-component: "button")
		insert("div", id: "image-menu")
	}

	$$("#image-menu"){
		attributes(class: "Icons-menu")
	}

	$$("#image-user"){
		attributes(class: "Icons-male_user")
	}
}

$$("a#headerAdvancedSearch"){
	# move_to("//div[@id='autoSuggest_Container']", "after")
	attributes(style: "display: none;")
}

$$("form#CatalogSearchForm"){
	wrap("div") {
		attributes(id: "search_bar")
		# move_here("../a[@id='headerAdvancedSearch']")
		$(".//a[@id='WC_CachedHeaderDisplay_button_1']"){
			attributes(onmouseover: "", onmouseout: "")
			add_class("btn")
			text(){
				set("Search")
			}
			$("./input"){
				remove()
			}
		}
	}
}

$$("#search_overlay"){
	attribute("value") {
		value("Search")
	}
}

$("//*[@id='MiniShoppingCart']"){
	attribute("onmouseover", "")
}


$("//*[@class='free_gifts_popup_main_div']"){
	attributes(style: "display: none;")
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
		else (){
			inner_wrap("div", id: "body-content"){
				insert_bottom("div", id: "pers-nav-mask")
				insert_before("div", id: "pers-nav"){
					copy_here("//div[@class='nav_wrapper']")
					insert("div", class: "_hdsupplyLogo"){
						insert("div", class: "Icons-HDSupply-Logo")
					}
				}
			}
			$("./div[@id='pers-nav']"){
				$(".//ul[@class='nav-primary']"){
					attributes(style: "display:block;")
					attributes(data-ur-state: "enabled")
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

$$(".checkout_wrapper"){
	$(".//a[@id='shoppingCartBar']"){
		$("./img"){
			remove()
		}
	}
}

# $$("#_icons_bar"){
# 	$("./a"){
# 		remove()
# 	}
# }





