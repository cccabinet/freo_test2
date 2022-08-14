/*********************************************************************

 freo | 管理画面 (2022/08/14)

 Copyright(C) 2009-2022 freo.jp
 customized：cccabinet（https://cccabinet.jpn.org/)

*********************************************************************/

$(function() {
	//markItUp!
	$('#markitup').markItUp(mySettings);

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

	//アップロードファイルの表示
	$('input[type="file"]').on('change', handleFileSelect);
	function handleFileSelect(evt) {
		$('#preview').remove();
		$(this).parents('dd').append('<div id="preview"></div>');
		var files = evt.target.files;
		for (var i = 0, f; f = files[i]; i++) {
			var reader = new FileReader();
			reader.onload = (function(theFile) {
				return function(e) {
					if (theFile.type.match('image.*')) {
						var $html = ['<div style="display:inline-block;"><img src="', e.target.result,'" title="', escape(theFile.name), '" style="height:100px;" /><div style="text-align: center;"><small>', escape(theFile.name),'</small></div></div>'].join('');
					} else {
						var $html = ['<div style="display:inline-block;"><small>', escape(theFile.name),'</small></div>'].join('');
					}
					$('#preview').append($html);
				};
			})(f);
			reader.readAsDataURL(f);
		}
	}


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
