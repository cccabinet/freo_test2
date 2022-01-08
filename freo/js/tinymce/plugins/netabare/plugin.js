tinymce.PluginManager.requireLangPack('netabare');
tinymce.PluginManager.add('netabare', function(editor, url) {
	var openDialog = function () {
		return editor.windowManager.open({
			title: 'netabareWindowTitle',
			size: 'large',
			body: {
				type: 'panel',
				items: [
					{
						type: 'input',
						name: 'title',
						label: 'netabareButtonTitle'
					},{
						type: 'htmlpanel',
						html: '<p>' + tinymce.translate('netabareButtonTitleText') + '</p>',
					},{
						type: 'textarea',
						name: 'text',
						label: 'netabareTextTitle'
					}
				]
			},
			buttons: [
				{
					type: 'cancel',
					text: 'Close'
				},{
					type: 'submit',
					text: 'Insert',
					primary: true
				}
			],
			onSubmit: function (api) {
				var data = api.getData();
				if (data.title == '') {
					editor.insertContent('<div class="hidearea"><p>' + data.text + '</p></div>\n<p></p>');
				} else {
					editor.insertContent('<div class="hidearea" title="' + data.title + '"><p>' + data.text + '</p></div>\n<p></p>');
				}
				api.close();
			}
		});
	};
	
	editor.ui.registry.addButton('netabare', {
		icon: 'netabare',
		tooltip: 'netabareWindowTitle',
		onAction: function () {
			openDialog();
		}
	});

	editor.ui.registry.addMenuItem('netabare', {
		text: 'netabareWindowTitle',
		icon: 'netabare',
		context: 'tools',
		onAction: function() {
			openDialog();
		}
	});

	editor.ui.registry.addIcon('netabare', '<svg width="24" height="24"><use xlink:href="' + url + '/img/netabare.svg#netabare"></use></svg>');

	//メタデータ（ヘルププラグインで使用）
	return {
		getMetadata: function () {
			return {
				name: "Netabare",
				url: "http://cccabinet.jpn.org/"
			};
		}
	};
});
