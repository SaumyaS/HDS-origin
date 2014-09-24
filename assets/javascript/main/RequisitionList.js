

function deselectAllRowM(){
	var totalLineItems = document.getElementById("totalOrderItems").value;
	for(var x=1;x<=totalLineItems;x++) {
	    document.getElementById("chkselected_"+x).value="false";
	    document.getElementById("quantityHidden_" + x).disabled=true;
	}
	var inputs_in_table = document.getElementById("detailsTable").getElementsByTagName("input");
	var inputLength = inputs_in_table.length;
    for(var i=0; i<inputs_in_table.length; i++) {
        if(inputs_in_table[i].type == "checkbox") {
        	if (inputs_in_table[i].checked) {
        			inputs_in_table[i].click();
        	}
        }
    }
    var inputs_out_table = document.getElementById("outsideTable").getElementsByTagName("input");
    for(var i=0; i<inputs_out_table.length; i++) {
        if(inputs_out_table[i].type == "checkbox") {
        	if (inputs_out_table[i].checked) {
        		inputs_out_table[i].click();
        	}
        }
    }
    updateAllListItemsM("unSelectItems","N");
}

function selectAllRowM(){
	var totalLineItems = document.getElementById("totalOrderItems").value;
	for(var i=1;i<=totalLineItems;i++) {
		document.getElementById("chkselected_"+i).value="true";
    	if (document.getElementById("buyable_"+i) != null && document.getElementById("buyable_"+i) != undefined && document.getElementById("buyable_"+i).value=='false'){
    		document.getElementById("checkbox" + i).click();
    		document.getElementById("checkboxOrg" + i).click();
			document.getElementById("checkbox" + i).disabled=true;
			document.getElementById("checkboxOrg" + i).disabled=true;
			document.getElementById("quantity_" + i).disabled=true;
    	}
    	else{
    	if(document.getElementById("totalPrice_" + i) != null && document.getElementById("totalPrice_" + i) != undefined){
    		var numberString = new String(document.getElementById("totalPrice_" + i).innerHTML);


    		if(numberString.indexOf("Price") != -1){
				document.getElementById("checkbox" + i).click();
				document.getElementById("checkboxOrg" + i).click();
				document.getElementById("checkbox" + i).disabled=true;
				document.getElementById("checkboxOrg" + i).disabled=true;
				document.getElementById("quantity_" + i).disabled=true;
			}
			if(numberString.indexOf("Quote") != -1){
				document.getElementById("checkbox" + i).click();
				document.getElementById("checkboxOrg" + i).click();
				document.getElementById("checkbox" + i).disabled=true;
				document.getElementById("checkboxOrg" + i).disabled=true;
				document.getElementById("quantity_" + i).disabled=true;
			}
			else{
				document.getElementById("quantity_" + i).disabled=false;
			}
		}
      }
	  }
	var inputs_in_table = document.getElementById("detailsTable").getElementsByTagName("input");
	var inputLength = inputs_in_table.length;
    for(var i=0; i<inputs_in_table.length; i++) {
        if(inputs_in_table[i].type == "checkbox") {
        	if (!inputs_in_table[i].checked && inputs_in_table[i].disabled != "true") {
        			inputs_in_table[i].click();
        	}
        }
    }
    var inputs_out_table = document.getElementById("outsideTable").getElementsByTagName("input");
    for(var i=0; i<inputs_out_table.length; i++) {
        if(inputs_out_table[i].type == "checkbox") {
        	if (!inputs_out_table[i].checked && inputs_out_table[i].disabled != "true") {
        		inputs_out_table[i].click();
        	}
        }
    }



    updateAllListItemsM("selectItems","Y");
}

function updateAllListItemsM(operation,status) {
	var params = {};
	var totalLineItems = document.getElementById("totalOrderItems").value;
    for(var i=1;i<=totalLineItems;i++) {
    	if (document.getElementById("checkboxOrg" + i).checked && status=='Y'){
			if(document.getElementById("singleOutPrice_" + i).value != null && document.getElementById("singleOutPrice_" + i).value != 0 && document.getElementById("singleOutPrice_" + i).value != ""){
	    			var orderItemId = document.getElementById("orderItemId_"+i).value;
	    			params["orderItemId_"+i] = orderItemId;
	    			params["price_"+i] = RequisitionList.getSingleOutPrice(i);
			}
    	}
    	else{
    		if (document.getElementById("buyable_"+i) != null && document.getElementById("buyable_"+i) != undefined && document.getElementById("buyable_"+i).value=='false'){
    			
    		}
    		else{
    			if (document.getElementById("checkboxOrg" + i).disabled != "true"){
    				var orderItemId = document.getElementById("orderItemId_"+i).value;
		    		params["orderItemId_"+i] = orderItemId;
		    		params["price_"+i] = RequisitionList.getSingleOutPrice(i);
    			}
    			if(document.getElementById("totalPrice_" + i) != null && document.getElementById("totalPrice_" + i) != undefined){
    	    		var numberString = new String(document.getElementById("totalPrice_" + i).innerHTML);
    	    		if(numberString.indexOf("Price") == -1){
			    		var orderItemId = document.getElementById("orderItemId_"+i).value;
			    		params["orderItemId_"+i] = orderItemId;
			    		params["price_"+i] = RequisitionList.getSinglePrice(i);
    				}
    	    		if(numberString.indexOf("Quote") == -1){
			    		var orderItemId = document.getElementById("orderItemId_"+i).value;
			    		params["orderItemId_"+i] = orderItemId;
			    		params["price_"+i] = RequisitionList.getSinglePrice(i);
    				}
    			}
    		}
    	}
    }
    params.status=status;
	params.operation = operation;
	params.orderId = document.getElementById("WC_NonAjaxRequisitionListDetailDisplay_FormInput_0").value;
	if(!submitRequest()){
		return;
	}
	cursor_wait();
	wc.service.invoke("AjaxUpdateQBListCmd", params);
}
