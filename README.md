# freo HTML版（管理画面版）
オリジナルの[freo](http://freo.jp/)はXHTMLなので、これをHTML化しています。<br>[別途カスタマイズしたもの](https://github.com/cccabinet/freo_customize)をベースにしてカスタマイズしています。

:bulb:コメントなどのスパム対策で使用する<strong>[投稿キープラグイン](https://freo.jp/plugin/message.html)と</strong>と<strong>[なぞなぞ認証プラグイン](https://freo.jp/plugin/riddle.html)</strong>はどちらか一方のみに使用を統一してください

### 各リリースバージョンの説明
- [main：フルバージョン](https://github.com/cccabinet/freo_html/tree/main)<br>モバイル用テンプレートを除く全ファイルを収納
- [diff：差替版](https://github.com/cccabinet/freo_html/tree/diff)<br>変更のあったファイルのみを収納
- **admin：管理画面版**（←現在のバージョン）<br>管理用関連ファイルのみを収納


## ファイル構成
★：freoカスタマイズ版から追加
<pre><code>freo_customize/
├── freo/
│   ├── css/
│   │   ├── admin.css（管理画面用）
│   │   ├── common.css（HTML再定義用）
│   │   └── iframe.css（インラインフレーム用）
│   ├── images/
│   │   └── tablesorter/（tablesorter用のファイルを差替）
│   ├── js/
│   │   ├── tinymce/ (TinyMCE用のファイルを追加）
│   │   │   ├── langs/ja.js（日本語表記ファイル）
│   │   │   └── plugins/
│   │   │       ├── freomedia/（freoメディア管理プラグイン）
│   │   │       ├── freomediaform/（freoメディア登録プラグイン）
│   │   │       └── netabare/（ネタバレボタンプラグイン）
│   │   ├── admin.js（管理画面用）
│   │   ├── iframe.js（インラインフレーム用）
│   │   ├── jquery.hidearea.js（ネタバレボタン用を追加）
│   │   └── jQuery.jTagging.min.js（タグの候補をタグクラウド一覧で表示用を追加）
│   ├── libs/
│   │   ├── freo/
│   │   │   ├── internals/
│   │   │   │   ├── admin/
│   │   │   │   │   ├── config.php（管理画面用設定管理ファイル）★
│   │   │   │   │   ├── entry_form.php（管理画面用エントリー入力ファイル）
│   │   │   │   │   ├── media.php（管理画面用メディア管理ファイル）
│   │   │   │   │   ├── media_delete.php（管理画面用メディア削除ファイル）
│   │   │   │   │   └── page_form.php（管理画面用ページ入力ファイル）
│   │   │   │   ├── comment/post.php（コメント登録用ファイル）
│   │   │   │   └── file/default.php（ファイル表示用ファイル）
│   │   │   ├── plugins/
│   │   │   │   ├── begin.entry_convert.php（エントリー本文変換プラグインの開始前ファイル）★
│   │   │   │   ├── begin.information_convert.php（ インフォメーション本文変換プラグインの開始前ファイル）★
│   │   │   │   ├── begin.page_convert.php （ページ本文変換プラグインの開始前ファイル）★
│   │   │   │   ├── config.filemanager.php（ファイル管理プラグインの設定ファイルを追加）
│   │   │   │   ├── display.entry_calender.php（エントリーカレンダー表示プラグインの表示ファイル）
│   │   │   │   └── page.filemanager.php（ファイル管理プラグインのページファイルを追加）
│   │   │   ├── common.php（共通関数ファイル）
│   │   │   ├── initialize.php（初期化処理ファイル）
│   │   │   ├── pictogram.php（絵文字関数ファイル）
│   │   │   ├── transfer.php（セッションID自動付加関数ファイル）
│   │   │   └── version.php（バージョン情報ファイル）
│   │   └── smarty/
│   │       └── plugins/（Smarty用プラグインを追加）
│   └── templates/
│       ├── internals/admin/（管理用htmlテンプレート）
│       └── plugins/
│           ├── export/（エクスポートプラグインのテンプレート）
│           ├── filemanager/（ファイル管理プラグインのテンプレートを追加）
│           └── import/（インポートプラグインのテンプレート）
│
├── markItUp!/
│   ├── freo/
│   │   ├── js/
│   │   │   ├── admin.js（管理画面差替用）
│   │   │   └── iframe.js（インラインフレーム差替用）
│   │   ├── markitup/（markItUp!関連ファイルを差替・追加）
│   │   └── templates/internals/admin/
│   │       ├── entry_form.html（エントリー登録/編集の差替テンプレート）
│   │       ├── footer.html（管理用フッタの差替テンプレートを追加）★
│   │       ├── header.html（管理用ヘッダの差替テンプレート）
│   │       ├── information_form.html（インフォメーション登録/編集の差替テンプレート）
│   │       └── page_form.html（ページ登録/編集の差替テンプレート）
│   └── plugins/
│       └── clap/【拍手送信プラグイン】
│           └── templates/plugins/clap/admin_thank_form.html（お礼登録/編集の差替テンプレート）
│
├── plugins/
│   ├── bookmark/【ブックマーク登録プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── bookmark_tagcloud/【ブックマークタグクラウド表示プラグイン】
│   │   └── libs/freo/plugins/config.bookmark_tagcloud.php（設定ファイル）※
│   ├── circle/【サークル管理プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── circle_tagcloud/【サークルタグクラウド表示プラグイン】
│   │   └── libs/freo/plugins/config.circle_tagcloud.php（設定ファイル）※
│   ├── clap/【拍手送信プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── count/【カウンタプラグイン】
│   │   └── templates/
│   ├── entry_tagcloud/【エントリータグクラウド表示プラグイン】
│   │   └── libs/freo/plugins/config.entry_tagcloud.php（設定ファイル）※
│   ├── entry_tagmanager/【エントリータグ管理プラグイン】
│   │   ├── libs/freo/plugins/
│   │   │   ├── config.entry_tagmanager.php（設定ファイル）
│   │   │   └── end.entry_tagmanager.php（処理終了後表示ファイル）
│   │   └── templates/
│   ├── filter_confirm/【フィルター認証確認プラグイン】
│   │   └── templates/
│   ├── form/【フォーム管理プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── menu/【メニュー登録プラグイン】
│   │   └── templates/
│   ├── message/【メッセージ登録プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── page_calender/【ページカレンダー表示プラグイン】
│   │   └── libs/freo/plugins/display.page_calender.php（表示ファイル）
│   ├── page_pid_update/【ページ親ID一括変更プラグイン】
│   │   └── templates/
│   ├── page_tagcloud/【ページタグクラウド表示プラグイン】
│   │   └── libs/freo/plugins/config.page_tagcloud.php（設定ファイル）※
│   ├── page_tagmanager/【ページタグ管理プラグイン】
│   │   ├── libs/freo/plugins/
│   │   │   ├── config.page_tagmanager.php（設定ファイル）
│   │   │   └── end.page_tagmanager.php（処理終了後表示ファイル）
│   │   └── templates/
│   ├── paint/【イラスト投稿プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── parts/【ブログパーツ管理プラグイン】
│   │   └── templates/
│   ├── popularity/【人気コンテンツプラグイン】
│   │   └── templates/
│   ├── profile/【プロフィール拡張プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── riddle/【なぞなぞ認証プラグイン】
│   │   └── templates/
│   └── task/【タスク登録プラグイン】
│       └── templates/
│
└── plugins_catalog/
    ├── catalog/【ショッピングカートプラグイン】
    │   ├── libs/freo/plugins/page.catalog.php（ページファイル）
    │   └── templates/
    │       ├── internals/admin/footer.html（管理用フッタの差替テンプレートを追加）★
    │       └── plugins/catalog/（管理用テンプレートのみ）
    ├── catalog_order/【注文管理プラグイン】
    │   └── templates/
    │       └── plugins/catalog_order/（管理用テンプレート＋cancel_complete.html）
    └── catalog_tagcloud/【ショッピングカートタグクラウド表示プラグイン】
        └── libs/freo/plugins/config.catalog_tagcloud.php（設定ファイル）※
</code></pre>
※のファイルは、[登録/編集画面にタグの候補をタグクラウド一覧で表示する](https://cccabinet.jpn.org/view/69)ために使用

## フォルダの種類
- **freo**<br>freo（v1.21.0）本体（モバイル用テンプレートを除く）のうち、`css/`、`images/`、`js/`、`libs/`、`templates/` の管理用関連ファイルに[ファイル管理プラグイン](https://freo.jp/plugin/filemanager.html)を追加<br>※`freo/css/colorbox.css`、`freo/js/jquery.js`、`freo/js/jquery.colorbox.js`、`freo/js/jquery.tablesorter.js`、`freo/images/colorbox/`、`freo/tinymce/` は不要なので差し替える場合は同ファイルを削除してもOK<br>:bulb:**freo本体を設置したものに上書きして差替えて下さい**
- **markItUp!**<br>[テキストエディタをTinyMCEからmarkItUp!に変更する](https://freo.jp/document/customize/markitup.html)場合のJSやテンプレートの差替ファイル（差替用 `freo/templates/internals/admin/footer.html` を追加）<br>※同梱しているmarkItUp!本体は最新版にし、さらに[拡張版](https://cccabinet.jpn.org/view/102)（一部を除く）を導入済み<br>:bulb:**一旦freo本体の差替版を設置してから上書きして差替えて下さい**（freo/js/tinymce/ は不要なので削除してもOK）
- **plugins**<br>[freoの公式サイトで配布されているプラグイン](https://freo.jp/plugin/)（ファイル管理プラグインとショッピングカート系プラグインを除く）の管理用テンプレートファイルなど<br>:bulb:**プラグイン本体を設置したものに上書きして差替えて下さい**
- **plugins_catalog**<br>[ショッピングカートプラグイン](https://freo.jp/plugin/catalog.html)と[注文管理プラグイン](https://freo.jp/plugin/catalog_order.html)の管理用テンプレートファイル（差替用 `catalog/templates/internals/admin/footer.html` を追加）など<br>:bulb:ショッピングカートプラグインはシェアウェアなので、他のプラグインのテンプレートと分けています<br>:bulb:**プラグイン本体を設置したものに上書きして差替えて下さい**

## カスタマイズの内容
freoのデフォルトのテンプレートは、XHTML1.0で書かれているので、これをHTML仕様に変更して、できるだけ[Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)に準ずるようにする。<br>参考：[Google HTML/CSS Style Guide まとめ](https://qiita.com/Sugima/items/785644372397595644ba)
- XHTMLからHTMLへスタイルルールの変更
  - DOCTYPE宣言や `<head>` のメタタグの変更
  - CSSファイルの表記にあるtypeとmediaの部分を削除<br>`<link rel="stylesheet" href="..." type="text/css" media="all" />` ⇒ `<link rel="stylesheet" href="..."  />`
  - JavaScriptファイルの表記にあるtypeの部分を削除<br>`<script type="text/javascript" src="...">` ⇒ `<script src="...">`
  - 空要素が /で綴じられている部分を削除<br>例：`<br />` ⇒ `<br>`
- JSライブラリの設定変更
  - Javascriptファイルの記載を `<head>` ～ `</head>` などから `</body>` の直前に移動（サイトの表示体感速度を高めるため）
  - JavaScriptの実行処理の表記の変更<br>`$(document).ready(function() {}` ⇒ `$(function() {}`（[$(docment).ready(...)は非推奨＋必要ない](https://qiita.com/sukoyakarizumu/items/d07288a3fa67e19b66de)）
- .cssファイルの表記を変更
  - IEはサポートを終了したのでIE6用設定を削除
  - インデントはタブからスペース2つに変更
  - プロパティごとに改行を入れ、それぞれのセレクタと宣言に改行を入れる
  - CSSのプロパティはできる限り一括で指定し、[視覚順](https://qiita.com/mgn/items/6154ccd2e23b2e65c769)に記述
  - できるだけID名とクラス名にタイプセレクタ（要素型セレクタ）の使用を削除（不必要な先祖セレクタを避けることでパフォーマンスを向上させる）<br>例：`div#container` ⇒ `#container`
  - HEX形式のカラーコードは小文字で可能な限り16進数表記の3文字に変更<br>例：`color: #FFFFFF;` ⇒ `color: #fff;`
- コピーライトの表記が `<address>` から `<small>` に変更されたので修正
- 強調タグを `<em>` から `<strong>` に変更（`<em>` は斜字、`<strong>` は太字として使用）<br>TinyMCEとmarkItUp!の設定に斜字(Italic)を追加
- テーブル（表）関連の変更
  - `<table>` の summary 属性が廃止になったので削除
  - HTML5.1から `<tfoot>` を `<tbody>` の前から `</table>` の直前に配置することになったので移動
- フォームのインプット周りのカスタマイズ
  - フォームの項目と入力コントロールをそれぞれ紐付けるため、各項目名に `<label>`、各コントロールまたは `<dd>` に `id` を追加
  - `input type="text"` から各入力欄に合わせたタイプに変更
    - メールアドレス関連：`input type="text"` ⇒ `input type="email"`
    - URL関連：`input type="text"` ⇒ `input type="url"`<br>※メニュー登録プラグインのURL欄は相対パスを入れられるようにするため `input type="text" inputmode="url"` にしています。
    - 電話番号関連：`input type="text"` ⇒ `input type="tel"`
    - キーワード検索関連：`input type="text"` ⇒ `input type="search"`<br>検索項目としてplaceholder属性も追加
    - 数値関連：`input type="text"` ⇒ `input type="text" inputmode="numeric"` または `input type="text" inputmode="decimal"` に変更
  - 一部にplaceholder属性を追加
  - `checked`, `selected` などの属性はXHTMLでは、 `xxx="xxx"` と表記しなければならなかったが、単純に `xxx` に変更
  - 複数アップロードしたい場合は、1つずつ選択欄を増加して行っていたのを、1つの選択欄で複数選択できるようにし、一部のファイルのアップロードを画像のみに制限

:bulb:**[freoカスタマイズ（管理画面版）のREADME.md](https://github.com/cccabinet/freo_customize/tree/admin#readme)のカスタマイズの内容も合わせて参照してください。**