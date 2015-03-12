$$(".shoppingcart_rect_full"){
	add_class("_cart")
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