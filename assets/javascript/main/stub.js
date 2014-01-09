$(document).ready(function() {

	$("#image-menu").on('click', function() {
		$("#pers-nav, #pers-nav-mask, #body-content").toggleClass("pers-nav-active");
	});

	$('.search-sidebar:contains("No further refinement")').slideUp("fast");

	$(".tabStrip-disabled").hide();

	$("#PreviouslyProcessed1").on('click',function(){
		$("._prev").show();
		$("._waiting").hide();
	});

	// $("#sessionTimeoutNotifyDiv").attr("style", "width: 800px;height: 250px;display: none;");

	$("#trackOrderStatus").on('click',function(){
		$("._prev").show();
		$("._waiting").hide();
	});

	$("#WaitingForApproval1").on('click',function(){
		$("._prev").hide();
		$("._waiting").show();
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

	// $("#WC_UnregisteredCheckout_links_4").on('click', function(){
	// 	setTimeout(function(){
	// 		$("input[value=Discover]:radio").checked=true;
	// 	}, 20000);
	// });

	$("input").keydown(function(){
		$("#dijit__MasterTooltip_0").hide();
	});

	$("#WC_ShippingAddressSelectSingle_link_2, #WC_ShippingAddressSelectSingle_link_1").on('click', function(){
		$("#shippingBillingPageNext").removeClass('expand');
	});
	// $("#WC_UnregisteredCheckout_links_4, #WC_UserRegistrationAddForm_links_1, #SubmitButton, #WC_PromotionCodeDisplay_links_1").on('click',function(){
	// 	if ($("input:radio[name='payMethodIdRadio'][value='VISA']").is(':checked')){
	// 		setTimeout(function(){
	// 			$("input:radio[name='payMethodIdRadio'][value='Discover']").click();
	// 			setTimeout(function(){
	// 				$("input:radio[name='payMethodIdRadio'][value='VISA']").click();
	// 			}, 5000);
	// 		}, 10000);
			
	// 	}
	// 	else {
	// 		$("input:radio[name='payMethodIdRadio'][value='VISA']").click();
	// 	}
	// });

});

$(".cart_check_btn").DOMNodeAppear(function () {

	var str = $(".cart_check_btn").text();
	var empty = "cart empty";
	var full = "cart checkout";
	str = str.toLowerCase();
	str = str.trim();

	if (str.localeCompare(empty) === 0) {
		$("#cart-image").attr("class", "Icons-cart-empty");
	}
	if (str.localeCompare(full) === 0) {
		$("#cart-image").attr("class", "Icons-cart-full");
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


function errorMessagePosition(){
	setTimeout(function(){ 
		var height = $(":focus").outerHeight();
			var top = $(":focus").offset().top + height;
			var left = $(":focus").offset().left;
			$("#dijit__MasterTooltip_0").css("top", top);
			$("#dijit__MasterTooltip_0").css("left", left);
	}, 1);
}



