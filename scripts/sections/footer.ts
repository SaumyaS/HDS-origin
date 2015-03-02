	
$$(".footer_wrapper"){
	wrap("div"){
		attributes(class: "_footer")
		move_here("../div[@class='copyright_wrapper']")
	}
}

$("/html"){
	$(".//div[@class='_footer']"){
		$("./div[@class='footer_wrapper']"){
			remove()
		}
		$("./div[@class='copyright_wrapper']"){
			$(".//div[@class='copyright_right_box']"){
				remove()
			}
			$(".//div[@class='copyright_left_box']"){
				$("./a"){
					remove()
				}
				insert_before("div", class: "_footerLinks")
			}
			$(".//div[@class='_footerLinks']"){
				insert_top("div", class: "_top_footer"){
					insert_bottom("a", "Help", href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=navigation-help")
					insert_top("span", "|")
					insert_top("a", "Find A Branch", href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=store-locations")
					insert_top("span", "|")
					insert_top("a",  "Full Site", href: "http://www.whitecap.com", class: "_fullSite")
				}
			}

		}
	}
}
