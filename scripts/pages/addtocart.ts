
$$(".Add_To_Cart_modal"){
	attributes(style: "border-radius: 10px; padding: 10px; background-color: white; border: 1px solid #555; width: 260px; text-align: center;")
	add_class("shadow")
	$(".//div[@class='Add_To_Cart_modal_dialog_h2']"){
		$("./img"){
			remove()
		}
		$("./h2"){
			
		}
	}
}

$$(".dijitDialogCloseIcon"){
		attributes(style: "padding: 5px; border: 1px solid #555;")
}

$("//ul[@class='shoping_btn']/li"){
	attributes(style: "margin-bottom: 10px;")
}

$("//*[@id='Add_To_Cart_modal_dialog']/div[1]/span[2]/span"){
	attributes(style: "padding: 3px 5px; border: 1px solid #555;")
}

