$(document).ready(function() {

	$("._fullSite").click(function() {
		document.cookie = 'mw_mobile_site=false' + '; domain=.whitecap.com; path=/';
	});


	$("#image-menu").on('click', function() {
		$("#pers-nav, #pers-nav-mask, #body-content").toggleClass("pers-nav-active");
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

	$("#WC_UnregisteredCheckout_links_4, #WC_UserRegistrationAddForm_links_1, #SubmitButton, #WC_PromotionCodeDisplay_links_1, #Update").on('click',function(){
		setTimeout(function(){ 
			var height = $(":focus").outerHeight();
			var top = $(":focus").offset().top + height;
			var left = $(":focus").offset().left;
			$("#dijit__MasterTooltip_0").css("top", top);
			$("#dijit__MasterTooltip_0").css("left", left);
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

$("#shopcartContainer .cart_check_btn").DOMNodeAppear(function () {

	var empty = $("#shopcartContainer .cart_check_btn").text();
	var full = $("#shopcartContainer .checkout_text").text();
	var quantity = $("#shopcartContainer .checkout_quanitity").text();
	var emptyStr = "cart empty";
	var fullStr = "cart checkout";
	empty = empty.toLowerCase();
	empty = empty.trim();
	full = full.toLowerCase();
	full = full.trim();


	if (empty.localeCompare(emptyStr) === 0) {

		$("._cartStatus").hide();
		$("#image-cart .checkout_quanitity").css("display", "none");
		$("#cart-indicator").css("display", "none");
		$("#cart-indicator").attr("class", "");
		$("#cart-indicator").hide();
		$("#cart-image").attr("class", "Icons-cart-empty");
	}
	else if (full.localeCompare(fullStr) === 0) {

		var $checkout_info = $("#image-cart .checkout_info");

		if($checkout_info.length === 0){
			$("#image-cart .cart_check_btn").append("<div class='checkout_info'><div class='checkout_quanitity'></div><div id='cart_indicator'></div></div>");
		}

		$("#cart-image").attr("class", "Icons-cart-full");
		$("#cart-indicator").css("display", "block");
		$("#cart_indicator").attr("class", "Icons-cart-indicator");
		if(quantity < 100){
			$("#image-cart .checkout_quanitity").text(quantity);
			$("#image-cart .checkout_quanitity").css("font-weight", "none");
			$("#image-cart .checkout_quanitity").css("font-size", "13px");
		}
		else{
			$("#image-cart .checkout_quanitity").text("+");
			$("#image-cart .checkout_quanitity").css("font-weight", "bold");
			$("#image-cart .checkout_quanitity").css("font-size", "19px");
		}

		if(quantity < 10){
			$("#image-cart .checkout_quanitity").css("left", "24px");
			$("#image-cart .checkout_quanitity").css("top", "-35px");
		}
		else if(quantity < 100){
			$("#image-cart .checkout_quanitity").css("left", "20px");
			$("#image-cart .checkout_quanitity").css("top", "-35px");
		}
		else{
			$("#image-cart .checkout_quanitity").css("left", "22px");
			$("#image-cart .checkout_quanitity").css("top", "-37px")
		}


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

function errorMessagePosition(){
	setTimeout(function(){ 
		var height = $(":focus").outerHeight();
			var top = $(":focus").offset().top + height;
			var left = $(":focus").offset().left;
			$("#dijit__MasterTooltip_0").css("top", top);
			$("#dijit__MasterTooltip_0").css("left", left);
	}, 1);
}





