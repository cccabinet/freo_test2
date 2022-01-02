tinymce.PluginManager.requireLangPack('freomediaform');
tinymce.PluginManager.add('freomediaform', function(editor, url) {
	editor.ui.registry.addButton('freomediaform', {
		icon: 'freomediaform',
		tooltip: 'freo_media_form',
		onAction: function () {
			editor.windowManager.openUrl({
				title: 'freo_media_form',
				url: freo_path + 'index.php/admin/media_form?type=iframe',
			});
		}
	})

	editor.ui.registry.addIcon('freomediaform', '<svg width="24" height="24"><use xlink:href="' + url + '/img/media-plus.svg#media-plus"></use></svg>');

	editor.ui.registry.addMenuItem('freomediaform', {
		text: 'freo_media_form',
		icon: 'freomediaform',
		onAction: function () {
			editor.windowManager.openUrl({
				title: 'freo_media_form',
				url: freo_path + 'index.php/admin/media_form?type=iframe',
			});
		}
	});

	return {
		getMetadata: function () {
			return	{
				name: "freo_media_form",
				url: "http://cccabinet.jpn.org/"
			};
		}
	};
});