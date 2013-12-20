
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//*[@id='main_content_wrapper']/div/div"){
	add_class("_specials")

	$(".//div[@class='ad_product']"){
		$("./a"){
			attributes(class: "_onlineSpecials")
		}
	}


	$(".//div[@id='WC_ContentAreaESpot_div_22_1']/div[1]"){
		attributes(class: "_specialText", style: "")
	# Removeing blank rows
		# $("./div[@data-mw-id='mw_dump_tr1']"){
		# 	remove()
		# }
		# $("./div[@data-mw-id='mw_dump_tr5']"){
		# 	remove()
		# }
		# $("./div[@data-mw-id='mw_dump_tr24']"){
		# 	remove()
		# }
		# $("./div[@data-mw-id='mw_dump_tr43']"){
		# 	remove()
		# }

		# Restructuring each of the rows
		# insert_top("div", class: "_carousel4")
		insert_top("div", class: "_carousel", id: "_carousel6")
		insert_top("div", class: "_carousel", id: "_carousel5")
		insert_top("div", class: "_carousel", id: "_carousel4")
		insert_top("div", class: "_carousel", id: "_carousel3")
		insert_top("div", class: "_carousel", id: "_carousel2")
		insert_top("div", class: "_carousel", id: "_carousel1")

		$("./div[@id='_carousel1']"){
			move_here("../div[7]")
		}
		$("./div[7]"){
			move_to("../div[@id='_carousel1']", position("after"))
		}

		$("./div[@id='_carousel2']"){
			move_here("../div[8]")
		}
		$("./div[8]"){
			move_to("../div[@id='_carousel2']", position("after"))
		}
		$("./div[@id='_carousel3']"){
			move_here("../div[9]")
		}
		$("./div[9]"){
			move_to("../div[@id='_carousel3']", position("after"))
		}
		$("./div[@id='_carousel4']"){
			move_here("../div[10]")
		}
		$("./div[10]"){
			move_to("../div[@id='_carousel4']", position("after"))
		}
		$("./div[@id='_carousel5']"){
			move_here("../div[11]")
		}
		$("./div[11]"){
			move_to("../div[@id='_carousel5']", position("after"))
		}
		$("./div[@id='_carousel6']"){
			move_here("../div[12]")
		}
		$("./div[12]"){
			move_to("../div[@id='_carousel6']", position("after"))
		}
		$("./div[@class='_carousel']"){
			$("./div"){
				attributes(class: "_scrolls")
				$("./div"){
					attributes(class: "_carouselItem")
					$("./a[2]"){
						remove()
					}
				}
			}
		}
		# Making rows suitable for carousel
		# $("./div[@class='_carousel']"){
		# 	# insert_after("hr")
		# 	insert("div", class: "_carouselItem"){
		# 		move_here("../div[1]/div[1]")
		# 		move_here("../div[2]/div[1]")
		# 		move_here("../div[3]/div[1]")
		# 	}
		# 	insert("div", class: "_carouselItem"){
		# 		move_here("../div[1]/div[1]")
		# 		move_here("../div[2]/div[1]")
		# 		move_here("../div[3]/div[1]")
		# 	}
		# 	insert("div", class: "_carouselItem"){
		# 		move_here("../div[1]/div[1]")
		# 		move_here("../div[2]/div[1]")
		# 		move_here("../div[3]/div[1]")
		# 	}
		# 	$("./div[@class='mw_was_tr']"){
		# 		remove()
		# 	}
		# 	$("./div[@class='_carouselItem']"){
		# 		$("./div[2]"){
		# 			attributes(class: "_text")
		# 		}
		# 	}
		# 	wrap("div"){
		# 		attributes(class: "_container")
		# 	}
		# }

		# Creating the Carousel Attributes
		$("./div[@class='_carousel']"){
      		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-autoscroll: "disabled", data-ur-center: "enabled", data-ur-infinite: "enabled")
      		$("./div[@class='_scrolls']"){
      			attributes(data-ur-carousel-component: "scroll_container")
      			$("./div[@class='_carouselItem']"){
      				attributes(data-ur-carousel-component: "item", style: "float: left;")
      			}
      		}
      		insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
		}
	}

	# $(".//div[@id='WC_ContentAreaESpot_div_22_1']/div[3]"){
	# 	add_class("_specialsBottom")
	# 	$("div[1]"){
	# 		remove()
	# 	}
	# 	$("div[3]"){
	# 		remove()
	# 	}
	# 	$("./div[2]"){
	# 		add_class("_specialsTextBottom")
	# 	}
	# }
	# $(".//div[@id='WC_ContentAreaESpot_div_22_1']/p"){
	# 	remove()
	# }
}

# $$("._specialText"){
# 	$("./div[@data-ur-set='carousel']"){
# 		$("./div/div"){
# 			$("./a"){
# 				attributes(class: "")
# 				remove_text_nodes()
# 				move_here("../../div[1]/img")
# 			}
# 		}
# 		$(".//div[@class='_carouselItem']"){
# 			$("./div[@class='_text']"){
# 				move_to("..", position("bottom"))
# 			}
# 		}
# 	}
# }
