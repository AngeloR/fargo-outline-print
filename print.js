var FargoOutlinePrint = {
	html: {},
	css: {},
	getRawText: function(node) {
		// get the text of a node and all its children
	},
	init: function() {
		// load any html views
		// laod the css
		
		// insert the print icon
		$('#idFileMenu').find('.divider').eq(0).before('<li><a href="#">Print</a></li>');
	}
};

FargoOutlinePrint.init();
