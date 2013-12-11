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
	// $("div.color-bg:empty").remove();

	$(".color-bg").each(function() {
	    var $this = $(this);
	    if($this.html().replace(/\s|&nbsp;/g, '').length == 0){
	    	console.log("test");
	        $this.remove();
	    }
	    console.log("length: " + $this.html().length);
	    if($this.html().length < 300){
	    	console.log("test2");
	    	$this.remove();
	    }
	});

	$("div").filter(function(){
	    return $.trim(this.innerHTML) === "&nbsp;";
	}).remove();
	// $("#WC_UserRegistrationAddForm_links_1").on('click',function(){
	// 	var offset = $(".dijitTooltipLeft").offset().top;
	// 	$(".dijitTooltipLeft").css("-webkit-transform", "translateY(-" + offset + "px)");
	// });

	$("#WC_UserRegistrationAddForm_links_1").on('click',function(){
		var height = $(":focus").outerHeight();
		var top = $(":focus").offset().top + height;
		$(".dijitTooltip.dijitTooltipLeft").css("top", top);
	});

	$("#WC_UnregisteredCheckout_links_4").on('click',function(){
		setTimeout(function(){ 
			var height = $(":focus").outerHeight();
			var top = $(":focus").offset().top + height;
			$(".dijitTooltip.dijitTooltipLeft").css("top", top);
		}, 1000);
	});

	$("#SubmitButton").on('click',function(){
		setTimeout(function(){ 
			var height = $(":focus").outerHeight();
			var top = $(":focus").offset().top + height;
			$(".dijitTooltip.dijitTooltipLeft").css("top", top);
		}, 1000);
		
		// $(".dijitTooltip.dijitTooltipLeft").css("left", left);
	});
	

		// $(".dijitTooltipLeft").attr("class", "dijitTooltipBottom");

	// $("#WC_UserRegistrationAddForm_links_1").on('click',function(){
	// 	$(".dijitTooltipRight").hide();
	// 	$(".dijitTooltipLeft").hide();

	// 	if($("input,text").is("*:focus")){
	// 		console.log("this was run");
	// 		alert("Fill out required field correctly.");
	// 	}
	// });

	// $("#WC_UnregisteredCheckout_links_4").on('click', function(){
	// 	console.log("this also happened");
	// 	// $(".dijitTooltipRight").attr("class", "dijitTooltipLeft");
	// 	$(".dijitTooltipLeft").hide();
	// 	$(".dijitTooltipRight").hide();
	// 	$(".dijitTooltip").hide();
		

	// 	console.log("this also happened again");

		
	// });

	// if($("input,text").is("*:focus")){
	// 	console.log("this was run");
	// 	alert("Fill out required field correctly.");
	// }


	// $("input").one('focus', function(){
		// 	console.log("this happened");
			
		// 	// alert("Fill out required field.");
		// 	// $(".dijitTooltipLeft").attr("style", "top: 0px !important; margin-top:-100px !important;");
		// });

	// $("input").on('formError', function(){
	// 	alert("test");
	// });


	// $(".dijitTooltip").bind("DOMSubtreeModified", function(){
	// 	alert("test");
	// })


	

	// $(".dijitTooltipLeft").click(function(){
	// 	console.log("i was clicked");
	// 	$(this).attr("class", "dijitTooltipRight");
	// });

	// $("#WC_UserRegistrationAddForm_links_1").click(function(){
	// 	$("input").blur();
	// });
	

	// $("input").on('click', function(){
	// 	$(".dijitTooltipLeft").attr("class", "dijitTooltipRight");
	// });

	// $("input").keydown(function(){
	// 	$(".dijitTooltipLeft").hide();
	// });



});

$("#createdBy").DOMNodeAppear(function() {
	Ur.setup("._togglerContainer");
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

$("._companyInfoContainer").DOMNodeAppear(function() {
	Ur.setup("._companyInfoContainer");
});

$("._orderDetails").DOMNodeAppear(function() {
	Ur.setup("._togglerBillContainer");
	Ur.setup("._togglerShipContainer");
	Ur.setup("._orderSummaryContainer");
});

$(".highslide-container").DOMNodeAppear(function(){
	$('.highslide-container').hide();
});

$("#mainTabContainer_tablist").DOMNodeAppear(function(){
	$('#mainTabContainer_tablist').hide();
});
