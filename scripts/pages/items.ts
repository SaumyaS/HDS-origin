$("/html"){
		# Moves header icons back to the header
	$$("#ad_17601"){
		move_here("//div[@id='_icons_bar']")
	}

	$(".//div[contains(@class, 'main_container')]"){
		$(".//div[@class='brandname_breadcrumbs']"){
			$("./ul"){
				$("./li[1]"){
					add_class("_itemInfo")
				}
				$("./li[3]"){
					add_class("_itemInfo")
				}
			}
		}
	}

	$$(".product_social_icons"){
		remove()
	}

	$$(".main-col"){
		# Defect 2888 - Add Tabs to PDP - Start
		$("./div[@class='specs']"){
			$("./div[@class='tabs']"){
				# Hide Tab Logic
				$("./span[3]"){
					$id_tab = fetch("@id")
					log($id_tab)

					match($id_tab){
						not(/RelatedInfo/){
							$("//div[@class='info']/div[@id='product-related-information']"){
								attribute("class","_hideRI")
							}
						}
					}
				}
				remove()
			}

		}
		# Defect 2888 - Add Tabs to PDP - End

		$("./div[@class='product-info']"){
			$("./p/select[@id='shipAddressDropDown']"){

			}
			$("./div/h1"){
				match(text()){

					with(/Your/){
						$(".."){
							add_class("_discount-Price")
						}
					}
				}
			}
			$("./h1"){
				match(text()){
					with(/Call/){
						add_class("_callForPrice")
					}
					with(/800/){
						add_class("_phone")
					}
				}
			}
			$("./hr[3]"){
				remove()
			}
			$("./div[@class='sub-col']/a"){
				$(".."){
					remove()
				}
			}
		}

		$("./div[@class='gallery']"){
			insert_before("div", class: "_mainInfo")

		}
		$("./div[@class='_mainInfo']"){
			move_here("../div[@class='gallery']")
			insert_after("div", class: "_item-info")
			insert_before("div", class: "_top-info")
		}
		$("./div[@class='_item-info']"){
			insert_top("div", class: "_info-title", "Product Info")
			move_here("../div[@class='product-info']/div[@class='_discount-Price']")
			move_here("../div[@class='product-info']/h1[@class='_callForPrice']")
			move_here("../div[@class='product-info']/h1[@class='_phone']")
			move_here("../div[@class='product-info']/span[1]")
			move_here("../div[@class='product-info']/h4[1]")
			move_here("../div[@class='product-info']/h2[1]")
			move_here("../div[@class='product-info']/label[1]")
			move_here("../div[@class='product-info']/input[@type='text']")
			insert("br")
			move_here("../div[@class='product-info']/a[@id='productPageAdd2Cart']")
		}

		$("./div[@class='_top-info']"){
			move_here("../div[@class='_mainInfo']")
			move_here("../div[@class='_item-info']")
			insert_after("div", class: "_product-info"){

				# Defect 2888 - Add Tabs to PDP - Start
				move_here("../div[@class='specs']/div[@class='info']/div[@id='product-description']")


				move_here("../div[@class='specs']/div[@class='info']/div[@id='product-related-information']"){
					wrap("div", class: "_relatedInfoTab"){

						# Hide Tab Logic
						$("./div[@id='product-related-information']"){
							$RI_class = fetch("@class")
							match($RI_class){
								with(/_hideRI/){
									$(".."){
										remove()
									}
								}
							}
						}
						attributes(data-ur-set: "toggler")
						insert_top("h2", "Related Information")
						$("./h2"){
							attributes(data-ur-toggler-component: "button", data-ur-id: "4")
						}
						$("./div[@id='product-related-information']"){
							attributes(data-ur-toggler-component: "content", data-ur-id: "4")
						}
					}
					attributes(style: "")
				}
				# Defect 2888 - Add Tabs to PDP - End
			}
		}
	}

	$$(".sidebar"){
		$("./div[@class='sidebar-product']/p[2]/span[@class='price']"){
			insert_after("br")
		}
	}

	$$("#product-description"){
		attribute("data-ur-set", "toggler")
		$("./h2[1]"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "1")
		}

		$("./h2[2]"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "2")
		}
		$("./h2[3]"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "3")
		}

		$("./p"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "1")
		}
		$("./ul[1]"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "2")
		}
		$("./ul[2]"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "3")
		}
	}

	$$(".product-info"){
		inner(){
			replace(/Pricing/, "Pricing <br>")
		}
		$("./a[@id='login_modal_link']"){
			attributes(href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301")
		}
		$("./div[@class='sub-col']"){
			$("./label"){
				insert_after("br")
			}
		}
	}
}