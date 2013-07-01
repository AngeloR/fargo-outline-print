var FargoOutlinePrint = {
	html: {},
	css: {},
	parse: function(html) {
		// stop the stuff from being editable
		html = html.replace('contenteditable="true"','');

		return html;
	},
	print: function() {
		// get the selected node
		var tab = getActiveTab();
		var selectedNode = $('#' + tab.idOutlineContainer).find('.concord-cursor.selected');

		var output = FargoOutlinePrint.parse(selectedNode.html());

		// create a new window and laod the text
		FargoOutlinePrint.window = window.open('http://example.com', '_blank', 'width=500,height=400,resizable=1');
		FargoOutlinePrint.window.document.write(selectedNode.html());
	},
	init: function() {
		// load any html views
		// laod the css
		
		// insert the print icon
		$('#idFileMenu').find('.divider').eq(0).before('<li><a href="#" id="print-preview">Print Preview</a></li>');

		// bind to the print icon
		$('#idFileMenu').on('click', '#print-preview', function(e) {
			e.preventDefault();
			FargoOutlinePrint.print();
		});
	}
};

FargoOutlinePrint.init();
