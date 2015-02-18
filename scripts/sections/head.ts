$("./head"){	
	$("./meta[@name='viewport']"){
		attributes(content: "width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0")
	}

	insert("link", rel: "apple-touch-icon", sizes: "72x72", href: asset("images/WhiteCap.png"))
	insert("link", rel: "apple-touch-icon", sizes: "114x114", href: asset("images/WhiteCap.png"))

    $("./script[contains(@src, 'dojo.js')]") {
    	match($secure){
    		with(/true/){
    			insert_after("script", "dojo.config.dojoIframeHistoryUrl = 'https://"+$host+"/wcsstore/dojo15/dojo/resources/iframe_history.html'", type:"text/javascript")
    		}
    		else(){
    			insert_after("script", "dojo.config.dojoIframeHistoryUrl = 'http://"+$host+"/wcsstore/dojo15/dojo/resources/iframe_history.html'", type:"text/javascript")
    		}
    	}
    }

	$("./script"){
		match(text()){
			with(/_gaq/){
				remove()
			}
		}
	}
	$("./script[10]"){

		match($host){
			with(/m.whitecap.com/){
				# Prod
				insert_after("script", type: "text/javascript", "  var _gaq = _gaq || [];
					_gaq.push(['_setAccount', 'UA-10289527-4']);
					_gaq.push(['_trackPageview']);

					(function() {
					var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					})();
				")
			}
			with(/stg-whitecap/){
				# STG
				insert_after("script", type: "text/javascript", "  var _gaq = _gaq || [];
					_gaq.push(['_setAccount', 'UA-10289527-6']);
					_gaq.push(['_trackPageview']);

					(function() {
					var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					})();

				")
			}
			with(/qa-whitecap/){
				# QA
				insert_after("script", type: "text/javascript", "  var _gaq = _gaq || [];
					_gaq.push(['_setAccount', 'UA-10289527-5']);
					_gaq.push(['_trackPageview']);

					(function() {
					var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					})();

				")
			}
		}
		

		

		

	}
}