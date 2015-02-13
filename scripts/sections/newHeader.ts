$$("#ad_17601"){
	$("./img"){
		attributes(style: "max-width: 74%;padding-left: 10px;margin-top: -6px;margin-bottom: -11px;")
	}
}

$$("#requisition_list_popup_main_div"){
  	attributes(style: "display:none;")
}

$$("body"){
	table_dump(".//table")
}



$("/html"){
	remove(".//script[contains(@src,'jquery.dataTables.min.js')]")

	$(".//div[@class='header_wrapper']"){
		insert_after("div", class: "_mainContainer")
	}
	$(".."){
		add_class("test")
		$("./div[@class='_mainContainer']"){
			move_here("../div[@class='header_wrapper']/div[@id='main_content_wrapper']")
			move_here("../div[@class='header_wrapper']/div[@id='right_nav']")
		}
	}
}