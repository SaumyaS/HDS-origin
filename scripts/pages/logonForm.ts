# Moves header icons back to the header
  $$("#ad_17601"){
    move_here("//div[@id='_icons_bar']")
  }

  $("/html/body"){
  	# attributes(onload: "LoginModalDialog.openLoginModalDialog({'storeId':11301,'catalogId':11101,'langId':-1,'MyAccountURL':'https://www.whitecap.com/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&amp;myAcctMain=1&amp;langId=-1&amp;storeId=11301'})")
  	$(".//div[@class='main_container']"){
  		add_class("_logonForm")
  	}
  }

$("//span[@id='ErrorMessageText']"){
	remove()
}

$("//div[@class='login-box']"){
	$(".//h3[contains(text(), Returning)]"){
		$("../form[@id='Logon']"){
			$("./label"){
				text(){
					replace(/::/, ":")
				}
			}
			$("./div"){
				attributes(style: "")
			}
			$("./div[2]"){
				attributes(class: "_userButtons")
				remove_text_nodes()
				$("./a[1]"){
					insert_after("div", "or", class: "_or"){

					}
				}
			}
		}
		$("./label[@for='password']"){
			insert_before("br")
		}
		# $("./input[@id='WC_AccountDisplay_FormInput_logonPassword_In_Logon_1']"){
		# 	attributes(onkeypress: "if(event.keyCode==13) Login2.submitSpecifiedForm(document.Logon, '"+$url+"');")
		# }
		$(".//a[@id='WC_AccountDisplay_links_1']"){
			insert_after("br")
		}
		$(".//a[@id='WC_AccountDisplay_links_2']"){
			$(".."){
				attributes(style: "")
			}
			# move_to("../../../div[@class='col-1']")
		}
	}
	$(".//h2[contains(text(), Login)]"){
		$url = "https://"+$host+"/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&amp;myAcctMain=1&amp;langId=-1&amp;storeId=11301"
		$("../form[@id='Logon']"){
			$("./label"){
			text(){
				replace(/::/, ":")
			}
		}
		$("./label[@for='password']"){
			insert_before("br")
		}
		$("./input[@id='WC_AccountDisplay_FormInput_logonPassword_In_Logon_1']"){
			attributes(onkeypress: "if(event.keyCode==13) Login2.submitSpecifiedForm(document.Logon, '"+$url+"');")
		}
		$(".//a[@id='WC_AccountDisplay_links_1']"){
			insert_after("br")
		}
		$(".//a[@id='WC_AccountDisplay_links_2']"){
			attributes(onclick: "Login2.submitSpecifiedForm(document.Logon,'"+$url+"');return false;")
			$(".."){
				attributes(style: "")
			}
			move_to("../../../div[@class='col-1']")
		}
	}
	# $(".//form[@id='Logon']"){
	# 	$url = "https://"+$host+"/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&amp;myAcctMain=1&amp;langId=-1&amp;storeId=11301"
	# 	$("./label"){
	# 		text(){
	# 			replace(/::/, ":")
	# 		}
	# 	}
	# 	$("./label[@for='password']"){
	# 		insert_before("br")
	# 	}
	# 	$("./input[@id='WC_AccountDisplay_FormInput_logonPassword_In_Logon_1']"){
	# 		attributes(onkeypress: "if(event.keyCode==13) Login2.submitSpecifiedForm(document.Logon, '"+$url+"');")
	# 	}
	# 	$(".//a[@id='WC_AccountDisplay_links_1']"){
	# 		insert_after("br")
	# 	}
	# 	$(".//a[@id='WC_AccountDisplay_links_2']"){
	# 		attributes(onclick: "Login2.submitSpecifiedForm(document.Logon,'"+$url+"');return false;")
	# 		$(".."){
	# 			attributes(style: "")
	# 		}
	# 		move_to("../../../div[@class='col-1']")
	# 	}
	}
}

$("//*[@class='btn']") {
	add_class("expand")
}