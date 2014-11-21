$("/html"){
	inner_wrap("div"){
		attributes(class: "_orderDetails")
	}
	$(".//div[@id='ad_63001']"){
		$("./input"){
			add_class("expand")
		}
	}
	$(".//div[@id='box']/div[@class='my_account']"){

		$("./div[@class='sub-col']"){
			add_class("_paymentInfo")
			$("./p"){
				match(text()){
					with(/You/){
						$(".."){
							add_class("_orderInfo")
						}
					}
				}
			}
			# $("./label[2]"){
			# 	insert_before("br")
			# }
			$("./h3"){
				match(text()){
					with(/Billing/){
						add_class("_BillingInfo")
						attributes(style: "")
					}
					with(/Shipping/){
						add_class("_ShippingInfo")
						attributes(style: "")
					}
				}
			}
		}
		insert_after("div", class: "_returnSummary"){
			move_here("../h1")
			move_here("../div[contains(@id,'expand')]")
			move_here("../div[contains(@id,'collapse')]")
		}
	}
	$(".//div[@class='_returnSummary']"){
		# attributes(data-ur-set: "toggler")
		$("./div[contains(@id,'expand')]"){
			remove()
		}
		$("./div[contains(@id,'collapse')]"){
			$("./br"){
				remove()
			}
			$("./br[1]"){
				remove()
			}
			attributes(style:"")
			$("./div[1]"){
				remove()
			}
			wrap_text_children("div")
			$("./div[1]"){
				remove()
			}
			$("./div[1]"){
				remove()
			}
			$("./div[1]"){
				remove()
			}
			$("./div[4]"){
				remove()
			}
			$("./label[1]"){
				attributes(class: "_retNumber", style: "font-weight:normal;")
			}
			$("./label[2]"){
				attributes(style: "min-width:80px;font-weight:normal;", class: "_retDate")
				wrap_text_children("strong")
				insert_before("br")
				move_here("../div[1]")
				$("./div"){
					unwrap()
				}
			}
			insert_top("div", class: "_retSummaryButton"){
			 	move_here("../label")
			 	insert_after("div", class: "_retContentContainer")
			}

			$("./div[3]"){
				attributes(class: "_retComment", style: "")
			}

			$("./div[@class='_retContentContainer']"){
				move_here("../div[@class='_retComment']")
				move_here("../div[contains(@class,'checkout-container')]")
			}

		}

		#implement toggler
		# this has to be enabled with a Ur.setup() call
		$("./div[contains(@id,'collapse')]"){
			attributes(data-ur-set: "toggler")
			$("./div[@class='_retSummaryButton']"){
				attributes(data-ur-toggler-component: "button")
			}
			$("./div[@class='_retContentContainer']"){
				attributes(data-ur-toggler-component: "content")
			}
		}
	}


}

$$("._paymentInfo"){
	$("./hr"){
		remove()
	}
	$("./p[@class='title']"){

	}

	$("./h3[@class='_BillingInfo']"){
		# wrap("div"){
		# 	attributes(class: "_togglerBillContainer")
		# }
		# insert_after("div", class: "_content"){
			# move_here("../../div[2]")
			# move_here("../../div[2]"){
			# 	$("./label"){
			# 		insert_before("br")
			# 	}
			# 	$("./br[1]"){
			# 		remove()
			# 	}
			# }
			# move_here("../../div[2]")
		# }
	}
	# $("./h3[@class='_ShippingInfo']"){
	# 	wrap("div"){
	# 		attributes(class: "_togglerShipContainer")
	# 	}
	# 	insert_after("div", class: "_content"){
	# 		move_here("../../div[3]")
	# 		move_here("../../div[3]"){
	# 			$("./label"){
	# 				insert_before("br")
	# 			}
	# 			$("./br[1]"){
	# 				remove()
	# 			}
	# 		}
	# 	}
	# }
	$("./div[@class='_togglerBillContainer']"){
		attributes(data-ur-set: "toggler", data-ur-id: "bill")
		$("./h3[@class='_BillingInfo']"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "bill")
		}
		$("./div[@class='_content']"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "bill")
		}
	}
	$("./div[@class='_togglerShipContainer']"){
		attributes(data-ur-set: "toggler", data-ur-id: "ship")
		$("./h3[@class='_ShippingInfo']"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "ship")
		}
		$("./div[@class='_content']"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "ship")
		}
	}
}

