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
			insert_before("div", class: "_userInfo", "Navigation"){

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
	$$("h1"){
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
	$$(".my_account"){
		$$(".body"){
			add_class("_ajaxCalledAccount")

			$("./div[@class='checkout-container']"){
				add_class("_togglerInitialize")
				attributes(data-ur-set: "toggler")
				$("./div[@class='contentgrad_header']//h3"){
					attributes(data-ur-toggler-component: "button")
				}
				$("./div[@class='content']"){
					attributes(data-ur-toggler-component: "content")
				}

				$(".//div[@class='info']"){
					$("./a"){
						insert_before("br")
					}
					$("./br[1]"){
						remove()
					}
				}

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
			
			$("./p[@class='myaccount_desc']"){
				insert_after("div", class: "_speedBuildContainer"){
					insert("a", href: "javaScript:setCurrentId('requisitionList');MyAccountDisplay.loadContentFromURL('requisitionList', 'https://"+$host+"/webapp/wcs/stores/servlet/AjaxRequisitionListDisplayView?currentSelection=requisitionListSlct&catalogId=11101&langId=-1&storeId=11301');MyAccountDisplay.changeSelection('https://"+$host+"/webapp/wcs/stores/servlet/AjaxRequisitionListDisplayView?currentSelection=requisitionListSlct&catalogId=11101&langId=-1&storeId=11301');", id: "requisitionList", "SpeedBuild")
				}
			}
		}

		$("//div[@id='OrderStatusTableDisplay_div_1']"){
			$(".//div[@class='mw_was_thead']"){
				remove()
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
						$("./div[2]"){
							attributes(style: "float: right;")
						}
					}
				}
			}
		}
	}
}