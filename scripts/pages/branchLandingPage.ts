# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body") {
	$(".//div[@class='main_container']"){
		add_class("pages_branchLandingPage")
		# add your page-specific transformations here
		$(".//h1"){
			remove()
		}
		$(".//hr"){
			remove()
		}
		$(".//div[@class='ad_product']"){
			$("./div[1]"){
				attributes(class: "_BLP-Header")
				$("./div[1]"){
					remove()
				}
				$(".//span"){
					attributes(class: "_branchName")
				}
			}
			$("./div[2]"){
				attributes(class: "_BLP-body")
				$("./div"){
					attributes(class: "_BLP-bodyContent")
					$("./div"){
						attributes(class: "_BLP-bodyContainer")
						$("./div[1]"){
							remove()
						}
						$("./div[1]"){
							remove()
						}
						$("./div[2]"){
							remove()
						}
						$("./div[3]"){
							remove()
						}
						$("./div"){
							attributes(class: "_BLP-row", id: "BLP-row" + index())
							$("./div"){
								attributes(class: "_BLP-rowContiner")
								$("./div"){
									attributes(class: "_BLP-rowItems", id: "BLP-rowItems" + index())
								}
							}
						}
					}
				}

				$(".//div[@id='BLP-row1']"){
					$(".//div[@id='BLP-rowItems1']"){
						$("./p[1]"){
							attributes(class: "_BLP-managerImage")
						}
						$("./p[2]"){
							attributes(class: "_BLP-managerName")

						}
						$("./p[3]"){
							attributes(class: "_BLP-emailManager")
							$("./a"){
								add_class("btn")
							}
						}
					}
					$(".//div[@id='BLP-rowItems2']"){
						attributes(style: "")
						$("./p[1]"){
							attributes(id: "BLP-address", class: "_BLP-storeInfo")
							$("./br[1]"){
								remove()
							}
						}
						$("./p[2]"){
							attributes(id: "BLP-phone", class: "_BLP-storeInfo")
						}
						$("./div"){
							attributes(id: "BLP-hours", class: "_BLP-storeInfo")
							$("./div"){
								attributes(class: "_BLP-storeHours")
							}
							$("./div[1]"){
								attributes(class: "_BLP-hoursHeader")
								$("./div"){
									attributes(class: "_title")
								}
								insert_after("div", class: "_BLP-storeHoursContainer")
							}

							$("./div[@class='_BLP-storeHours']"){
								$("./div[1]"){
									attributes(id: "day", class: "_time", align: "")
								}
								$("./div[2]"){
									attributes(id: "hours", class: "_time", align: "")
								}
							}
							$("./div[@class='_BLP-storeHoursContainer']"){
								move_here("../div[@class='_BLP-storeHours']")
								$("./div[8]"){
									attributes(class: "_getDirectionsBtn")
									$("./div"){
										$("./p[1]"){
											remove()
										}
										$("./p/a"){
											attributes(class: "btn")
											add_class("expand")
											$("./img"){
												remove()
											}
											text(){
												append("Get Directions")
											}
										}
									}
								}
							}
						}
						$("./div[@id='BLP-hours']"){
							attributes(data-ur-set: "toggler")
							$("./div[@class='_BLP-hoursHeader']"){
								attributes(data-ur-toggler-component: "button")
							}
							$("./div[@class='_BLP-storeHoursContainer']"){
								attributes(data-ur-toggler-component: "content")
							}
						}
					}
				}
				$(".//div[@id='BLP-row2']"){
					$(".//div[@id='BLP-rowItems1']"){
						$("./p"){
							$("./strong"){
								attributes(class: "_title")
							}
						}
					}
				}
				$(".//div[@id='BLP-row3']"){
					$(".//div[@class='_BLP-rowItems']"){
						$("./div"){
							attributes(class: "_BLP-contents", id: "BLP-contents" + index())
							$("./div[1]"){
								attributes(class: "_header")
							}
							$("./div[2]"){
								attributes(class: "_item")
							}
						}
					}

					$(".//div[@id='BLP-rowItems1']"){
						$(".//div[@class='_item']"){
							$("./div"){
								attributes(id: "BLP-productInfo" + index(), class: "_BLP-productInfo")
								# $("./p[3]/a"){
								# 	attributes(class: "btn")
								# 	add_class("expand")
								# 	$("./img"){
								# 		remove()
								# 	}
								# 	text(){
								# 		append("Buy Now")
								# 	}
								# }
							}
							$("./div[@id='BLP-productInfo1']"){
								move_to("../div", position("bottom"))
							}
						}
						$("./div[@id='BLP-contents1']"){
							$(".//div[@id='BLP-productInfo1']"){
								$("./p[3]/a"){
									attributes(class: "btn")
									add_class("expand")
									$("./img"){
										remove()
									}
									text(){
										append("Buy Now")
									}
								}
							}
						}
						$("./div[@id='BLP-contents2']"){
							$(".//div[@id='BLP-productInfo1']"){
								$("./p[2]/a"){
									attributes(class: "btn")
									add_class("expand")
									$("./img"){
										remove()
									}
									text(){
										append("Event Details")
									}
								}
							}
								
						}
					}

					$(".//div[@id='BLP-rowItems2']"){
						$("./div[@id='BLP-contents1']"){
							$("./div[@class='_item']"){
								inner_wrap("div", class: "_BLP-carouselContainer")
							}
							$("./div[@class='_item']"){
								attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "lit", data-ur-infinite: "disabled", data-ur-center: "enabled")
								$("./div[@class='_BLP-carouselContainer']"){
									attributes(data-ur-carousel-component: "scroll_container")
									insert_after("div", class: "_dots", data-ur-carousel-component: "dots")
									$("./div"){
										attributes(style: "")
										attributes(data-ur-carousel-component: "item", class: "_carouselItem")
									}
								}
							}
							$("./div[3]"){
								attributes(class: "_BLP-downloadLinks")
								$("./div/a[2]"){
									$("./br"){
										remove()
									}
								}
							}
						}

						$("./div[@id='BLP-contents2']"){
							$("./div[@class='_item']"){
								$("./div[2]"){
									attributes(class: "_BLP-HDSGear", style: "")
									$("./p[2]"){
										attributes(class: "_BLP-HDSGearButton", style: "")
										$("./a"){
											attributes(class: "btn")
											add_class("expand")
											text(){
												append("Shop Now")
											}
											$("./img"){
												remove()
											}
										}
									}
								}
							}
						}
						$("./div[@id='BLP-contents3']"){
							$("./div[@class='_item']"){
								$("./div[2]"){
									attributes(class: "_BLP-mobileDesc", style: "")
									$("./div"){
										attributes(class: "_downloadApp")
										$("./div"){
											attributes(class: "_downloadLinkContainer")
											$("./div"){
												attributes(class: "_downloadLink", style: "")
											}
											$("./div[1]/a"){
												attributes(href: "http://bit.ly/WC-iPhone")
											}
											$("./div[2]/a"){
												attributes(href: "http://bit.ly/WC-Android")
											}
											
										}
									}
								}
							}
						}
					}
				}
			}
		}


	}

  
}
