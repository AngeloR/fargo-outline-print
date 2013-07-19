var FargoOutlinePrint = {
	html: {},
	css: {
		'ol': [
			'list-style: none'
		]
	},
	parse: function(html) {

		return html;
	},
	generateCSS: function() {
		var s = '<style>',
			keys = Object.keys(FargoOutlinePrint.css);
		for(var i = 0, l = keys.length; i < l; ++i) {
			s += keys[i] +' {' + FargoOutlinePrint.css[keys[i]].join(';') + '}';
		}
		s += '</style>';
		return s;
	},
	print: function() {
		// get the selected node
		var tab = getActiveTab();
		var selectedNode = $('#' + tab.idOutlineContainer).find('.concord-cursor.selected');

		var output = FargoOutlinePrint.parse(selectedNode.html());

		// create a new window and laod the text
		FargoOutlinePrint.window = window.open('http://example.com', '_blank', 'width=500,height=400,resizable=1');
		var html = '<html><head><style>' + FargoOutlinePrint.generateCSS() + '</style></head>';
		html += '<body>' + output + '</body></html>';
		FargoOutlinePrint.window.document.title = tab.title;
		FargoOutlinePrint.window.document.write(html);
	},
	init: function() {
		// load any html views
		// laod the css
		var $idFileMenu = $('#idFileMenu');
		
		// insert the print icon
		$idFileMenu.find('.divider').eq(0).before('<li><a href="#" id="print-preview">Print Preview</a></li>');

		// bind to the print icon
		$idFileMenu.on('click', '#print-preview', function(e) {
			e.preventDefault();
			FargoOutlinePrint.print();
		});
	}
};

FargoOutlinePrint.init();
