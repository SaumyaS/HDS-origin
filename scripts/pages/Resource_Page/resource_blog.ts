# Moves header icons back to the header(s)kw
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_resource_blog")

	$(".//div[@class='relatedLink_Blog']"){
		$(".//a"){
			$old_URL = fetch("@href")
			$old_URL{
				replace(/mlocal./, "")
				replace(/mqa.qa/, "qa")
				replace(/mstage./, "")
				replace(/m.whitecap.com/, "whitecap.com")
			}
			attributes(href: $old_URL)
		}
	}
}