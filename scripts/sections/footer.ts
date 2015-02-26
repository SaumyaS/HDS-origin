	
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
					insert_top("a", "Privacy Policy", href: "webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Footer_Privacy_Policy")
					insert_top("span", "|")
					insert_top("a", "Terms & Conditions", href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Footer_Terms_Conditions")
					insert_top("span", "|")
					insert_top("a",  "Full Site", href: "http://www.whitecap.com", class: "_fullSite")
				}
				insert_bottom("div", class: "_bottom_footer"){
					# move_here("../h3")
					# $("./h3"){
					# 	name("a")
					# 	attributes(href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Navigation_Contact_Us")
					# }
					insert_bottom("a", "Help", href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Navigation_Contact_Us")
					insert_top("span", "|")
					insert_top("a", "Find A Branch", href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Store_Locations")
				}
			}

		}
	}
}










# 	# Removes unneeded footer items
# 	$$(".footer_nav_wrapper"){
# 		remove()
# 	}

# 	# Removes the credit card logos
# 	$$(".copyright_right_box"){
# 		remove()
# 	}

# 	$$(".box3"){
# 		remove()
# 	}

# 	$$(".box3"){
# 		remove()
# 	}

# 	$$(".copyright_container"){
# 		add_class("_copyright")
# 	}

# 	$$("#ad_13352"){
# 		add_class("_info")
# 		# $("./h3"){
# 		# 	name("a")
# 		# }

# 		# $("./a"){
# 		# 	attributes(href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Navigation_Contact_Us")
# 		# }
# 		insert_top("div", class: "_top_footer"){
# 			insert_top("a", "Privacy Policy", href: "webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Footer_Privacy_Policy")
# 			insert_top("span", "|")
# 			insert_top("a", "Terms & Conditions", href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Footer_Terms_Conditions")
# 			insert_top("span", "|")
# 			insert_top("a",  "Full Site", href: "http://www.whitecap.com", class: "_fullSite")
# 		}
# 		insert_bottom("div", class: "_bottom_footer"){
# 			move_here("../h3")
# 			$("./h3"){
# 				name("a")
# 				attributes(href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Navigation_Contact_Us")
# 			}
# 			insert_top("span", "|")
# 			insert_top("a", "Find A Branch", href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Store_Locations")
# 		}
# 	}

# 	$$(".foot_contact"){
# 		remove()
# 	}

# $$("#WC_ContentAreaESpot_div_1_17106"){
# 	remove()
# }



