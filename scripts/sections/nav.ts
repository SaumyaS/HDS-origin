$$("body"){
	$(".//div[@id='main_content_wrapper']"){
		$("./div[@class='nav_container']"){
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
				}

			}
		}
	}
}