var FargoOutlinePrint = {
	html: {},
	css: {
		'pre': [
			'width: 100%',
			'white-space: pre-wrap'
		]
	},
	parse: function(text) {
		text = '<pre>' + text + '</pre>';
		return text;
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

		var output = FargoOutlinePrint.parse(getOutlineText());

		// create a new window and load the text
		FargoOutlinePrint.window = window.open('http://example.com', '_blank', 'width=500,height=400,resizable=1');
		var html = '<html><head>' + FargoOutlinePrint.generateCSS();
		html += '<title>'+ tab.title +'</title></head>';
		html += '<body>' + output + '</body></html>';

		FargoOutlinePrint.window.document.write(html);
	},
	init: function() {
		var $idFileMenu = $('#idFileMenu');
		
		// insert the print link
		$idFileMenu.find('.divider').eq(0).before('<li><a href="#" id="print-preview">Print Preview</a></li>');

		// bind to the print link
		$idFileMenu.on('click', '#print-preview', function(e) {
			e.preventDefault();
			FargoOutlinePrint.print();
		});

		// load preset css info
		FargoOutlinePrint.css.body = [
			'overflow: auto'
		];
		FargoOutlinePrint.css.pre.push('font-family: ' + appPrefs.outlineFont);
		FargoOutlinePrint.css.pre.push('font-size: ' + appPrefs.outlineFontSize + 'px');
		FargoOutlinePrint.css.pre.push('line-height: ' + appPrefs.outlineLineHeight + 'px');
	}
};

FargoOutlinePrint.init();
