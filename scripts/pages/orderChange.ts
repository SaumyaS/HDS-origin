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
			insert_after("br")
			insert_before("br")
		}
		$("./a[@class='btn']"){
			text(){
				set("Calculate")
			}
		}
		$("h2"){
			insert_after("h2", "Shipping")
			remove()
		}
		$("./p"){
			attributes(style: "")
		}
	}
	$("./div[3]"){
		insert("h2", "Estimated Tax")
		move_here("../div[@class='_shipping']/div")
		$("./div"){
			attribute("style", "")
			$("./label"){
				match(text()){
					with(/Estimated/){
						insert_before("br")
					}
					with(/Shipping/){
						insert_before("br")
					}
					with(/Discount/){
						insert_before("br")
					}
				}
			}
			$("./font"){
				insert_before("br")
			}

		}
	}
	$("../a"){
		add_class("expand")
	}
	$("./a[@class='btn']"){
		attributes(onclick: "errorMessagePosition()")
	}
}

$$(".order-product-discount"){
	$("./div[6]"){
		attributes(class: "_discountPrice")
	}
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
	$("./div[1]"){
		attributes(class: "_discountPercent")
	}
}

$$(".order-product-info"){
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
			remove()
		}
		insert_top("label", class: "_quantityLabel", "Quantity:")
		$("./input"){
			attributes(type: "tel", class: "_quantityInput")
		}
		$("./span"){
			attributes(class: "_freeQty")
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