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

$("//div[@class='login-box']"){
	$(".//form[@id='Logon']"){
		$("./label"){
			text(){
				replace(/::/, ":")
			}
		}
		$("./label[@for='password']"){
			insert_before("br")
		}
		$(".//a[@id='WC_AccountDisplay_links_1']"){
			insert_after("br")
		}
		$(".//a[@id='WC_AccountDisplay_links_2']"){
			$url = "https://"+$host+"/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&amp;myAcctMain=1&amp;langId=-1&amp;storeId=11301"
			attributes(onclick: "Login2.submitSpecifiedForm(document.Logon,'"+$url+"');return false;")
			$(".."){
				attributes(style: "")
			}
		}
	}
}

$("//*[@class='btn']") {
	add_class("expand")
}