# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_creditAccount")

	$(".//div[@id='WC_ContentAreaESpot_div_1_114001']"){
		$("./h1"){
			remove()
		}
		$("./hr"){
			remove() 
		}

		$(".//div[@id='WC_ContentAreaESpot_div_22_1']"){
			$("./img[@name='Finance']"){
				attributes(class: "_heroBanner")
			}
			$("p[1]"){
				attributes(class: "_backButton", align: "")
				$("./a"){
					add_class("expand")
				}
			}
			$("./p[2]"){
				attributes(class: "_firstPara")
			}
			$("./div[@class='mw_was_table']"){
				attributes(class: "creditTable")
				$("./div"){
					attributes(class: "_creditRows", id: "creditRows" + index())
					$("./div"){
						attributes(class: "_creditContents", id: "creditContents" + index())
						$("./div"){
							$("./div"){
								attributes(class: "_creditItem")
							}
							$("./div[1]"){
								attributes(class: "_creditHeader", style: "")
							}
							$("./div[@class='_creditItem']"){
								$("./div[1]"){
									attributes(class: "_plus")
								}
								$("./div[2]"){
									attributes(class: "_content")
								}
							}
						}
					}
				}
			}
		}
	}
}