# Moves header icons back to the header
  $$("#ad_17601"){
    move_here("//div[@id='_icons_bar']")
  }


$("/html"){
	$(".//div[contains(@class, 'order-confirm')]"){
		add_class("_reviewPage")
		$("./div[@id='order-summary']"){
			$(".//div[contains(@class, 'order-summary')]"){
				$("./div[@class='mw_was_tbody']"){
					$("./div[contains(@class, 'order-product-info')]"){
						attributes(class: "order-product-info")
						$("./div[2]"){
							add_class("_colTitle")
						}
						$("./div[3]"){
							add_class("_colWeight")
							add_class("_margin-bottom")
						}
						$("./div[4]"){
							add_class("_colQuantity")
							wrap("div"){
								insert_top("label", "Quantity:", class: "_quantity")
								attributes(class: "_Quantity")
							}
						}
						$("./div[5]"){
							add_class("_colEach")
								wrap("div"){
								attribute("class", "_eachDiv")
								insert_bottom("div", "Each: ", class: "_each")
							}
						}
						$("./div[6]"){
							add_class("_colTotal")
							wrap("div"){
								attribute("class", "_totalDiv")
								insert_bottom("div", "Total: ", class: "_total")

							}
						}
					}
					$("./div[contains(@class, 'order-product-last')]"){
						attributes(class: "order-product-last")
						$("./div[1]"){
							add_class("_sku")
						}
						$("./div[2]"){
							add_class("_delete")
						}
						$("./div[3]"){
							add_class("_removeSB")
						}
						$("./div[4]"){
							add_class("_delete")
						}
						$("./div[5]"){
							add_class("_delete")
						}
						$("./div[6]"){
							add_class("_delete")
						}
					}
				}
			}
			$("./div[@id='order-total']"){
				$("./div"){
					$("./label"){
						insert_before("br")
					}
					$("./font"){
						insert_before("br")
					}
					$("./br[1]"){
						remove()
					}
				}
			}
			$("./p"){
				$("./a"){
					add_class("expand")
				}
			}

		}
	}
}
