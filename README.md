# freoをあれこれカスタマイズ（ファイル更新差替版）

### 各リリースバージョンの説明
- [main：フルバージョン](https://github.com/cccabinet/freo_customize/tree/main)<br>モバイル用テンプレートを除く全ファイルを収納
- [diff：差替版](https://github.com/cccabinet/freo_customize/tree/diff)<br>変更のあったファイルのみを収納
- [admin：管理画面版](https://github.com/cccabinet/freo_customize/tree/admin)<br>管理用関連ファイルのみを収納
- [responsive：レスポンシブ版](https://github.com/cccabinet/freo_customize/tree/responsive)<br>バグ修正、JSプラグインの更新、レスポンシブに対応したモバイル用テンプレートを除く全ファイルを収納
- **responsive_diff：レスポンシブ差替版**（←現在のバージョン）<br>バグ修正やJSプラグインの更新、レスポンシブに対応をして変更のあったファイルのみを収納

## ファイル構成
<pre><code>freo_customize/
├── freo/
│   ├── css/
│   │   ├── admin.css（管理画面用）
│   │   └── iframe.css（インラインフレーム用）
│   ├── images/
│   │   └── tablesorter/（tablesorter用のファイルを差替）
│   ├── js/
│   │   ├── tinymce/ (TinyMCE用のファイルを追加）
│   │   │   ├── langs/ja.js（日本語表記ファイル）
│   │   │   └── plugins/
│   │   │       ├── freomedia/（freoメディア管理プラグイン）
│   │   │       └── freomediaform/（freoメディア登録プラグイン）
│   │   ├── admin.js（管理画面用）
│   │   ├── default.js（初期画面用）
│   │   └── iframe.js（インラインフレーム用）
│   ├── libs/
│   │   ├── freo/
│   │   │   ├── internals/
│   │   │   │   ├── admin/
│   │   │   │   │   ├── entry_form.php（管理画面用エントリー入力ファイル）
│   │   │   │   │   ├── media.php（管理画面用メディア管理ファイル）
│   │   │   │   │   ├── media_delete.php（管理画面用メディア削除ファイル）
│   │   │   │   │   └── page_form.php（管理画面用ページ入力ファイル）
│   │   │   │   ├── comment/post.php（コメント登録用ファイル）
│   │   │   │   ├── file/default.php（ファイル表示用ファイル）
│   │   │   │   └── setup/default.php（セットアップ画面用ファイル）
│   │   │   ├── plugins/
│   │   │   │   ├── config.filemanager.php（ファイル管理プラグインの設定ファイルを追加）
│   │   │   │   ├── display.entry_calender.php（エントリーカレンダー表示プラグインの表示ファイル）
│   │   │   │   ├── display.entry_gallery.php（エントリーギャラリー表示プラグインの表示ファイル）
│   │   │   │   ├── page.entry_gallery.php（エントリーギャラリー表示プラグインのページファイル）
│   │   │   │   └── page.filemanager.php（ファイル管理プラグインのページファイルを追加）
│   │   │   ├── checker.php（PHP仕様確認ファイル）
│   │   │   ├── common.php（共通関数ファイル）
│   │   │   ├── initialize.php（初期化処理ファイル）
│   │   │   ├── pictogram.php（絵文字関数ファイル）
│   │   │   ├── prepare.php（設定編集ファイル）
│   │   │   ├── transfer.php（セッションID自動付加関数ファイル）
│   │   │   └── version.php（バージョン情報ファイル）
│   │   └── smarty/
│   │       └── plugins/（Smarty用プラグインを追加）
│   └── templates/
│       ├── internals/
│       │   ├── admin/
│       │   │   ├── entry_form.html（エントリー管理画面テンプレート）
│       │   │   ├── entry_preview.html（エントリープレビュー表示用テンプレート差替）
│       │   │   ├── footer.html（管理画面フッタテンプレート）
│       │   │   ├── header.html（管理画面ヘッダテンプレート）
│       │   │   ├── iframe_header.html（インラインフレームヘッダテンプレート）
│       │   │   ├── iframe_madia_form.html（インラインフレームメディア登録/編集テンプレート）
│       │   │   ├── information_form.html（インフォメーション管理画面テンプレート）
│       │   │   ├── information_preview.html（インフォメーションプレビュー表示用テンプレート差替）
│       │   │   ├── madia_form.html（メディア登録/編集テンプレート）
│       │   │   ├── page_form.html（ページ管理画面テンプレート）
│       │   │   └── page_preview.html（ページプレビュー表示用テンプレート差替）
│       │   ├── default/default.html（トップ表示用テンプレート）
│       │   ├── file/password.html（ファイル表示パスワード画面テンプレート）
│       │   ├── page/default.html（ページ表示用テンプレート）
│       │   └── view/default.html（個別エントリー表示用テンプレート）
│       ├── plugins/
│       │   ├── filemanager/（ファイル管理プラグインのテンプレートを追加）
│       │   └── setup.html（セットアップ画面のテンプレート）
│       ├── error.html（エラー画面のテンプレート）
│       ├── footer.html（フッタのテンプレート）
│       └── header.html（ヘッダのテンプレート）
│
├── markItUp!/
│   ├── freo/
│   │   ├── js/
│   │   │   ├── admin.js（管理画面差替用）
│   │   │   └── iframe.js（インラインフレーム差替用）
│   │   ├── markitup/（markItUp!関連ファイルを差替・追加）
│   │   └── templates/internals/admin/
│   │       ├── entry_form.html（エントリー登録/編集の差替テンプレート）
│   │       ├── header.html（管理用ヘッダの差替テンプレート）
│   │       ├── information_form.html（インフォメーション登録/編集の差替テンプレート）
│   │       └── page_form.html（ページ登録/編集の差替テンプレート）
│   └── plugins/
│       └── clap/【拍手送信プラグイン】
│           └── templates/plugins/clap/admin_thank_form.html（お礼登録/編集の差替テンプレート）
│
├── plugins/
│   ├── bookmark/templates/plugins/bookmark/【ブックマーク登録プラグイン】
│   │   └── default.html（ブックマーク一覧表示テンプレート）
│   ├── circle/templates/plugins/circle/【サークル管理プラグイン】
│   │   └── form.html（ユーザー用サークル編集テンプレート）
│   ├── clap/templates/plugins/clap/【拍手送信プラグイン】
│   │   ├── admin_text.html（拍手メッセージ管理テンプレート）
│   │   └── admin_thank_form.html（お礼登録/編集テンプレート）
│   ├── entry_tagmanager/【エントリータグ管理プラグイン】
│   │   └── libs/freo/plugins/
│   │        ├── config.entry_tagmanager.php（設定ファイル）
│   │        └── end.entry_tagmanager.php（処理終了後表示ファイル）
│   ├── form/templates/plugins/form/【フォーム管理プラグイン】
│   │   ├── admin_form.html（フォーム登録/編集テンプレート）
│   │   ├── form.html（送信フォーム表示テンプレート）
│   │   └── iframe_header.html（インラインフレームヘッダテンプレート）
│   ├── media_comic/templates/plugins/media_comic/【漫画表示プラグイン】
│   │   └── default.html（漫画表示テンプレート）
│   ├── menu/templates/plugins/menu/【メニュー登録プラグイン】
│   │   └── admin.html（メニュー管理テンプレート）
│   ├── page_calender/【ページカレンダー表示プラグイン】
│   │   └── libs/freo/plugins/display.page_calender.php（表示ファイル）
│   ├── page_tagmanager/【ページタグ管理プラグイン】
│   │   └── libs/freo/plugins/
│   │        ├── config.page_tagmanager.php（設定ファイル）
│   │        └── end.page_tagmanager.php（処理終了後表示ファイル）
│   ├── pixiv_illust/【pixivイラスト表示プラグイン】
│   ├── pixiv_novel/【pixiv小説表示プラグイン】
│   ├── profile/templates/plugins/profile/【プロフィール拡張プラグイン】
│   │   ├── admin_form.html（プロフィール編集テンプレート）
│   │   └── form.html（ユーザー用プロフィール編集テンプレート）
│   └── task/templates/plugins/task/【タスク登録プラグイン】
│       └── admin_view.html（タスク確認テンプレート）
│
├── plugins_catalog/
│   ├── catalog/templates/plugins/catalog/【ショッピングカートプラグイン】
│   │   ├── admin.html（商品管理テンプレート）
│   │   ├── admin_delivery_prefecture_form.html（地域別送料編集テンプレート）
│   │   ├── admin_form.html（商品登録/編集テンプレート）
│   │   ├── iframe_header.html（インラインフレームヘッダテンプレート）
│   │   ├── order.html（商品注文テンプレート）
│   │   └── order_preview.html（商品注文確認テンプレート）
│   └── catalog_order/templates/plugins/catalog_order/【注文管理プラグイン】
│       ├── admin.html（注文管理テンプレート）
│       ├── admin_order_form.html（注文登録/編集テンプレート）
│       ├── admin_order_print.html（納品書印刷テンプレート）
│       ├── admin_user_form.html（注文者編集テンプレート）
│       └── form.html（注文者情報編集テンプレート）
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
- **freo**<br>freo（v1.21.0）本体のうち、更新のあった `css/`、`images/`、`js/`、`libs/`、`templates/` のファイルに[ファイル管理プラグイン](https://freo.jp/plugin/filemanager.html)と[Smarty用プラグイン](https://freo.jp/plugin/smarty/index.html)を追加し、[プレビュー表示を訪問者向けの表示](https://freo.jp/document/customize/preview.html)のテンプレートに差替<br>※`freo/css/colorbox.css`、`freo/js/jquery.js`、`freo/js/jquery.colorbox.js`、`freo/js/jquery.tablesorter.js`、`freo/images/colorbox/`、`freo/tinymce/` は不要なので差し替える場合は同ファイルを削除してもOK<br>:bulb:**freo本体を設置したものに上書きして差替えて下さい**
- **markItUp!**<br>[テキストエディタをTinyMCEからmarkItUp!に変更する](https://freo.jp/document/customize/markitup.html)場合のJSやテンプレートの差替ファイル<br>※同梱しているmarkItUp!本体は最新版にし、さらに[拡張版](https://cccabinet.jpn.org/view/102)（一部を除く）を導入済み<br>:bulb:**一旦freo本体の差替版を設置してから上書きして差替えて下さい**（`freo/js/tinymce/` は不要なので削除してもOK）
- **plugins**<br>[freoの公式サイトで配布されているプラグイン](https://freo.jp/plugin/)（ファイル管理プラグインとショッピングカート系プラグインを除く）のテンプレートファイルなど<br>:bulb:**プラグイン本体を設置したものに上書きして差替えて下さい**
- **plugins_catalog**<br>[ショッピングカートプラグイン](https://freo.jp/plugin/catalog.html)と[注文管理プラグイン](https://freo.jp/plugin/catalog_order.html)のテンプレートファイル<br>:bulb:ショッピングカートプラグインはシェアウェアなので、他のプラグインのテンプレートと分けています<br>:bulb:**プラグイン本体を設置したものに上書きして差替えて下さい**
- **template_custom**<br>[freoでサイト全体を管理する](https://freo.jp/document/customize/custom.html)ためのテンプレートファイル、CSSファイル<br>※ギャラリーのページ用ユーティリティテンプレートも追加<br>:bulb:**一旦freo本体の差替版を設置してから上書きして差替えて下さい**

## カスタマイズの内容
### バグの修正やファイルの追加
- GitHubの[freo本体のPRの修正](https://github.com/refirio/freo/pulls)、[freo公式プラグインのPRの修正](https://github.com/refirio/freo-plugins/pulls)も追加
- 追加のバグ修正
  - [カレンダーの祝日定義の変更・延長](https://cccabinet.jpn.org/view/104)<br>エントリーカレンダー表示プラグイン、[ページーカレンダー表示プラグイン](https://freo.jp/plugin/page_calender.html)の祝日定義は2020年までしかないので2050年までに延長<br>※ [【修正】freoをphp7以上でエラーが起こらないように修正](https://github.com/refirio/freo/pull/11)の修正も両プラグインに追加済み
    - 2016年以降、山の日の追加
    - 2019年の改元による休日の追加や天皇誕生日の変更
    - 2020年、2021年の東京五輪開催・延期に伴う祝日の移動
    - ※データ元：100年分の祝日リスト（2021年7月以降の変更に対応）<br>　https://zangyoukeisan.cocolog-nifty.com/blog/2011/09/post-b23f.html
  - 認証フォームのパスワード入力欄の修正<br>パスワード入力欄を `input type="text"` から `input type="password"` に修正
  - [ショッピングカートプラグイン](https://freo.jp/plugin/catalog.html)の商品配送方法・料金などの変更<br>※すでにプラグインを導入済みの場合は[sqlファイルをダウンロード](https://cccabinet.jpn.org/view/106)してインポートしてください
    - 普通郵便に定形外郵便（規格内・規格外それぞれ250gまで）を追加<br>※規格内とは、長辺34cm以内、短辺25cm以内、厚さ3cm以内および重量1kg以内のもの
    - 配送方法に日本郵便の[ゆうメール](https://www.post.japanpost.jp/service/yu_mail/)、[ゆうパケット](https://www.post.japanpost.jp/service/yu_packet/index.html)、[クリックポスト](https://www.post.japanpost.jp/service/clickpost/index.html)【未使用に設定済】、[スマートレター](https://www.post.japanpost.jp/service/smartletter/)【未使用に設定済】を追加（未使用のものは状態を「使用」に変更してから使用してください）<br>※クリックポストは事前に利用者情報の登録手続が必要
    - 配送方法にヤマト運輸の[ネコポス](https://business.kuronekoyamato.co.jp/service/lineup/nekoposu/)【未使用に設定済】と[宅急便コンパクト](https://business.kuronekoyamato.co.jp/service/lineup/takkyubin_compact/index.html)【未使用に設定済】を追加（料金などの設定を自分に合わせてから状態を「使用」に変更して使用してください）
    - ヤマト運輸のメール便（mail_10, mail_20）が、2015年3月で廃止されたので未使用に変更
    - 料金が2019年10月に値上げされたので変更
    - ゆうパック（60サイズ）とゆうパック（80サイズ）の地域別送料を2019年10月に消費税が10%になったのに伴い値上げされたので変更（それぞれ東京都から差し出した場合の基本料金）
    - 支払い方法に[宅急便コレクト](https://business.kuronekoyamato.co.jp/service/lineup/payment_daibiki/?gclid=CjwKCAiAvriMBhAuEiwA8Cs5lQnzAWhgtTZttg-Vi_6pzSILK34zo91YkfOGC9UjzVdJ9Z2nBuZNjhoCZEMQAvD_BwE)（ヤマト運輸の法人向け代金引換サービス）を追加
  - フッタのfreo.jpのリンクURLを http://freo.jp から https://freo.jp に変更
  - ファイル管理プラグインの管理対象除外ディレクトリの変更<br>TinyMCEの入っているフォルダがTinyMCE4で `tiny_mce` から `tinymce` に変更になったので変更
- [ファイル管理プラグイン](https://freo.jp/plugin/filemanager.html)を標準で導入
- freoの公式サイトで配布されている[Smarty用プラグイン](https://freo.jp/plugin/smarty/index.html)を標準で導入
- エントリー・ページ・インフォメーション登録時の[プレビュー表示を訪問者向けの表示](https://freo.jp/document/customize/preview.html)に差替
### JSプラグインの更新とCDN化
- jQuery、ColorBox、tablesorter（非公式フォーク版）、TinyMCE、markItUp!を最新版に更新<br>さらにjQuery、ColorBox、tablesorter、TinyMCEはCDNで読み込み設定済み（旧版のファイルは削除済み）
  - [ColorBoxのレスポンシブ設定](https://cccabinet.jpn.org/view/65)
  - [メディアの挿入ファイルを更新日時順に](https://cccabinet.jpn.org/view/96)
  - [freoにTinyMCE5を導入する](https://cccabinet.jpn.org/view/103)<br>カラーパレットも調整（基本の16カラー+オレンジ+文字色）
  - [メディア管理/メディア登録をTinyMCEのプラグインにする](https://cccabinet.jpn.org/view/105)
  - [TinyMCEのモバイル表示に対応](https://cccabinet.jpn.org/view/101)
  - [markItUp!の設定を調整](https://cccabinet.jpn.org/view/102)<br>カラーパレットも調整（基本の16カラー+オレンジ+文字色）
### レスポンシブに対応
- 表示用の画面だけでなく、管理用画面もレスポンシブ表示に対応<br>ビューポート480px以下の場合は、ユーティリティと管理メニュー画面は簡易的にボタンで開閉可能に
