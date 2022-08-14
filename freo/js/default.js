/*********************************************************************

 freo | 初期画面 (2022/08/14)

 Copyright(C) 2009-2022 freo.jp
 customized：cccabinet（https://cccabinet.jpn.org/)

*********************************************************************/

$(function() {
	//ユーティリティ表示ボタン
	$('.toggle').click(function(){
		$('#utility').slideToggle();
		$(this).toggleClass('open');
	});

	//ネタバレボタン
	$('.hidearea').hidearea({
		view: '表示する',
		color: '#000000',
		speed: 'normal',
		close: true
	});

	//削除確認
	$('a.delete').click(function() {
		return confirm('本当に削除してもよろしいですか？');
	});
	$('form.delete').submit(function() {
		return confirm('本当に削除してもよろしいですか？');
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
	$('a.colorbox.delivery').colorbox({ width:'280px', height:'80%', iframe:true });
});
