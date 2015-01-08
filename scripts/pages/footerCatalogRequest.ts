# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body") {
  add_class("_footerCatalogRequest")
  $(".//div[@class='main_container']"){
		attributes(class: "_footerCatalogRequestPart")
		$(".//div[@class='mw_was_table']"){
			attributes(class: "_form")
			$("./div"){
				$("./div"){
					$("./div"){
						attributes(style: "")
					}
				}
			}
			$("./div[@data-mw-id='mw_dump_tr31']"){
				$(".//input"){
					add_class("btn")
				}
				attributes(class: "_button")
				
			}
		}
		$(".//div[@class='_form'][2]"){
			add_class("image")
			$(".//img"){
				attributes(width: "", height: "")
			}
		}
	}

  # add your page-specific transformations here
}
