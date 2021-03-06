# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body"){
	$("//*[@id='content_wrapper']/div"){
		attributes(style: "background-color: #fff;")
		add_class("_reviewPage")
		$("./label[contains(text(), Hello)]"){
			add_class("_emailGreeting")
		}
		$("./div[contains(text(), Customer)]"){
			attributes(style: "")
			add_class("_customerNo")
		}
		$("./br[1]"){
			remove()
		}
	}
	$(".//div[@id='QucikBuild_Order_ESpot']"){
		$(".//div[@class='ad']"){
			remove()
		}
	}

	$(".//div[@id='order-info']"){
		$("./div[@class='col-1']/div[1]"){
			insert("hr")
		}

		$("./div[@class='col-2']/div[1]"){
			insert("hr")
		}
		$("./div[@class='col-2']/div[2]"){
			move_here("../h3/span", "top")
			$("./span[1]"){
				attributes(style: "display:block;")
				wrap("h3")
			}
		}
	}
	$(".//div[@id='order-summary']"){

		$(".//div[contains(@class, 'order-summary')]"){
			$(".//div[contains(@class, 'order-product-info')]"){
				insert_before("hr")
				$("./div[4]"){
					match(text()){
						with(/In-Stock/){
							remove()
						}
					}
				}
				$("./div[2]"){
					add_class("_colTitle")
				}
				$("./div[3]"){
					add_class("_colWeight")
					add_class("_margin-bottom")
				}
				# $("./div[4]"){
				# 	add_class("_colInStock")
				# }
				$("./div[4]"){
					add_class("_colQuantity")
					wrap("div"){
						insert_top("label", "Quantity:", class: "_quantity")
						attribute("class", "_Quantity")
					}
					
				}
				$("./div[5]"){
					add_class("_colEach")
					wrap("div"){
						attribute("class", "_eachDiv")
						insert_bottom("div", "Each: ", class: "_each")
					}
				}
				$("./div[6]"){
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

		$("./div[@class='dijitContentPane']"){
			text(){
				replace(/Product/, "")
			}
		}
		$("./div[@id='order-total']"){
			$("./div[1]"){
				add_class("_order_total")
				insert("br")
				attributes(style: "")
			}
		}
		$("./p"){			
			$("./a"){
				add_class("expand")
			}
			
			$("./a[@id='WC_OrderShippingBillingConfirmationPage_Print_Link']"){
				remove()
			}
		}
		
	}
}

