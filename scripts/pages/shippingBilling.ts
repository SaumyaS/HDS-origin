$("/html/body"){
		attributes(onload: "var is_iPhone = navigator.userAgent.match( /(iPod|iPhone|iPad)/ );
						if(is_iPhone){
							if( window.localStorage ){
							    if( !localStorage.getItem( 'firstLoad' ) )
							    {
							      localStorage[ 'firstLoad' ] = true;
							      window.location.reload();
							    }
							    else
							      localStorage.removeItem( 'firstLoad' );
						  	}
						}")

	$(".//span[@class='breadcrumbs']"){
		remove()
	}
	$$(".main_container"){
		add_class("_shippingBilling")
		$("./a[@id='WC_UnregisteredCheckout_links_4']"){
			add_class("expand")
		}
		$(".//a[@id='shippingBillingPageNext']"){
			add_class("expand")
		}
	

		$("./div[@class='checkout-container']"){
			$("./div[@class='sub-col']/div[@id='willCallShippingAddressForm']/form"){
				$("./input[@name='zipCode']"){
					attributes(type: "tel")
				}
				$("./input[@name='phone1']"){
					attributes(type: "tel")
				}
				add_class("test")
			}
			$("./div[@class='sub-col']/form"){
				$("./input[@name='zipCode']"){
					attributes(type: "tel")
				}
				$("./input[@name='phone1']"){
					attributes(type: "tel")
				}
				add_class("test")
			}
			$("./br"){
				remove()
			}
			$(".//form[@id='PromotionCodeForm']"){
				$("./a"){
					insert_before("br")
				}
			}
			$(".//span[@id='ShiptoBranch']"){
				insert_before("br")
				attributes(data-ur-set: "toggler")
				$("./span[@id='ShiptoBranch_1']"){
					attributes(data-ur-toggler-component: "button")
				}
				$("./span[@id='ShiptoBranch_2']"){
					attributes(style: "", data-ur-toggler-component: "content")
				}
			}
		}
		$(".//span[@id='ShiptoBranch']"){
			insert_before("br")
			attributes(data-ur-set: "toggler")
			$("./span[@id='ShiptoBranch_1']"){
				attributes(data-ur-toggler-component: "button")
			}
			$("./span[@id='ShiptoBranch_2']"){
				attributes(style: "", data-ur-toggler-component: "content")
			}
		}
	}

	$$(".shipping_method_content"){
		
		$("./label[2]"){
			inner(){
				replace(/Shipping:Comments/, "Shipping:<br>Comments")
			}
		}
		$("./div[@id='willCallShippingPhoneNumber']"){
			$("./br"){
				remove()
			}
		}
	}

	$$("#create-account-container"){
		$("./label[2]"){
			inner(){
				replace(/ConfirmPassword:/, "Confirm<br>Password:")
			}
		}
	}
}

# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//div[@class='billing_method']/label"){
	$("../input[4]"){
		attributes(style: "margin-bottom: 10px;")
	}
}

$$("#PaymentForm1"){
	$("./br"){
		remove()
	}

	$(".//label/img"){
		$(".."){
			$(".."){
				attributes(class: "_guestCheckout")
				$("./label[2]"){
					insert_after("br")
				}
			}
			attributes(style:"text-align: center;")
		}
	}
	$("./div[@class='_guestCheckout']"){
		$(".//br[3]"){
			remove()
		}
		$(".//br[2]"){
			remove()
		}
		$(".//br[1]"){
			remove()
		}
	}
	
}

$$(".card_info"){
	$("./div[@id='payment-cc']"){
		$("./br"){
			remove()
		}
		remove_text_nodes()
		$("./label[@for='expire_month_1']"){
			remove_text_nodes()
			insert("span", "Expiration Date: ")
		}
		$("./span[@class='visaCVV2']"){
			$("./span[@id='CVVDetailsSection']"){
				attributes(data-ur-set: "toggler")
				$("./span[@class='order_link']"){
					attributes(data-ur-toggler-component: "button")
					add_class("_CVV_Link")
				}
				$("./span[contains(@id, 'CVVDetails_1_span_2')]"){
					attributes(style: "")
					add_class("_box-shadow")
					attributes(data-ur-toggler-component: "content")
				}
			}
		}
	}
}