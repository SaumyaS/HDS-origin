
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

# perf.optimize_all_js()
# $("//script[@src]") {
# 	attribute("data-mw_keep", "true")
# }


$("/html"){
	# Removing unneccesary JS Calls
	# remove(".//script[contains(@src,'CategoryDisplay.js')]")
	# remove(".//script[contains(@src,'jcarousel.min.js')]")
	remove(".//script[contains(@src,'tabs.slideshow.js')]")
	remove(".//script[contains(@src,'tabs.js')]")
	remove(".//script[contains(@src, 'HDSEnterpriseStorefrontAssetStore/javascript/MessageHelper.j')]")
	$(".//body"){
		# attributes(onload: "LoginModalDialog.openLoginModalDialog({'storeId':11301,'catalogId':11101,'langId':-1,'MyAccountURL':'https://www.whitecap.com/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&amp;myAcctMain=1&amp;langId=-1&amp;storeId=11301'})")
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
							$url = "https://"+$host+"/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&amp;myAcctMain=1&amp;langId=-1&amp;storeId=11301"
							attributes(onclick: "Login2.submitSpecifiedForm(document.Logon,'"+$url+"');return false;")
							insert_before("br")
							add_class("expand")
						}
					}
				}
			}




			$("./div[@class='nav-secondary']"){
				insert_before("div", class: "_userInfo", "My Account"){

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
			$("./div[@class='account-col']"){
				$(".//div[@class='info']"){
					$("./a"){
						insert_after("br")
					}
				}
			}
			$(".//div[@id='OrderStatusTableDisplay_div_1']"){
				$(".//div[@class='mw_was_thead']"){
					remove()
				}
			}
			$(".//div[@class='mw_was_tbody']/div"){
				insert_top("div", class: "_totalPrice", "Total Price: ")
				insert_top("div", class: "_status", "Status: ")
				insert_top("div", class: "_purchaseOrder", "Purchase Order: ")
				insert_top("div", class: "_orderDate", "Order Date: ")
				insert_top("div", class: "_orderNumber", "Order Number: ")

				$("./div[6]"){
					move_to("../div[1]", position("after"))
				}
				$("./div[7]"){
					move_to("../div[3]", position("after"))
				}
				$("./div[9]"){
					move_to("../div[5]", position ("after"))
				}
				$("./div[10]"){
					add_class("_statusname")
					move_to("../div[7]", position("after"))
				}

				$("./div[@class='_orderNumber']"){
					attributes(style: "float: left; font-weight: bold; min-width: 120px;")
				}
				$("./div[@class='_orderDate']"){
					attributes(style: "float: left; font-weight: bold; min-width: 120px;")
				}
				$("./div[@class='_purchaseOrder']"){
					attributes(style: "float: left; font-weight: bold; min-width: 120px;")
				}
				$("./div[@class='_status']"){
					attributes(style: "float: left; font-weight: bold; min-width: 120px;")
				}
				$("./div[@class='_totalPrice']"){
					attributes(style: "float: left; font-weight: bold; min-width: 120px;")
				}

				$("./div[13]"){
					wrap("div"){
						attributes(class: "_buttons", style: "margin-bottom: 40px;")
						move_here("../div[14]")
						$("./div[1]"){
							attributes(style: "float: left;")
						}
						# $(".//a[@id='WC_OrderStatusDisplay_Link_2d_1']"){
						# 	attributes(href: "javaScript:setCurrentId('WC_OrderStatusDisplay_Link_2d_1'); document.getElementById('OrderHistoryDetailBreadcrumbLink').innerHTML='117599 Details'; document.getElementById('MyAccountBreadcrumbLink').style.display='none';  document.getElementById('OrderHistoryBreadcrumb1').style.display = 'none'; document.getElementById('OrderHistoryBreadcrumb').style.display = 'inline';  MyAccountDisplay.loadContentFromURL('orderdetails', 'https://mlocal.qa-whitecap.ecom.hdsupply.com/webapp/wcs/stores/servlet/AjaxOrderDetail?breadCrumb=117599+DetailsBrcmb&currentSelection=OrderDetailSlct&catalogId=11101&langId=-1&orderId=117599&storeId=11301&orderStatusCode=M');")
						# }
						$("./div[2]"){
							attributes(style: "float: right;")
						}
					}
				}
			}

			$("//*[@id='WC_AccountDisplay_links_3']") {
				add_class("expand")
			}
		}
	}
		
}

$("//div[@class='body']"){
	# add_class("_accountContent")
	$("./div[@class='checkout-container']"){
		attributes(data-ur-set: "toggler")
		$("./div[@class='contentgrad_header']//h3"){
			attributes(data-ur-toggler-component: "button")
		}
		$("./div[@class='content']"){
			attributes(data-ur-toggler-component: "content")
		}
	}

	$("./p[@class='myaccount_desc']"){
		insert_after("div", class: "_speedBuildContainer"){
			insert("a", href: "javaScript:setCurrentId('requisitionList');MyAccountDisplay.loadContentFromURL('requisitionList', 'https://"+$host+"/webapp/wcs/stores/servlet/AjaxRequisitionListDisplayView?currentSelection=requisitionListSlct&catalogId=11101&langId=-1&storeId=11301');MyAccountDisplay.changeSelection('https://"+$host+"/webapp/wcs/stores/servlet/AjaxRequisitionListDisplayView?currentSelection=requisitionListSlct&catalogId=11101&langId=-1&storeId=11301');", id: "requisitionList", "SpeedBuild")
		}
	}
	$("./div[@class='checkout-container']"){
		$("./h3"){
			text(){
				set("Shipping")
			}
			match(text()){
				with(/Shipping/){
					attributes(data-ur-toggler-component: "button")
					insert_after("div", class: "_shippingContent")
					$("../div[@class='_shippingContent']"){
						attributes(data-ur-toggler-component: "content")
						move_here("../ul[@class='orgs']")
						move_here("../div[@class='erp-shipping-address']")
						move_here("../div[@class='erp-shipping-address-detail']")
						$("./div[@class='erp-shipping-address-detail']"){
							$("./span[@class='organizationName']"){
								insert_after("br")
							}
							$("./span[@class='address2']"){
								insert_after("br")
							}
							$("./span[@class='zipCode']"){
								insert_after("br")
							}
							$("./span[@class='phone1']"){
								insert_after("br")
							}
						}
					}
				}
			}

		}
	}

	$(".//form[@id='LinkAccount']"){
		$(".//label"){
			insert_before("br")
		}
		$("./div/br[1]"){
			remove()
		}
		$("./div[@class='checkout-container']"){
			$("./div[3]"){
				attributes(style: "", class: "_youtube")
				$(".//iframe"){
					attributes(width: "", height: "")
				}
			}
			$("./div[2]"){
				attributes(style: "")
				insert_before("hr")
				insert_after("hr")
			}
		}
		$(".//a"){
			add_class("expand")
		}
	}
}