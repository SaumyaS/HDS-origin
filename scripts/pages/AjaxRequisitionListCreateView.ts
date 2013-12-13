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
						attributes(class: "color-bg")
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
								$("./div[2]"){
									attributes(class: "_expand")
									$("./div[1]"){
										attributes(style: "", class: "_toggle")
										$(".//img"){
											attributes(src: asset("images/img/plus.png"))
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
										$(".//img"){
											attributes(src: asset("images/img/minus.png"))
										}
									}
									$("./div[2]"){
										attributes(style: "", class: "_content")
										$("./div"){
											attributes(style: "")
										}
										$("./br[1]"){
											remove()
										}
									}
								}
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
							insert_top("label", class: "_quantityTitle", "Quantity")
						}
						$("./div[5]"){
							wrap("div"){
								attributes(class: "_manufacturerContainer")
								insert_top("label", class: "_manufacturerTitle", "Manufacturer")
							}
						}
						$("./div[6]"){
							attributes(class: "_imgContainer")
							insert_top("label", class: "_imgTitle", "Image")
						}
						$("./div[7]"){
							attributes(class: "_priceContainer")
							insert_top("label", class: "_priceTitle", "Price")
						}
						$("./div[8]"){
							attributes(class: "_totalPriceContainer")
							insert_top("label", class: "_totalPriceTitle", "Total Price")
						}
						$("./div[@class='mw_was_td']"){
							$(".."){
								attributes(class: "test")
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
				}
			}
		}
	}
}