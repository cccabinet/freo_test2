// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Html tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {
	onShiftEnter: {keepDefault:false, replaceWith:'<br />\n' },
	onCtrlEnter: {keepDefault:false, openWith:'\n<p>', closeWith:'</p>\n' },
	onTab: {keepDefault:false, openWith:'	'},
	markupSet: [
		{name:'Bold', className:'bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
		{name:'Stroke through', className:'stroke', key:'S', openWith:'<del>', closeWith:'</del>' },
		{separator:'---------------' },
		{name:'Ul', className:'list-bullet', openWith:'<ul>\n', closeWith:'</ul>\n' },
		{name:'Ol', className:'list-numeric', openWith:'<ol>\n', closeWith:'</ol>\n' },
		{name:'Li', className:'list-item', openWith:'<li>', closeWith:'</li>' },
		{separator:'---------------' },
		{name:'Heading 4', className:'h4', key:'4', openWith:'<h4(!( class="[![Class]!]")!)>', closeWith:'</h4>', placeHolder:'Your title here...' },
		{name:'Heading 5', className:'h5', key:'5', openWith:'<h5(!( class="[![Class]!]")!)>', closeWith:'</h5>', placeHolder:'Your title here...' },
		{name:'Heading 6', className:'h6', key:'6', openWith:'<h6(!( class="[![Class]!]")!)>', closeWith:'</h6>', placeHolder:'Your title here...' },
		{name:'Paragraph', className:'paragraph', openWith:'<p(!( class="[![Class]!]")!)>', closeWith:'</p>' },
		{separator:'---------------' },
		{name:'Link', className:'link', key:'L', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...' },
		{name:'Picture', className:'picture', key:'P', replaceWith:'<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />' },
		{name:'Page Break', className:'pagebreak', placeHolder:'<!-- pagebreak -->' },
		{separator:'---------------' },
		{name:'Clean', className:'clean', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },
		{name:'Preview', className:'preview', call:'preview' }
	]
}