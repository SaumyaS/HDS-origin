# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_discount")
	$(".//span[@class='listPrice']"){
				insert_before("br")
			}
	$(".//div[@id='WC_DiscountDetailsDisplay_Table_4']"){
		$("./div[1]"){
			attributes(class: "_productInfo")
			
			# $(".//span[@class='listPrice']"){
			# 	insert_before("br")
			# }
		}
		$("./div[2]"){
			attributes(class: "_discountInfo")
		}
	}
}

$$(".listPrice"){
	insert_before("br")
}
$$(".redPrice"){
	insert_before("br")
}
$$("#WC_CachedProductOnlyDisplay_Link_3_1"){
	remove()
}
$$("#WC_CacheddiscountCatalogEntryDB.productDataBeanOnlyDisplay_Link_2"){
	remove()
}
$$(".productName"){
	$(".//img"){
		insert_top("br")
	}
	
}