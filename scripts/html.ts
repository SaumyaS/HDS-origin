# HTML Transformations go here

$("/html") {
	
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

	# @import sections/header.ts
	@import sections/head.ts
	@import sections/header.ts
	@import sections/nav.ts
	@import sections/footer.ts
	

	@import sections/pagination.ts

	@import mappings.ts
}