$$(".checkout-container"){
	add_class("_orderSummaryContainer")
	attributes(data-ur-set: "toggler", data-ur-id: "order")
	$("./h3"){
		match(text()){
			with(/Order/){
				attributes(class: "_orderSummaryTitle", data-ur-toggler-component: "button", data-ur-id: "order")
			}
		}
	}


	$(".//div[contains(@class, 'order-summary')]"){
		$("./div[@class='mw_was_thead']"){
			remove()
		}
		$(".//div[contains(@class, 'order-product-info')]"){
			insert_before("hr")
			$("./div[2]"){
				add_class("_colTitle")
			}
			$("./div[3]"){
				add_class("_colWeight")
			}
			$("./div[4]"){
				add_class("_colInStock")
			}
			$("./div[5]"){
				add_class("_colQuantity")
				wrap("div"){
					insert_top("span", "Quantity:", class: "_quantity")
					attribute("class", "_Quantity")
				}
				
			}
			$("./div[6]"){
				add_class("_colEach")
				wrap("div"){
					attribute("class", "_eachDiv")
					insert_bottom("div", "Each: ", class: "_each")
				}
			}
			$("./div[7]"){
				add_class("_colTotal")
				wrap("div"){
					attribute("class", "_totalDiv")
					insert_bottom("div", "Total: ", class: "_total")
				}
			}

			$$("._colInStock"){
				insert_after("div", class: "info")
			}
		}
		$(".//div[contains(@class, 'order-product-discount')]"){
			$("./div[5]"){
				remove()
			}
			$("./div[4]"){
				remove()
			}
			$("./div[3]"){
				remove()
			}
			$("./div[2]"){
				remove()
			}
		}
		$(".//div[contains(@class, 'order-product-last')]"){
			$("./div[1]"){
				add_class("_sku")
			}
			$("./div[2]"){
				add_class("_delete")
			}
			$("./div[3]"){
				add_class("_delete")
			}
			$("./div[4]"){
				add_class("_delete")
			}
			$("./div[5]"){
				add_class("_delete")
			}
			$("./div[6]"){
				add_class("_delete")
			}
		}
		$(".//hr[1]"){
			remove()
		}
	}


	$("./div[@id='OrderConfirmPagingDisplay']"){
		attributes(data-ur-toggler-component: "content", data-ur-id: "order")
	}
	$(".//div[@id='order-total']"){
		$("./div[1]"){
			attributes(style: "")
			# $("./label"){
			# 	insert_before("br")
			# }
			$("./label[@id='WC_SingleShipmentOrderTotalsSummary_td_11']"){
				insert_before("br")
			}
			$("./br[1]"){
				remove()
			}
			# $("./font"){
			# 	insert_before("br")
			# }
		}
		$(".//div[@id='adhocChargesComment']"){
			$("./font"){
				$("./br"){
					remove()
				}
			}
		}
	}
	$("./a[@id='WC_OrderDetailDisplay_Print_Link']"){
		remove()
	}
	$("./a"){
		match(text()){
			with(/Continue/){
				add_class("expand")
			}
		}
	}
	$("./a[@id='email_modal_link']"){
		$onclick = fetch("./@onclick")
		attributes(onclick: concat($onclick, "Ur.setup(\"._togglerBillContainer\");Ur.setup(\"._togglerShipContainer\");Ur.setup(\"._orderSummaryContainer\");"))
		add_class("expand")
	}
}

$$("._returnSummary"){
	$(".//div[contains(@class,'_orderSummaryContainer')]"){
		$(".//div[contains(@class,'order-product-info')]"){
			$("./div[contains(@class, 'image')]"){
				insert_after("div", class:"_skuInfo")
			}
			$("./div[contains(@class, '_colWeight')]"){
				attributes(class: "_QuantityContainer")
				insert_top("span", class: "_quanitiy", "Quantity: ")
			}
			$("./div[contains(@class,'_colInStock')]"){
				attributes(class: "_creditAmmount")
				insert_top("span", class: "_credAmt", "Credit Amount: ")

			}
			$("./div[@class='info']"){
				remove()
			}
			$("./div[@class='_Quantity']"){
				attributes(class: "_creditAdjInfo")
				$("./span[@class='_quantity']"){
					remove()
				}
				$("./div[contains(@class, '_colQuantity')]"){
					attributes(class: "_credAdjNum")
					unwrap()
				}
				insert_top("span", class: "_credAdj", "Credit Adjustment: ")
			}
			$("./div[@class='_eachDiv']"){
				attributes(class: "_creditBTInfo")
				$("./div[@class='_each']"){
					remove()
				}
				insert_top("span", class: "_credBT", "Credit Adjustment: ")
				$("./div[contains(@class,'_colEach')]"){
					unwrap()
				}
			}
			$("./div[@class='_skuInfo']"){
				move_here("../div[contains(@class,'_colTitle')]")
				move_here("../div[@class='_QuantityContainer']")
				move_here("../div[@class='_creditAmmount']")
				move_here("../div[@class='_creditAdjInfo']")
				move_here("../div[@class='_creditBTInfo']")
				move_here("../div[@class='_QuantityContainer']")
				move_here("../../div[contains(@class,'order-product-last')]/div[contains(@class,'_sku')]")
			}
		}
		$("./div[@id='order-total']"){
			$(".//label[@class='total_details']"){
				insert_before("br")
			}
			$(".//br[1]"){
				remove()
			}

		}
	}
}

$("/html"){
	$(".//div[contains(@id, 'collapse')]"){
		$("./br"){
			remove()
		}
	}
}