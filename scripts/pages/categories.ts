$("/html"){
	$(".//div[@class='main_container']"){
		add_class("_categories")
		$("./div[@class='topcat_left_content']"){
			$("./div[@class='topcat_header']"){
				remove()
			}
			$("./div[@class='content_wrapper_box']"){
				$(".//div[@class='hp_topcat']"){
					$("./ul/li"){
						attributes(class: "_hp_topcatItem", style: "")
						$(".//img"){
							attributes(width: "", height: "")
						}
					}
				}
				$(".//div[contains(@class,'topcat_promo2')]"){
					inner_wrap("div", class: "_topCatCarousel")
				}
				$(".//div[@id='SubCategoryDisplay_Widget']"){
					$("./div[contains(@class,'topcat_promo2')]"){
						attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "cat_icons", data-ur-center: "enabled", data-ur-autoscroll: "enabled")
						$("./div[@class='_topCatCarousel']"){
							attributes(data-ur-carousel-component: "scroll_container", style: "width: 1500px !important;")
							insert_after("div", class: "_dots", data-ur-carousel-component: "dots")

							$("./div[contains(@class, 'topcat_promo2')]"){
								attributes(data-ur-carousel-component: "item")
								add_class("_promoItem")
							}
						}
					}
				}
			}
		}
	}
}


# $("/html"){

# 	$$("#ad_17601"){
# 		move_here("//div[@id='_icons_bar']")
# 	}
# 	$$(".topcat_narrow_row"){
# 		$("./ul/li/div[1]"){
# 			add_class("_imageDiv")
# 		}
# 	}
	
# 	$("./body"){
# 		$(".//div[@class='topcat_left_content']"){

# 		}
# 		# topcat_promo2
# 		$("./div[2]"){
# 			wrap("div"){
# 				attributes(class: "_catView", data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "cat_icons", data-ur-center: "enabled", data-ur-autoscroll: "enabled")
# 				insert_bottom("div", data-ur-carousel-component: "dots", class: "_dots")
# 			}
# 			attributes(data-ur-carousel-component: "scroll_container")
# 			$("./div"){
# 				name(){
# 					set("li")
# 				}
# 				attributes(class: "_catType", data-ur-carousel-component: "item")
# 				$(".//img"){
# 				perf.optimize_image("src") {
# 					# Change image formats: jpeg, png, and webp!
# 					perf.format("jpeg")

# 					# # Resize the pixels
# 					perf.width("175")
# 					perf.height("111")
# 				}

# 			}
# 			}
# 		}
# 		$(".//div[@class='topcat_promo1']"){
# 			$(".//img"){
# 				perf.optimize_image("src") {
# 					# Change image formats: jpeg, png, and webp!
# 					perf.format("jpeg")

# 					# # Resize the pixels
# 					perf.width("310")
# 					perf.height("84")
# 				}

# 			}
# 		}
# 	}
# 	$("./body//div[@class='topcat_right_content']"){
# 		# attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "feat_icons", data-ur-center: "enabled", data-ur-autoscroll: "disabled", data-ur-infinite: "disabled")
# 		# $("./div[@class='topcat_right_content_main']"){
# 		# 	attributes(data-ur-carousel-component: "scroll_container")
# 		# 	$("./div[@class='topcat_right_content-product']"){
# 		# 		attributes(data-ur-carousel-component: "item")
# 		# 	}

# 		# }
# 		move_to("../../div/div[@class='topcat_left_content']/div[2]", position("after"))
# 	}
# }






