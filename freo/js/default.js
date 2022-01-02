/*********************************************************************

 freo | 初期画面 (2011/12/17)

 Copyright(C) 2009-2011 freo.jp

*********************************************************************/

$(document).ready(function() {
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
