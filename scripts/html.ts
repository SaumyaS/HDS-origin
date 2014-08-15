# HTML Transformations go here

$("/html") {
	match($host){
		with(/qa-whitecap/){
			match($path){
				with(/Branch_114/){}
        with(/Event-Registration/){}
        with(/Events/){}
        with(/Services-Rental-Centers/){}
        with(/Services-Rebar-Fabrication/){}
        with(/Services-Tool-Repair/){}
        with(/Trader_Downloads/){}
        with(/Footer_Catalog_Request/){}
        with(/LP-Mobile-Site/){}

				else(){
					rewrite_links()
					absolutize_srcs()


					# Add the mobile meta tags
					clean_mobile_meta_tags()


					# Needed to begin mobilizing
					remove_all_styles()
					remove_html_comments()

					# Late load all the images on the site
					#lateload()

					add_assets()

					@import sections/header.ts
					@import sections/footer.ts

					@import sections/pagination.ts

					@import mappings.ts
				}
			}
		}
		else(){
			rewrite_links()
			absolutize_srcs()


			# Add the mobile meta tags
			clean_mobile_meta_tags()


			# Needed to begin mobilizing
			remove_all_styles()
			remove_html_comments()

			# Late load all the images on the site
			#lateload()

			add_assets()

			@import sections/header.ts
			@import sections/footer.ts

			@import sections/pagination.ts

			@import mappings.ts
		}
	}
}

