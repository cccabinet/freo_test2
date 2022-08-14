# freo HTML版（フルバージョン）
オリジナルの[freo](http://freo.jp/)はXHTMLなので、これをHTML化しています。<br>[別途カスタマイズしたもの](https://github.com/cccabinet/freo_customize)をベースにしてカスタマイズしています。

:bulb:コメントなどのスパム対策で使用する<strong>[投稿キープラグイン](https://freo.jp/plugin/message.html)と</strong>と<strong>[なぞなぞ認証プラグイン](https://freo.jp/plugin/riddle.html)</strong>はどちらか一方のみに使用を統一してください

### 各リリースバージョンの説明
- **main：フルバージョン**（←現在のバージョン）<br>モバイル用テンプレートを除く全ファイルを収納
- [diff：差替版](https://github.com/cccabinet/freo_html/tree/diff)<br>変更のあったファイルのみを収納
- [admin：管理画面版](https://github.com/cccabinet/freo_html/tree/admin)<br>管理用関連ファイルのみを収納

## ファイル構成
★：freoカスタマイズ版から追加
<pre><code>freo_customize/
├── freo/
│   ├── configs/
│   ├── css/
│   │   ├── plugins/
│   │   ├── admin.css（管理画面用）
│   │   ├── common.css（HTML再定義用）
│   │   ├── default.css（初期画面用）
│   │   ├── error.css（エラー画面用）
│   │   ├── iframe.css（インラインフレーム用）
│   │   └── setup.css（セットアップ画面用）
│   ├── database/
│   ├── files/
│   ├── images/
│   │   ├── icons/
│   │   ├── tablesorter/（tablesorter用のファイルを差替）
│   │   └── forbidden.png（「表示できません」画像を追加）
│   ├── js/
│   │   ├── plugins/
│   │   ├── tinymce/ (TinyMCE用のファイルを追加）
│   │   │   ├── langs/ja.js（日本語表記ファイル）
│   │   │   └── plugins/
│   │   │       ├── freomedia/（freoメディア管理プラグイン）
│   │   │       ├── freomediaform/（freoメディア登録プラグイン）
│   │   │       └── netabare/（ネタバレボタンプラグイン）
│   │   ├── admin.js（管理画面用）
│   │   ├── common.js（共通関数用）
│   │   ├── default.js（初期画面用）
│   │   ├── error.js（エラー用）
│   │   ├── iframe.js（インラインフレーム用）
│   │   ├── jquery.autoresize.js
│   │   ├── jquery.hidearea.js（ネタバレボタン用を追加）
│   │   ├── jQuery.jTagging.min.js（タグの候補をタグクラウド一覧で表示用を追加）
│   │   └── setup.js（セットアップ用）
│   ├── libs/
│   │   ├── freo/（ファイル管理プラグインのファイルを追加）
│   │   └── smarty/（Smarty用プラグインを追加）
│   ├── mails/
│   ├── templates/
│   │   ├── internals/
│   │   └── plugins/（ファイル管理プラグインのテンプレートを追加）
│   └── templates_c/
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
│   ├── bookmark_inventory/【ブックマーク棚卸プラグイン】
│   ├── bookmark_tagcloud/【ブックマークタグクラウド表示プラグイン】
│   ├── circle/【サークル管理プラグイン】
│   ├── circle_tagcloud/【サークルタグクラウド表示プラグイン】
│   ├── clap/【拍手送信プラグイン】
│   ├── clap_inform/【拍手メール通知プラグイン】
│   ├── clap_spamfilter/【拍手コメントスパム対策プラグイン】
│   ├── comment_spamfilter/【コメントスパム対策プラグイン】
│   ├── contact/【メール送信プラグイン】
│   ├── count/【カウンタプラグイン】
│   ├── entry_image/【エントリーイメージ表示プラグイン】
│   ├── entry_output/【エントリー書き出しプラグイン】
│   ├── entry_permalink/【エントリー固定リンクプラグイン】
│   ├── entry_receive/【エントリーメール投稿プラグイン】
│   ├── entry_relate/【関連エントリー表示プラグイン】
│   ├── entry_tagcloud/【エントリータグクラウド表示プラグイン】
│   ├── entry_tagmanager/【エントリータグ管理プラグイン】
│   ├── filter_confirm/【フィルター認証確認プラグイン】
│   ├── form/【フォーム管理プラグイン】
│   ├── inform/【メール通知プラグイン】
│   ├── ipprotect/【IP制限プラグイン】
│   ├── media_all/【メディア一括表示プラグイン】
│   ├── media_comic/【漫画表示プラグイン】
│   ├── media_document/【メディア文章表示プラグイン】
│   ├── media_extract/【メディア一括登録プラグイン】
│   ├── media_list/【メディア表示プラグイン】
│   ├── menu/【メニュー登録プラグイン】
│   ├── message/【メッセージ登録プラグイン】
│   ├── message_inform/【メッセージメール通知プラグイン】
│   ├── message_spamfilter/【メッセージスパム対策プラグイン】
│   ├── page_all/【ページ一括表示プラグイン】
│   ├── page_archive/【ページアーカイブ表示プラグイン】
│   ├── page_calender/【ページカレンダー表示プラグイン】
│   ├── page_id_update/【ページID変更プラグイン】
│   ├── page_image/【ページイメージ表示プラグイン】
│   ├── page_image_categorized/【ページイメージ分類別表示プラグイン】
│   ├── page_path/【ページパス調整プラグイン】
│   ├── page_pid_limit/【ページ親ID使用制限プラグイン】
│   ├── page_pid_update/【ページ親ID一括変更プラグイン】
│   ├── page_recently/【新着ページ表示プラグイン】
│   ├── page_sibling/【兄妹ページ表示プラグイン】
│   ├── page_tagcloud/【ページタグクラウド表示プラグイン】
│   ├── page_tagmanager/【ページタグ管理プラグイン】
│   ├── page_topicpath/【パンくずリスト表示プラグイン】
│   ├── paint/【イラスト投稿プラグイン】
│   ├── parts/【ブログパーツ管理プラグイン】
│   ├── password/【パスワード認証プラグイン】
│   ├── pixiv_illust/【pixivイラスト表示プラグイン】
│   ├── pixiv_novel/【pixiv小説表示プラグイン】
│   ├── popularity/【人気コンテンツプラグイン】
│   ├── postkey/【投稿キープラグイン】
│   ├── profile/【プロフィール拡張プラグイン】
│   ├── protect/【直接リンク防止プラグイン】
│   ├── riddle/【なぞなぞ認証プラグイン】
│   ├── search/【検索プラグイン】
│   ├── task/【タスク登録プラグイン】
│   ├── title/【タイトル管理プラグイン】
│   ├── trackback_spamfilter/【トラックバックスパム対策プラグイン】
│   ├── twitter_followers/【Twitterフォロワー限定公開プラグイン】
│   └── twitter_friends/【Twitterフレンド限定公開プラグイン】
│
├── plugins_catalog/
│   ├── catalog/【ショッピングカートプラグイン】
│   │   ├── configs/
│   │   ├── files/
│   │   ├── libs/
│   │   ├── mails/
│   │   └── templates/
│   │       ├── internals/admin/footer.html（管理用フッタの差替テンプレートを追加）★
│   │       ├── plugins/catalog/
│   │       ├── footer.html（フッタの差替テンプレートを格納）★
│   │       └── utility.html（ユーティリティの差替テンプレートを追加）
│   ├── catalog_list/【商品一覧表示プラグイン】
│   ├── catalog_order/【注文管理プラグイン】
│   │   ├── configs/
│   │   ├── css/
│   │   ├── files/
│   │   ├── libs/
│   │   ├── mails/
│   │   └── templates/
│   │       ├── internals/user/default.html（ユーザー用ページの差替テンプレートを追加）
│   │       └── plugins/catalog_order/
│   └── catalog_tagcloud/【ショッピングカートタグクラウド表示プラグイン】
│
└── template_custom/
    └── freo/
        ├── css/
        │   └── default.css（初期画面差替用）
        └── templates/
            ├── internals/
            │   ├── category/default.html（カテゴリ表示用テンプレート）
            │   ├── default/default.html（トップ表示用差替テンプレート）
            │   ├── entry/default.html（ブログ表示用テンプレート）
            │   └── page/gallery.html（ギャラリーのページ用テンプレート）
            ├── header.html（ヘッダの差替テンプレート）
            └── utility_page.html（ギャラリーのページ用ユーティリティテンプレート）
</code></pre>

## フォルダの種類
- **freo**<br>freo（v1.21.0）本体（モバイル用テンプレートを除く）に[ファイル管理プラグイン](https://freo.jp/plugin/filemanager.html)と[Smarty用プラグイン](https://freo.jp/plugin/smarty/index.html)を追加し、[プレビュー表示を訪問者向けの表示](https://freo.jp/document/customize/preview.html)のテンプレートに差替<br>※`freo/css/colorbox.css`、`freo/js/jquery.js`、`freo/js/jquery.colorbox.js`、`freo/js/jquery.tablesorter.js`、`freo/images/colorbox/`、`freo/tinymce/` は不要のため削除済み
- **markItUp!**<br>[テキストエディタをTinyMCEからmarkItUp!に変更する](https://freo.jp/document/customize/markitup.html)場合のJSやテンプレートの差替ファイル（差替用 `freo/templates/internals/admin/footer.html` を追加<br>※同梱しているmarkItUp!本体は最新版にし、さらに[拡張版](https://cccabinet.jpn.org/view/102)（一部を除く）を導入済み<br>:bulb:**一旦freo本体を設置してから上書きして差替えて下さい**（`freo/js/tinymce/` は不要なので削除してもOK）
- **plugins**<br>[freoの公式サイトで配布されているプラグイン](https://freo.jp/plugin/)（ファイル管理プラグインとショッピングカート系プラグインを除く）
- **plugins_catalog**<br>[ショッピングカートプラグイン](https://freo.jp/plugin/catalog.html)と関連のプラグインファイル（差替用 `catalog/templates/footer.html`、`catalog/templates/utility.html`、`catalog/templates/internals/admin/footer.html`、`catalog_order/templates/internals/user/default.html` を追加）<br>:bulb:ショッピングカートプラグインはシェアウェアなので、他のプラグインのテンプレートと分けています
- **template_custom**<br>[freoでサイト全体を管理する](https://freo.jp/document/customize/custom.html)ためのテンプレートファイル、CSSファイル<br>※ギャラリーのページ用ユーティリティテンプレートも追加<br>:bulb:**一旦freo本体を設置してから上書きして差替えて下さい**

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

:bulb:**[freoカスタマイズ版のREADME.md](https://github.com/cccabinet/freo_customize#readme)のカスタマイズの内容も合わせて参照してください。**