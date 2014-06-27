
# Moves header icons back to the header(s)kw
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_resources")
	$(".//img"){
		attributes(width: "", height: "")
	}
	$(".//div[@class='ad_product']/div"){
		add_class("_resourceContainer")
		$("./img[@id='resource_header']"){
			wrap("div", class: "_rHeader"){
				insert_after("div", class: "_VideoResource")
			}
		}
		$("./div[@class='_VideoResource']"){
			move_here("../img[@id='vr_textmain']")
			move_here("../img[@id='vr_imagemain']")
			insert_after("div", class: "_IndustryNews")
			
			$("./img[@id='vr_textmain']"){
				add_class("_textImage")
			}
			$("./img[@id='vr_imagemain']"){
				add_class("_picImage")
			}

		}
		$("./div[@class='_IndustryNews']"){
			move_here("../img[@id='in_imagemain']")
			move_here("../img[@id='in_textmain']")
			insert_after("div", class: "_BlogResource")
			
			$("./img[@id='in_textmain']"){
				add_class("_textImage")
			}
			$("./img[@id='in_imagemain']"){
				add_class("_picImage")
			}
		}
		$("./div[@class='_BlogResource']"){
			move_here("../img[@id='b_textmain']")
			move_here("../img[@id='b_imagemain']")
			insert_after("div", class: "_grayBar")
			
			$("./img[@id='b_textmain']"){
				add_class("_textImage")
			}
			$("./img[@id='b_imagemain']"){
				add_class("_picImage")
			}
		}
		$("./div[@class='_grayBar']"){
			move_here("../img[@id='whtgreybar']")
			insert_after("div", class: "_pcs_title")
		}
		$("./div[@class='_pcs_title']"){
			move_here("../img[@id='pcs_title']")
			insert_after("div", class: "_pcs1")
		}
		$("./div[@class='_pcs1']"){
			move_here("../img[@id='pcs_imagemain1']")
			move_here("../img[@id='pcs_textmain1']")
			insert_after("div", class: "_pcs2")
			
			$("./img[@id='pcs_textmain1']"){
				add_class("_pcs_textImage")
			}
			$("./img[@id='pcs_imagemain1']"){
				add_class("_pcs_picImage")
			}
		}
		$("./div[@class='_pcs2']"){
			move_here("../img[@id='pcs_imagemain2']")
			move_here("../img[@id='pcs_textmain2']")

			$("./img[@id='pcs_textmain2']"){
				add_class("_pcs_textImage")
			}
			$("./img[@id='pcs_imagemain2']"){
				add_class("_pcs_picImage")
			}
		}

	}
}