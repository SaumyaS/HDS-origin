$(document).ready(function() {

	$("._fullSite").click(function() {
		document.cookie = 'mw_mobile_site=false' + '; domain=.whitecap.com; path=/';
	});


	$("#_menuContainer").on('click', function() {
		$("#pers-nav, #pers-nav-mask, #body-content").toggleClass("pers-nav-active");
	});

	$("#_userContainer").on('click', function() {
		$("._blkBG").toggleClass("_blkBG-active");
		$("._logonTest").toggleClass("_logonTest-active");
	});

	$("._blkBG").on('click', function(){
		$("._blkBG").removeClass("_blkBG-active");
		$("._logonTest").removeClass("_logonTest-active");
	});

	$('.search-sidebar:contains("No further refinement")').slideUp("fast");

	$(".tabStrip-disabled").hide();

	$("#PreviouslyProcessed1").on('click',function(){
		$("._prev").show();
		$("._waiting").hide();
	});

	$("#trackOrderStatus").on('click',function(){
		$("._prev").show();
		$("._waiting").hide();
	});

	$("#WaitingForApproval1").on('click',function(){
		$("._prev").hide();
		$("._waiting").show();
	});

	$("._quantityInput").on('click', function(){
		this.focus();
		this.setSelectionRange(0,999);
	});

	$(".category-item:empty").remove();
	$("._industries:empty").remove();

	$(".color-bg").each(function() {
	    var $this = $(this);
	    if($this.html().replace(/\s|&nbsp;/g, '').length == 0){
	        $this.remove();
	    }
	    if($this.html().length < 300){
	    	$this.remove();
	    }
	});

	$("div").filter(function(){
	    return $.trim($(this).html()) === "&nbsp;";
	}).remove();

	$("#WC_UnregisteredCheckout_links_4, #WC_UserRegistrationAddForm_links_1, #_SubmitButton, #SubmitButton, #WC_PromotionCodeDisplay_links_1, #Update").on('click',function(){
		setTimeout(function(){ 
			var focusedElement = document.activeElement;

			var height = $(focusedElement).outerHeight();

			var top = $(focusedElement).offset().top + height;
			$("#dijit__MasterTooltip_0").css("top", top);
			var focusedElement = document.activeElement;
			
			// Check for iOS8
			var isIOS8 = function() {
			  var deviceAgent = navigator.userAgent.toLowerCase();
			  return /(iphone|ipod|ipad).* os 8_/.test(deviceAgent);
			}

			if(isIOS8()){
				$('html,body').animate({
					scrollTop: $(focusedElement).offset().top - 100
				}, 500);
			}
			
		}, 200);



	});

	$("input").keydown(function(){
		$("#dijit__MasterTooltip_0").hide();
	});

	$("#WC_ShippingAddressSelectSingle_link_2, #WC_ShippingAddressSelectSingle_link_1").on('click', function(){
		$("#shippingBillingPageNext").removeClass('expand');
	});

	$("._quantity").click(function(){
		var input = this;
		input.focus();
		input.setSelectionRange(0,999);
	})

	$("input").click(function(){
		$("[id^=zrow]").attr("class", "");
	});
});

$(".shoppingcart_rect_full").DOMNodeAppear(function(){
	var quantity = $(".shoppingcart_wrapper #qtyInputHolder").val();

	if(quantity >= 100){
		$(".shoppingcart_wrapper ._numberSKUs").text("+99");
		$(".shoppingcart_wrapper ._numberSKUs").css("font-size", "13px");
		$(".shoppingcart_rect_full").css("left", "3px");
	}
	else{
		$(".shoppingcart_wrapper ._numberSKUs").text(quantity);
		$(".shoppingcart_wrapper ._numberSKUs").css("font-size", "13px");
		$(".shoppingcart_rect_full").css("left", "9px");
	}
});



$(".close").DOMNodeAppear(function(){
	$('.close').hide();
});

$("#free_gifts_popup_div_6").DOMNodeAppear(function(){
	$('#free_gifts_popup_div_6').hide();
});

$(".closeText").DOMNodeAppear(function(){
	$('.closeText').hide();
});

$("#CVVDetailsSection").DOMNodeAppear(function() {
	Ur.setup("#CVVDetailsSection");
});

$("._ajaxCalledAccount").DOMNodeAppear(function() {
	Ur.setup("._togglerInitialize");
});

$("._companyInfoContainer2").DOMNodeAppear(function() {
	Ur.setup("._companyInfoContainer2");
});

$("._orderDetails").DOMNodeAppear(function() {
	Ur.setup("._orderSummaryContainer");
});

// $("._orderSummaryContainer").DOMNodeAppear(function() {
// 	Ur.setup("._orderSummaryContainer");
// });

$("._orderDetails").DOMNodeAppear(function() {
	Ur.setup("[id^=collapse]");
});

$(".highslide-container").DOMNodeAppear(function(){
	$('.highslide-container').hide();
});

$("#mainTabContainer_tablist").DOMNodeAppear(function(){
	$('#mainTabContainer_tablist').hide();
});

$("#errormsgDialog_title").DOMNodeAppear(function(){
	$('#errormsgDialog_title').hide();
});
$("#dijit_DialogUnderlay_0").DOMNodeAppear(function(){
	$("#dijit_DialogUnderlay_0").hide();
});
$("#quick_cart_container").DOMNodeAppear(function(){
	$("#quick_cart_container").hide();
});

$("#progress_bar").DOMNodeAppear(function(){
	$("#progress_bar").attr("style", "display:none !important;");
});

// $("#progress_bar").DOMNodeAppear(function(){
// 	$("#progress_bar").fadeOut('slow').delay(4000);
// 	$("#progress_bar").attr("style", "position: fixed; top: 45%; left: 45%; z-index: 100;");

// });

$("._colQuantity").DOMNodeAppear(function(){
	var value = $('[id*=freeGift_qty]').val();

	if(value === "-1"){
		$('[id*=freeGift_qty]').attr("style", "display:none !important;");
	}
});

function errorMessagePosition(){
	setTimeout(function(){ 
		var height = $(":focus").outerHeight();
			var top = $(":focus").offset().top + height;
			var left = $(":focus").offset().left;
			$("#dijit__MasterTooltip_0").css("top", top);
			$("#dijit__MasterTooltip_0").css("left", left);
	}, 1);
}
