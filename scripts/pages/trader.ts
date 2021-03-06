# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_traderESpot")

	$(".//div[@class='brand-promos']"){
		$(".//h1"){
			insert_after("div", class: "_traderView"){
				move_here("../div[@class='promo-box']")
				wrap("div"){
					attributes(class: "_traderCarousel")
				}
				$("./div[@class='promo-box']"){
				}
			}
		}
		$(".//div[@class='_traderCarousel']"){
			attributes(data-ur-set: "carousel", data-ur-id: "tradereSpotCarousel", data-ur-carousel-component: "view_container", data-ur-center: "enabled")
			$("./div[@class='_traderView']"){
				attributes(data-ur-carousel-component: "scroll_container")

				$("./div[@class='promo-box']"){
					attributes(data-ur-carousel-component: "item")
				}
			}
			insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
		}
	}
	$(".//div[@class='brand-featured-products']"){
		insert_top("div", class: "_brand-view"){
			move_here("../ul[@class='brand_catpro']/li")
		}
		move_here("./ul/h1", "top")
		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-center: "enabled", data-ur-infinite: "disabled")
		$("./div[@class='_brand-view']"){
			attributes(data-ur-carousel-component: "scroll_container")
			$("./li"){
				attributes(data-ur-carousel-component: "item")
			}
		}
		insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
	}

}