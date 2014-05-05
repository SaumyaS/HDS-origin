# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html"){
	$$(".main_container"){
		add_class("_heyspec")
		# $("./div[@class='brand-splash']"){
		# 	$(".//img"){
		# 		attributes(width: "", height: "")
		# 	}
		# }
		$(".//div[@class='brand-splash']"){
			$(".//img"){
				attributes(height:"40px", max-width:"100%")
			}
		}
		$(".//div[@class='brand-promos']"){
			$("./div"){
				$("./h1"){
					add_class("_heyspec2")
					insert_after("div", class: "_brandCarouselContainer"){
						attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "brandsCarousel", data-ur-center: "enabled")

						insert("div", class: "_brandViewContainer"){
							attributes(data-ur-carousel-component: "scroll_container")
							move_here("../../div[@class='promo-box']"){
								attributes(data-ur-carousel-component: "item")
							}
						}
						insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
					}
				}
				# attributes(class: "_Brand-Title")
				
			}
		}
		# $("./div[@class='brand-categories']"){
			
		# 	$("./div[@class='branding_double_cat']"){
		# 		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "brandsCategoriesCarousel", data-ur-center: "enabled", data-ur-infinite: "disabled")
		# 		insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
		# 		insert_top("div", class: "_brandCategories"){
		# 			attributes(data-ur-carousel-component: "scroll_container")
		# 			move_here("//*[@id='branding-categories']/li/div/div[@class='category-item']")
		# 			$("./div[@class='category-item']"){
		# 				attributes(data-ur-carousel-component: "item")
		# 			}
		# 		}		
		# 	}
		# 	$("./div[@class='branding_single_cat']"){
		# 		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "brands2CategoriesCarousel", data-ur-center: "enabled", data-ur-infinite: "disabled")
				
		# 		$("./ul/li/div[@class='category-row']"){
		# 			insert_after("div", class: "_dots", data-ur-carousel-component: "dots")
		# 			attributes(data-ur-carousel-component: "scroll_container")	
		# 			$("./div[@class='category-item']"){
		# 				attributes(data-ur-carousel-component: "item")
		# 			}
		# 		}
		# 	}
		# }
		/*End test*/
		$(".//div[@class='brand-featured-products']"){
			$("./ul[@class='brand_catpro']"){
				attributes(data-ur-carousel-component: "scroll_container")
				wrap("div"){
					attributes(class: "_featured_prod")
					attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "brandsProductsCarousel", data-ur-center: "enabled", data-ur-infinite: "disabled")
					insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
				}
				$("./li"){
					attributes(data-ur-carousel-component: "item")
				}
				$(".//h1"){
					move_to("../../../../div[@class='brand-featured-products']", "top")
				}
				
			}
		}
		$("/html"){
			remove(".//script[contains(@src,'jcarousel.min.js')]")
		}
	}
}
