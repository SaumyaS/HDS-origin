# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body") {
  add_class("pages_servicesRentalCenters")
  $(".//div[@class='ad_product']"){
  	$("./div"){
  		attributes(class: "_serviceContent")
  	}
  }

  # add your page-specific transformations here
}
