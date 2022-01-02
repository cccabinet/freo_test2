tinymce.PluginManager.requireLangPack('freomedia');
tinymce.PluginManager.add('freomedia', function(editor, url) {
	editor.ui.registry.addButton('freomedia', {
		icon: 'freomedia',
		tooltip: 'freo_media',
		onAction: function () {
			editor.windowManager.openUrl({
				title: 'freo_media',
				url: freo_path + 'index.php/admin/media?type=iframe',
			});
		}
	})

	editor.ui.registry.addIcon('freomedia', '<svg width="24" height="24"><use xlink:href="' + url + '/img/media.svg#media"></use></svg>');

	editor.ui.registry.addMenuItem('freomedia', {
		text: 'freo_media',
		icon: 'freomedia',
		context: 'insert',
		onAction: function () {
			editor.windowManager.openUrl({
				title: 'freo_media',
				url: freo_path + 'index.php/admin/media?type=iframe',
			});
		}
	});

	return {
		getMetadata: function () {
			return {
				name: "freo_media",
				url: "http://cccabinet.jpn.org/"
			};
		}
	};
});