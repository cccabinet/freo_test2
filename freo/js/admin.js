/*********************************************************************

 freo | 管理画面 (2022/08/07)

 Copyright(C) 2009-2022 freo.jp
 customized：cccabinet（https://cccabinet.jpn.org/)

*********************************************************************/

$(document).ready(function() {
	//管理メニュー表示ボタン
	$('.toggle').click(function(){
		$('#menu').slideToggle();
		$(this).toggleClass('open');
	});

	//現在日時設定
	$('#setDatetime').click(function() {
		var now = new Date();

		var year   = now.getFullYear();
		var month  = now.getMonth() + 1;
		var day    = now.getDate();
		var hour   = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();

		if (month  < 10) { month  = '0' + month;  }
		if (day    < 10) { day    = '0' + day;    }
		if (hour   < 10) { hour   = '0' + hour;   }
		if (minute < 10) { minute = '0' + minute; }
		if (second < 10) { second = '0' + second; }

		$('#datetime_year').val(year);
		$('#datetime_month').val(month);
		$('#datetime_day').val(day);
		$('#datetime_hour').val(hour);
		$('#datetime_minute').val(minute);
		$('#datetime_second').val(second);
	});

	//タグ入力
	$('#entry_tag,#page_tag,#tag').jTagging($('#taglist'), ',');

	//メディア管理（tablesorter非公式フォーク版）
	$('#media').tablesorter({
		emptyTo: 'top',
		headers: {
			2: { sorter: 'digit' },
			3: { sorter: false },
			4: { sorter: false }
		}
	});

	//ユーザー管理
	$('#user').tablesorter({
		sortList: [[3,1], [4,1]],
		headers: {
			5: { sorter: false }
		}
	});

	//メディアアップロード欄追加
	$('#media_add').click(function() {
		$('#media_file').append($('#media_template').html());
	});
	$('#media_template').hide();

	//メディア挿入準備
	$('a.colorbox').click(function() {
		if (tinymce.isIE) {
			tinyMCE.get('tiny_mce').focus();
			tinyMCE.activeEditor.windowManager.bookmark = tinyMCE.activeEditor.selection.getBookmark();
		}
	});

	//公開終了
	if ($('#article_close_set').val() == '0') {
		$('#article_close').hide();
	}
	$('#article_close_set').change(function() {
		if ($(this).val() == '1') {
			$('#article_close').show();
		} else {
			$('#article_close').hide();
		}
	});

	//閲覧制限
	if ($('#article_restriction').val() == 'group') {
		$('#article_password').hide();
	} else if ($('#article_restriction').val() == 'password') {
		$('#article_group').hide();
	} else {
		$('#article_group, #article_password').hide();
	}
	$('#article_restriction').change(function() {
		if ($(this).val() == 'group') {
			$('#article_group').show();
			$('#article_password').hide();
		} else if ($(this).val() == 'password') {
			$('#article_group').hide();
			$('#article_password').show();
		} else {
			$('#article_group, #article_password').hide();
		}
	});

	//検証
	if ($('#option_type').val() != 'text') {
		$('#option_validate').hide();
	}
	$('#option_type').change(function() {
		if ($(this).val() == 'text') {
			$('#option_validate').show();
		} else {
			$('#option_validate').hide();
		}
	});

	//承認確認
	$('a.approve').click(function() {
		return confirm('本当に承認してもよろしいですか？');
	});
	$('form.approve').submit(function() {
		return confirm('本当に承認してもよろしいですか？');
	});

	//削除確認
	$('a.delete').click(function() {
		return confirm('本当に削除してもよろしいですか？');
	});
	$('form.delete').submit(function() {
		return confirm('本当に削除してもよろしいですか？');
	});

	//設定確認
	$('a.config').click(function() {
		return confirm('本当に設定してもよろしいですか？');
	});
	$('form.config').submit(function() {
		return confirm('本当に設定してもよろしいですか？');
	});

	//ColorBox
	var extensions = ['gif', 'GIF', 'jpeg', 'JPEG', 'jpg', 'JPG', 'jpe', 'JPE', 'png', 'PNG'];

	var target = '';
	$.each(extensions, function() {
		if (target) {
			target += ',';
		}
		target += 'a[href$=\'.' + this + '\']';
	});
	$(target).colorbox({ maxWidth:'95%', maxHeight:'95%' });

	$('a.colorbox').colorbox({ width:'80%', height:'80%', iframe:true });
});

//TinyMCE
tinymce.init({
	language: 'ja',
	language_url : freo_path + 'js/tinymce/langs/ja.js',
	selector:'#tiny_mce',
	entity_encoding : 'raw',
	extended_valid_elements: 'iframe[*]',
	height: 500,
	plugins: 'advlist lists link image charmap preview anchor hr nonbreaking searchreplace visualblocks code fullscreen insertdatetime media table pagebreak quickbars help',
	external_plugins:{
		'freomedia': freo_path + 'js/tinymce/plugins/freomedia/plugin.min.js',
		'freomediaform': freo_path + 'js/tinymce/plugins/freomediaform/plugin.min.js',
		'netabare': freo_path + 'js/tinymce/plugins/netabare/plugin.min.js',
	},
	toolbar: 'bold underline strikethrough | styleselect | bullist numlist outdent indent | code fullscreen | forecolor backcolor removeformat | link unlink image media charmap pagebreak | freomedia freomediaform netabare | searchreplace | undo redo help',
	toolbar_mode: 'sliding',
	menu: {
		tools: { title: 'Tools', items: 'code | freomedia freomediaform netabare' }
	},
	mobile: {
		menubar: true,
		plugins: 'image link unlink media table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists checklist help quickbars advtable',
		toolbar: 'bullist numlist styleselect'
	},
	quickbars_insert_toolbar: 'freomedia image media quicktable | hr charmap nonbreaking pagebreak',
	quickbars_selection_toolbar: 'bold underline strikethrough styleselect | quicklink removeformat',
	color_map: [
		'#FFFFFF', 'ホワイト',
		'#C0C0C0', 'シルバー',
		'#808080', 'グレー',
		'#000000', 'ブラック',
		'#FF0000', 'レッド',

		'#800000', 'マルーン',
		'#FFFF00', 'イエロー',
		'#808000', 'オリーブ',
		'#00FF00', 'ライム',
		'#008000', 'グリーン',

		'#00FFFF', 'アクア',
		'#008080', 'ティール',
		'#0000FF', 'ブルー',
		'#000080', 'ネイビー',
		'#FF00FF', 'フクシャ',

		'#800080', 'パープル',
		'#FFA500', 'オレンジ',
		'#222222', '文字色',
	],
	style_formats: [
		{title: '見出し', items: [
			{title: '見出し4', format: 'h4'},
			{title: '見出し5', format: 'h5'},
			{title: '見出し6', format: 'h6'}
		]},
		{title: 'ブロック', items: [
			{title: '段落', format: 'p'},
			{title: '引用', format: 'blockquote'},
			{title: '整形済み', format: 'pre'},
			{title: 'コード', format: 'code'},
		]},
		{title: '配置', items: [
			{title: '左揃え', icon: 'align-left', format: 'alignleft'},
			{title: '中央揃え', icon: 'align-center', format: 'aligncenter'},
			{title: '右揃え', icon: 'align-right', format: 'alignright'},
			{title: '均等揃え', icon: 'align-justify', format: 'alignjustify'}
		]},
	],
	insertdatetime_formats: ['%Y/%m/%d', '%H:%M:%S'],
	content_css: [
		freo_path + 'css/common.css',
	],
	convert_urls: false
});
