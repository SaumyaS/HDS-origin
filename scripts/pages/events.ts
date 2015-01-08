# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body") {
  add_class("pages_events")
  $(".//div[@class='main_container']"){
  	add_class("_events")
  	$(".//img"){
  		attributes(width: "", height: "")
  	}
  	$(".//div[@data-mw-id='mw_dump_table3']"){
  		insert("img", src: asset("images/EventLocation-1.png"))
  		insert("img", src: asset("images/EventLocation-2.png"))
  		$("./div"){
  			remove()
  		}
  	}
  }

  # add your page-specific transformations here
}
