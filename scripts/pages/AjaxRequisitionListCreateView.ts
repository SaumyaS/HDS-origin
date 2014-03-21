# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_reqListCreateView")

	$(".//div[@id='shopping-list']"){
		$("./div[@class='mw_was_table']/div[@class='mw_was_tbody']"){
			$("./div[1]"){
				$("./div[1]"){
					add_class("_poNumber")
				}
				$("./div[2]"){
					add_class("_selectOption")
					$(".//div[contains(@class, 'mw_was_tbody')]"){
						$("./div[1]"){
							attributes(class: "_option")
							$("./div[1]"){
								attributes(class: "_selectTitle")
							}
							$("./div[2]"){
								attributes(class: "_select", id: "willCall")
							}
							$("./div[3]"){
								attributes(class: "_select", id: "delivery")
							}
						}
						$("./div[2]"){
							attributes(class: "_address")
							# text(){
							# 	replace(//)
							# }
						}
					}
				}
				
				$("./div[3]"){
					add_class("_contactName")
				}
			}
			$("./div[2]"){
				add_class("_comments")
			}
		}
		$("./div[@id='RequisitionListDetailTableDisplay_Widget']"){
			$("./div[@id='shoppingdetail-note']"){
				$("./a"){
					add_class("expand")
					attributes(style: "")
				}
			}
			$("./div[@id='detailsTable']"){
				$("./div[@class='mw_was_tbody']"){
					$("./div[1]"){
						attributes(class: "_title")
						remove()
					}
					$("./div[contains(@class,'mw_was_tr')]"){
						# attributes(class: "_items")
						attributes(class: "color-bg disable")
						$("./div[1]/input"){
							$(".."){
								attributes(class: "_checkboxContainer")
							}
							attributes(class: "_checkbox")
							# insert_before("label", class: "_checkboxTitle", "Select")
						}
						$("./div[2]/div[1]"){
							$(".."){
								attributes(class: "_productContainer")
								
								# //*[@id="expand1"]/div[2]
								$("./div[2]"){
									attributes(class: "_expand")
									$("./div[1]"){
										attributes(style: "", class: "_toggle")

										$(".//img"){
											attributes(src: asset("images/img/plus.png"))
										}
										$("./a"){
											insert("span", class:"_description", "Description")
										}
									}
									$("./div[2]"){
										attributes(style: "", class: "_content")
									}
								}
								$("./div[3]"){
									attributes(class: "_collaspe")
									$("./div[1]"){
										attributes(style: "", class: "_toggle")
										$("./a"){
											insert("span", class:"_description", "Description")
										}
										$(".//img"){
											attributes(src: asset("images/img/minus.png"))
										}
									}
									$("./div[2]"){
										remove_text_nodes()
										attributes(style: "", class: "_content")
										$("./br"){
											remove()
										}
										$("./div"){
											attributes(style: "")
										}
										$("./br[1]"){
											remove()
										}
									}
								}
								move_here("./div[@class='_expand']/div[2]", "top")
							}
							attributes(class: "_productName")

							# insert_before("label", class: "_productNameTitle", "Name")
							
						}
						$("./div[3]"){
							attributes(class: "_skuContainer")
							# insert_top("label", class: "_skuTitle", "SKU")
						}
						$("./div[4]"){
							attributes(class: "_quantityContainer")
							insert_top("label", class: "_quantityTitle", "QTY")
							$("./div/input[contains(@id, 'quantity')]"){
								attributes(type: "tel", class: "_quantity")
							}

						}
						$("./div[5]"){
							wrap("div"){
								attributes(class: "_manufacturerContainer")
								insert_top("label", class: "_manufacturerTitle", "Manufacturer")
							}
						}
						$("./div[6]"){
							attributes(class: "_imgContainer")
							# Reduce image size, optimize
							$(".//img") {
								perf.optimize_image("src") {
									# Change image formats: jpeg, png, and webp!
									perf.format("jpeg")

									# # Resize the pixels
									perf.width("52")
									perf.height("52")

									# Change the image quality: 0 - 100
									# This affects the image resolution
									perf.quality("100")
								}
							}
							# insert_top("label", class: "_imgTitle", "Image")
						}
						$("./div[7]"){
							attributes(class: "_priceContainer")
							insert_top("label", class: "_priceTitle", "Price")
						}
						$("./div[8]"){
							attributes(class: "_totalPriceContainer")
							insert_top("label", class: "_totalPriceTitle", "Total Price")
							insert_after("div", class: "_priceHolder")
						}
						$("./div[@class='_priceHolder']"){
							move_here("../div[@class='_priceContainer']")
							move_here("../div[@class='_totalPriceContainer']")
							$(".//span"){
								attributes(style: "")
							}
						}
						$("./div[@class='mw_was_td']"){
							$(".."){
								attributes(class: "_bottom")
							}
							$("./a[1]"){
								attributes(id: "SubmitButton")
							}
							$("./a"){
								attributes(style: "")
								add_class("expand")
								$(".."){
									attributes(class: "_buttons")
								}
							}
							$("./span"){
								attributes(style: "")
							}

						}




					}
					$("./div[contains(@id, 'zrowB')]"){
						remove()
					}
					$("./div[contains(@id, 'zrow')]"){
						$(".//br"){
							remove()
						}
						$("./div[contains(@class, 'product-discount')]"){
							move_to("../preceding::div[1]")
						}
						attributes(class: "")
						$("./div[@class='_quantityContainer']"){
							remove()
						}
					}

					$("./div[contains(@class, 'color-bg')]"){
						insert_top("div", class: "_bg_top"){
							move_here("../div[@class='_checkboxContainer']")
							move_here("../div[@class='_imgContainer']")
							move_here("../div[@class='_productContainer']/div[@class='_content']")
							move_here("../div[@class='_skuContainer']")
						}
						$(".//div[contains(@class, 'product-discount')]"){
							move_to("../../../../div[@class='_priceHolder']")
							insert_before("br")
							insert_before("br")
						}
					}
				}
			}
		}
	}
}

$("/html"){
	$("./body"){
		move_here("//img[contains(@src, 'expand_icon.gif')]", "bottom")
	}
}