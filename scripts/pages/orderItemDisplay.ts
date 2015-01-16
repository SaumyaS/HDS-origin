
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}


$$("body"){
	insert_top("script", type: "text/Javascript", "$(document).ready(function() {
		showProgressBar = function(){}
		});")
}

$("//*[@id='order_details']/div[1]"){
	remove()
}

$$(".order-confirm"){
	$(".//div[@id='order-summary']"){

		$("./a"){
			add_class("expand")
		}
		$("./a[contains(@class, 'btn')][1]"){
			attributes(id: "Update")
			# $onclick = fetch("./@onclick")
			# attributes(onclick: concat($onclick, ";errorMessagePosition();"))
		}
		# $("./a[contains(@class, 'btn')]"){
		# 	$onclick = fetch("./@onclick")
		# 	attributes(onclick: concat($onclick, "Ur.setup(\"._togglerBillContainer\");Ur.setup(\"._togglerShipContainer\");Ur.setup(\"._orderSummaryContainer\");"))
		# }

		$(".//div[contains(@class, 'order-product-info')]"){
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
				$("./label"){
					attributes(style: "display: block;", value: "Quantity:")
					text(){
						set("Quantity:")
					}
				}
				$("./input"){
					attributes(type: "tel", class: "_quantityInput")
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
		$$(".order-product-discount"){
			$("./div[1]"){
				attributes(class: "_discountPercent")
			}
			$("./div[6]"){
				attributes(class: "_discountPrice")
			}
		}
		$$(".order-product-last"){
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
				add_class("_remove")
			}
			$("./div[5]"){
				add_class("_delete")
			}
			$("./div[6]"){
				add_class("_delete")
			}
		}

		$$("#cart-total"){
			$("./div[1]"){
				attributes(style: "", class: "_promo")
				$(".//input[@id='promoCode']"){
					insert_after("br")
					insert_before("br")
				}
				$(".//h2"){
					attributes(style: "")
				}
			}
			$("./div[2]"){
				attributes(style: "", class: "_shipping")
				insert_after("div", class: "_tax")
				$(".//input[@id='shippingAndTaxZipCode']"){
					attributes(type: "tel")
					insert_after("br")
					insert_before("br")
				}
				$("./a[@class='btn']"){
					text(){
						set("Calculate")
					}
				}
			}
			$("./div[3]"){
				insert("h2", "Estimated Tax")
				move_here("../div[@class='_shipping']/div")
				$("./div"){
					attribute("style", "")

					$("./label[2]"){
						insert_before("br")
					}
					$("./label[3]"){
						insert_before("br")
					}
					$("./label[4]"){
						insert_before("br")
					}
					$("./font"){
						insert_before("br")
					}

				}
			}
		}
	}
}

$("//*[@id='cart-total']/div[2]"){
	$("./h2"){
		attributes(style: "height: 141px;")
		text(){
			set("Shipping")
		}
	}
}
