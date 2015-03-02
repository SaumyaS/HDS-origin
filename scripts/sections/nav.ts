$$("body"){
	$(".//div[@class='nav_container']"){
		$("./ul[@class='nav-primary']"){

			$("./li"){
				attributes(class: "_navButtons")
				$("./a"){
					attributes(style: "")
				}
			}
			$("./li[1]"){
				attributes(class: "_navToggler", id: "categoryToggler")
				insert_top("div", class: "_topCatContainer"){
					move_here("../div[@class='nav_cat']")
					move_here("../ul[@class='subnav']")
				}
				$("./div[@class='_topCatContainer']"){
					attributes(data-ur-set: "toggler")
					$("./div[@class='nav_cat']"){
						attributes(data-ur-toggler-component: "button")
						$("./a"){
							text(){
								clear()
							}
							insert("span", class: "_shopByCat", "Shop by Category")
						}
					}
					$("./ul[@class='subnav']"){
						attributes(data-ur-toggler-component: "content")
						$("./li"){
							$("./div"){
								attributes(id: "subn" + index())
							}
						}
					}

				}
			}
			$("./li[2]"){
				remove()
			}
			$("./li[4]"){
				insert_after("li", class: "_navButtons"){
					insert("a", href: "/webapp/wcs/stores/servlet/wc/navigation-help", "Help")
				}
			}
			$("./li[6]"){
				attributes(class: "_navToggler", id: "quickOrderToggler")
				$("./button"){
					attributes(style: "")
					remove()
				}
				insert_top("div", class: "_QObutton", "Quick Order")

				move_here("../../div[@id='sections_panel']")

				# Create Toggler
				attributes(data-ur-set: "toggler")
				$("./div[@class='_QObutton']"){
					attributes(data-ur-toggler-component: "button")
				}
				$("./div[@id='sections_panel']"){
					attributes(data-ur-toggler-component: "content")
				}

				$("./div[@id='sections_panel']"){
					$(".//div[@class='quick_order_wrapper']"){
						insert_top("div", class: "_qoptoolTipContainer"){
							move_here("../div[@class='qo_title']")
							move_here("../a")
							insert("div", class: "_qoptoolTipInst", "The Quick Order Pad is an easy way to fill your cart with online items. Simply enter your Item, SKU, or Part Number, enter a Quantity, then Add to Cart.")
						}
						$("./div[@class='_qoptoolTipContainer']"){
							attributes(data-ur-set: "tabs", data-ur-closeable: "true")
							$("./a"){
								attributes(class: "_qoptoolTip", data-ur-tabs-component: "button", data-ur-tab-id: "test")
							}
							$("./div[@class='_qoptoolTipInst']"){
								attributes(data-ur-tabs-component: "content", data-ur-tab-id: "test")
							}
							

							
						}
					}
					$(".//div[contains(@class,'qo-table')]"){
						$("./div[1]"){
							attributes(class: "_qopHeader")
							$("./div"){
								attributes(class: "_qopTitleContainer")
								$("./div[1]"){
									attributes(class: "_qopItem")
								}
								$("./div[2]"){
									attributes(class: "_qopQTY")
								}
							}
						}
					}
					$(".//div[@class='btn_addtocart']"){
						$("./a"){
							attributes(style: "")
						}
					}
				}

			}

		}
	}
}