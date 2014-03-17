
var Login2 = {
	submitSpecifiedForm : function(form,url)
	{
		var parentLoc = window.pageURLWithParams;
		var LogonURL= parentLoc.split( "?" );
		var LogonURLSplited= LogonURL[0].split( "/" );
		if(LogonURLSplited[7]=='LogonForm' ||LogonURLSplited[7]== 'ReLogonFormView')     
		{   
			parentLoc= url;
		}
		form.URL.value = parentLoc;
		form.reLogonURL.value = parentLoc;
		form.errorViewName.value = "";
		form.logonId.value = form.logonId.value.toLowerCase(); //Defect #579 : Fix
		form.submit();
	}
};