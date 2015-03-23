$("/html"){
	$(".//div[@class='main_container']"){
		attributes(style: "")
		add_class("_home")
		$("./div[1]"){
			attributes(class: "_homepageThumbnail")
			$("./div[@class='hp_header']"){
				$("./div"){
					remove()
				}
				insert("div", class: "_hp_headerTitle", "Top Categories")
			}
			$("./div[2]"){
				attributes(style: "")
			}
			$(".//div[@class='hp_topcat']"){
				$("./ul"){
					attributes(class: "_hp_topcatContainer")
					$("./li"){
						attributes(class: "_hp_topcatItem", style: "")
					}
				}
			}
		}
		$(".//div[@class='top_promo_wrapper']"){
			remove()
		}
		$(".//div[@class='mid_promo_wrapper']"){
			$("./div[@class='mid_promo_leftcol']"){
				remove()
			}
			$("./div[@class='mid_promo_rightcol']"){
				$("./div[contains(@class, 'mid_promo_right_main')]"){
					attributes(class: "_TPcarousel")
					$(".//ul[contains(@class,'first-and-second-carousel')]"){
						attributes(class: "_TPcarouselContainer")
						$("./li"){
							attributes(class: "_TPcarouselItem")
						}
					}

					attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-infinite: "enabled")
					$("./ul[@class='_TPcarouselContainer']"){
						attributes(data-ur-carousel-component: "scroll_container", style: "width: 2500px !important;")
						insert_after("div", class: "_dots", data-ur-carousel-component: "dots")
						$("./li[@class='_TPcarouselItem']"){
							attributes(data-ur-carousel-component: "item")
							$("./a[@class='lpadd_tocart']"){
								add_class("btn")
								add_class("expand")
							}
						}
					}

				}
			}
		}
		$("./div[@class='bottom-promos']"){
			insert_top("div", class: "_specialsCarousel"){
				move_here("../ul/li")
				$("./li"){
					name(){
						set("div")
					}
					attributes(class: "_specialsItem")

					$(".//div[@class='ad']"){
						$("./div[2]"){
							attributes(class: "_specialsContent")
						}
					}
				}
			}
			attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-infinite: "enabled")
			$("./div[@class='_specialsCarousel']"){
				attributes(data-ur-carousel-component: "scroll_container", style: "width: 2500px;")
				insert_after("div", class: "_dots", data-ur-carousel-component: "dots")
				$("./div[@class='_specialsItem']"){
					attributes(data-ur-carousel-component: "item")
				}
			}
			wrap("div", class: "_bottomPromoContainer"){
				insert_top("div", class: "_featuredDealTitle", "Featured Deals")
			}
		}
	}
}