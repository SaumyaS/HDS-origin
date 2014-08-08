# Moves header icons back to the header(s)kw
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".main_container"){
	add_class("_videoPagesResources")
	$(".//a"){
		$removeURLSpace = fetch("@href")
		$removeURLSpace {
			replace(/ /, "")
		}
		attributes(href: $removeURLSpace)
	}

	# Move play button before text
	$(".//img[@class='playButton']"){
		attributes(height: "", width: "")
		$(".."){
			add_class("_playButtonContainer")
			move_to("..","top")
			$(".."){
				add_class("_VideoLinkRows")
			}		
		}
	}
	$(".//div[@class='_VideoLinkRows']"){
		$("./a[2]"){
			add_class("_linkText")
			wrap("div", class: "_linkTextContainer")
		}
	}
}