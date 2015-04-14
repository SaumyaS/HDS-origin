$("//*[@id='main_content_wrapper']/div/div"){
	add_class("_specials")

	$(".//div[@class='ad']"){
		move_here(".//div[contains(@id, 'row')]")

		$("./div[@class='ad_space_1']"){
			remove()
		}
		$("./div[contains(@id, 'row')]"){
			attributes(class: "_carouselRows", align: "", style: "")
			$(".//div[contains(@class, 'mw_was_table')]"){
				attributes(style: "", width: "", bordercolor: "", cellspacing: "", cellpadding: "", align: "")
			}

			$("./div[contains(@class, 'mw_was_table')]"){
				attributes(class: "_tableToRemove")
			}

			$(".//div[contains(@class, 'mw_was_td')]"){
				attributes(style: "", height: "", colspan: "", align: "")
			}
			move_here("./div[@class='_tableToRemove']/div[@class='mw_was_tbody']/div[@class='mw_was_tr']/div[@class='mw_was_td']/div[contains(@class, 'mw_was_table')]")

			$("./div[@class='_tableToRemove']"){
				remove()
			}

			$("./div[contains(@class, 'mw_was_table')]"){
				attributes(class: "_carouselItem", border: "", data-mw-id: "")
				$("./div[@class='mw_was_tbody'][1]"){
					attributes(class: "_specialHeaderText")
					$("./div[1]"){
						attributes(class: "_infoOne")
					}
					$("./div[2]"){
						attributes(class: "_infoTwo")
					}
				}
				$("./div[@class='mw_was_tbody'][1]"){
					attributes(class: "_specialItems")
					$("./div[1]"){
						attributes(class: "_imgContainer")
					}
					$("./div[2]"){
						attributes(class: "_specialDescription")
					}
					$("./div[3]"){
						attributes(class: "_specialPrice")
					}
					$("./div[4]"){
						attributes(class: "_specialShopButton")
					}


					$("./div[@class='_specialDescription']"){
						$(".//span"){
							attributes(style: "")
						}
						$(".//span[1]"){
							attributes(class: "_specialTitle")
						}
						$(".//span[2]"){
							attributes(class: "_specialSKU")
						}
					}

				}
			}

			wrap("div", class: "_specialsCarouselView")
		}
		$("./div[@class='_specialsCarouselView']"){
			attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-infinite: "enabled", data-ur-center: "enabled")
			$("./div[@class='_carouselRows']"){
				attributes(data-ur-carousel-component: "scroll_container", style: "width: 3000px !important;")
				insert_after("div", class: "_dots", data-ur-carousel-component: "dots")
				$("./div[@class='_carouselItem']"){
					attributes(data-ur-carousel-component: "item")
				}
			}
		}
	}
}
