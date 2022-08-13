// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2011 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Html tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Basic set. Feel free to add more tags
// ----------------------------------------------------------------------------
var mySettings = {
	onShiftEnter:  	{keepDefault:false, replaceWith:'<br>\n'},
	onCtrlEnter:  	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
	onTab:    		{keepDefault:false, replaceWith:'    '},
	markupSet:  [ 	
		{name:'色指定', 
			className:'colors', 
			openWith:'<span style="color:[![色を指定]!]">', 
			closeWith:'</span>', 
				dropMenu: [
					{name:'ホワイト', 	openWith:'<span style="color:#fff">', 	closeWith:'</span>', className:"col1-1" },
					{name:'シルバー', 	openWith:'<span style="color:#c0c0c0">', 	closeWith:'</span>', className:"col1-2" },
					{name:'グレー',	openWith:'<span style="color:#808080">', 	closeWith:'</span>', className:"col1-3" },

					{name:'ブラック',	openWith:'<span style="color:#000">', 	closeWith:'</span>', className:"col2-1" },
					{name:'レッド',	openWith:'<span style="color:#f00">', 	closeWith:'</span>', className:"col2-2" },
					{name:'マルーン', 	openWith:'<span style="color:#800000">', 	closeWith:'</span>', className:"col2-3" },

					{name:'イエロー', 	openWith:'<span style="color:#ff0">', 	closeWith:'</span>', className:"col3-1" },
					{name:'オリーブ',	openWith:'<span style="color:#808000">', 	closeWith:'</span>', className:"col3-2" },
					{name:'ライム', 	openWith:'<span style="color:#0f0">', 	closeWith:'</span>', className:"col3-3" },

					{name:'グリーン', 	openWith:'<span style="color:#008000">', 	closeWith:'</span>', className:"col4-1" },
					{name:'アクア', 	openWith:'<span style="color:#0ff">', 	closeWith:'</span>', className:"col4-2" },
					{name:'ティール', 	openWith:'<span style="color:#008080">', 	closeWith:'</span>', className:"col4-3" },

					{name:'ブルー', 	openWith:'<span style="color:#00f">', 	closeWith:'</span>', className:"col5-1" },
					{name:'ネイビー', openWith:'<span style="color:#000080">', 	closeWith:'</span>', className:"col5-2" },
					{name:'フクシャ', 	openWith:'<span style="color:#f0f">', 	closeWith:'</span>', className:"col5-3" },

					{name:'パープル', 	openWith:'<span style="color:#800080">', 	closeWith:'</span>', className:"col6-1" },
					{name:'オレンジ',	openWith:'<span style="color:#ffa500">', 	closeWith:'</span>', className:"col6-2" },
					{name:'文字色',	openWith:'<span style="color:#222">', 	closeWith:'</span>', className:"col6-3" },
				]
		},
		{name:'太字', className:'bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
		{name:'下線', className:'underline', key:'U', openWith:'<u>', closeWith:'</u>' },
		{name:'打消', className:'stroke', key:'S', openWith:'<del>', closeWith:'</del>' },
		{separator:'---------------' },
		{name:'箇条書き', className:'list-bullet', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>'},
		{name:'番号付き箇条書き', className:'list-numeric', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>'},
		{name:'リスト', className:'list-item', openWith:'<li>', closeWith:'</li>' },
		{separator:'---------------' },
		{name:'見出し4', className:'h4', key:'4', openWith:'<h4(!( class="[![クラス名]!]")!)>', closeWith:'</h4>\n', placeHolder:'タイトルをここに...' },
		{name:'見出し5', className:'h5', key:'5', openWith:'<h5(!( class="[![クラス名]!]")!)>', closeWith:'</h5>\n', placeHolder:'タイトルをここに...' },
		{name:'見出し6', className:'h6', key:'6', openWith:'<h6(!( class="[![クラス名]!]")!)>', closeWith:'</h6>\n', placeHolder:'タイトルをここに...' },
		{name:'段落', className:'paragraph', openWith:'<p(!( class="[![クラス名]!]")!)>', closeWith:'</p>\n' },
		{separator:'---------------' },
		{name:'リンク', className:'link', key:'L', openWith:'<a href="[![リンク:!:http://]!]"(!( title="[![Title]!]")!) target="_blank">', closeWith:'</a>', placeHolder:'リンクするテキスト...' },
		{name:'画像', className:'picture', key:'P', replaceWith:'<img src="[![ソース:!:http://]!]" alt="[![代替テキスト]!]">' },
		{name:'続きを読む', className:'pagebreak', replaceWith:'<!-- pagebreak -->\n' },
		{name:'ネタバレ', className:'netabare', openWith:'<p>', closeWith:'</p>', multiline:true, openBlockWith:'<div class="hidearea"(!( title="[![ボタンのタイトル]!]")!)>\n', closeBlockWith:'\n</div>\n', placeHolder:'ここにネタバレ文...'},
		{name:'コードスタイル', className:'page_code', dropMenu: [
			{name:'コード(code)', className:'code', openWith:'<code(!( class="[![クラス名]!]")!)>', closeWith:'</code>'},
			{name:'整形(pre)', className:'pre', openWith:'<pre(!( class="[![クラス名]!]")!)>', closeWith:'</pre>'},
			{name:'引用(blockquote)', className:'blockquote', openWith:'<blockquote>', closeWith:'</blockquote>\n'},
			{name:'ソース(precode)', className:'precode', openWith:'<pre class="[![preクラス名]!]"><code class="[![codeクラス名]!]">', closeWith:'</code></pre>\n'}
			],
		},
		{separator:'---------------' },
		{name:'HTML実体参照変換',
			className:"htmloff", 
			replaceWith:function(markItUp) { 
				var container = document.createElement('div');
				container.appendChild(document.createTextNode(markItUp.selection));
				return container.innerHTML; 
			}
		},
		{name:'タグ消去', className:'clean', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },
		{name:'プレビュー', className:'preview', call:'preview' },
		{separator:'---------------' },
		{name:'表作成', 
			className:'tablegenerator', 
			placeholder:"ここにテキスト...",
			replaceWith:function(markItUp) {
				var cols = prompt("何列ですか?"),
					rows = prompt("何行ですか?"),
					html = "<table>\n";
				if (markItUp.altKey) {
					html += " <tr>\n";
					for (var c = 0; c < cols; c++) {
						html += "  <th>[!["+(c+1)+"列目の表題]!]</th>\n";	
					}
					html+= " </tr>\n";
				}
				for (var r = 0; r < rows; r++) {
					html+= " <tr>\n";
					for (var c = 0; c < cols; c++) {
						html += "  <td>"+(markItUp.placeholder||"")+"</td>\n";	
					}
					html+= " </tr>\n";
				}
				html += "</table>\n";
				return html;
			}
		}
	]
}