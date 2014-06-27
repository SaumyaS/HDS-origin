$("//div[@class='search_based']/span[@class='fright']"){
	$("./select[@id='sizeBy']/option"){
		attribute("value"){
			value(){
				rewrite_link()
			}
		}
	}
	$("./select[@id='orderBy']/option"){
		attribute("value"){
			value(){
				rewrite_link()
			}
		}
	}
}
$("//div[contains(@class, 'result-item')]"){
	$("./a"){
		add_class("_productImage")
	}
	$("./div[contains(@class, 'item-description')]"){
		move_to("../a", position("before"))
		wrap_text_children("div", class: "_SKUList")
		$(".//div[not(text())]"){
			remove()
		}
		$("./div[@class='_SKUList'][1]"){
			remove()
		}
		$("./div[@class='_SKUList'][2]"){
			remove()
		}
		$("./div[@class='_SKUList']"){
			inner(){
				replace(/#/, "#<br>")
			}
		}
	}

	$(".//span[@class='discount-price']/div[contains(@class, 'offerprice')]"){
		$("./span[contains(@class, 'price')]"){
			match(text()){
				with(/Call/){
					$(".."){
						attributes(style: "margin-bottom: 30px;")
					}
				}
			}
		}
	}
}
