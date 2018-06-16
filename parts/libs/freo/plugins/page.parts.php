<?php

/*********************************************************************

 ブログパーツ管理プラグイン (2013/04/14)

 Copyright(C) 2009-2013 freo.jp

*********************************************************************/

/* メイン処理 */
function freo_page_parts()
{
	global $freo;

	switch ($_REQUEST['freo']['work']) {
		case 'setup':
			freo_page_parts_setup();
			break;
		case 'setup_execute':
			freo_page_parts_setup_execute();
			break;
		case 'admin':
			freo_page_parts_admin();
			break;
		case 'admin_form':
			freo_page_parts_admin_form();
			break;
		case 'admin_post':
			freo_page_parts_admin_post();
			break;
		case 'admin_update':
			freo_page_parts_admin_update();
			break;
		case 'admin_delete':
			freo_page_parts_admin_delete();
			break;
		default:
			freo_page_parts_default();
	}

	return;
}

/* セットアップ */
function freo_page_parts_setup()
{
	global $freo;

	//ログイン状態確認
	if ($freo->user['authority'] != 'root' and $freo->user['authority'] != 'author') {
		freo_redirect('login', true);
	}

	//リクエストメソッドに応じた処理を実行
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		//ワンタイムトークン確認
		if (!freo_token('check')) {
			$freo->smarty->append('errors', '不正なアクセスです。');
		}

		//エラー確認
		if (!$freo->smarty->get_template_vars('errors')) {
			freo_redirect('parts/setup_execute?freo%5Btoken%5D=' . freo_token('create'), true);
		}
	}

	//データ割当
	$freo->smarty->assign(array(
		'token'       => freo_token('create'),
		'plugin_id'   => 'parts',
		'plugin_name' => FREO_PLUGIN_PARTS_NAME
	));

	//データ出力
	freo_output('plugins/setup.html');

	return;
}

/* セットアップ | セットアップ実行 */
function freo_page_parts_setup_execute()
{
	global $freo;

	//ログイン状態確認
	if ($freo->user['authority'] != 'root' and $freo->user['authority'] != 'author') {
		freo_redirect('login', true);
	}

	//ワンタイムトークン確認
	if (!freo_token('check')) {
		freo_redirect('setup?error=1', true);
	}

	//データベーステーブル存在検証
	if (FREO_DATABASE_TYPE == 'mysql') {
		$query = 'SHOW TABLES';
	} else {
		$query = 'SELECT name FROM sqlite_master WHERE type = \'table\'';
	}
	$stmt = $freo->pdo->query($query);
	if (!$stmt) {
		freo_error($freo->pdo->errorInfo());
	}

	$table = array();
	while ($data = $stmt->fetch(PDO::FETCH_NUM)) {
		$table[$data[0]] = true;
	}

	//データベーステーブル定義
	if (FREO_DATABASE_TYPE == 'mysql') {
		$queries = array(
			'plugin_parts' => '(id VARCHAR(80) NOT NULL, created DATETIME NOT NULL, modified DATETIME NOT NULL, status VARCHAR(20) NOT NULL, sort INT UNSIGNED NOT NULL, name VARCHAR(255) NOT NULL, text TEXT NOT NULL, PRIMARY KEY(id))'
		);
	} else {
		$queries = array(
			'plugin_parts' => '(id VARCHAR NOT NULL, created DATETIME NOT NULL, modified DATETIME NOT NULL, status VARCHAR NOT NULL, sort INTEGER UNSIGNED NOT NULL, name VARCHAR NOT NULL, text TEXT NOT NULL, PRIMARY KEY(id))'
		);
	}

	//データベーステーブル作成
	foreach ($queries as $name => $query) {
		if (empty($table[FREO_DATABASE_PREFIX . $name])) {
			$stmt = $freo->pdo->query('CREATE TABLE ' . FREO_DATABASE_PREFIX . $name . $query);
			if (!$stmt) {
				freo_error($freo->pdo->errorInfo());
			}
		}
	}

	//ログ記録
	freo_log(FREO_PLUGIN_PARTS_NAME . 'のセットアップを実行しました。');

	//完了画面へ移動
	freo_redirect('parts/setup?exec=setup', true);

	return;
}

/* 管理画面 | ブログパーツ管理 */
function freo_page_parts_admin()
{
	global $freo;

	//ログイン状態確認
	if ($freo->user['authority'] != 'root' and $freo->user['authority'] != 'author') {
		freo_redirect('login', true);
	}

	//データ割当
	$freo->smarty->assign(array(
		'token' => freo_token('create')
	));

	return;
}

/* 管理画面 | ブログパーツ入力 */
function freo_page_parts_admin_form()
{
	global $freo;

	//ログイン状態確認
	if ($freo->user['authority'] != 'root' and $freo->user['authority'] != 'author') {
		freo_redirect('login', true);
	}

	//パラメータ検証
	if (!isset($_GET['id']) or !preg_match('/^[\w\-\/]+$/', $_GET['id'])) {
		$_GET['id'] = null;
	}

	//リクエストメソッドに応じた処理を実行
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		//ワンタイムトークン確認
		if (!freo_token('check')) {
			$freo->smarty->append('errors', '不正なアクセスです。');
		}

		//入力データ検証
		if (!$freo->smarty->get_template_vars('errors')) {
			//ブログパーツID
			if ($_POST['plugin_parts']['id'] == '') {
				$freo->smarty->append('errors', 'ブログパーツIDが入力されていません。');
			} elseif (!preg_match('/^[\w\-\/]+$/', $_POST['plugin_parts']['id'])) {
				$freo->smarty->append('errors', 'ブログパーツIDは半角英数字で入力してください。');
			} elseif (preg_match('/^\d+$/', $_POST['plugin_parts']['id'])) {
				$freo->smarty->append('errors', 'ブログパーツIDには半角英字を含んでください。');
			} elseif (mb_strlen($_POST['plugin_parts']['id'], 'UTF-8') > 80) {
				$freo->smarty->append('errors', 'ブログパーツIDは80文字以内で入力してください。');
			} elseif (!$_GET['id']) {
				$stmt = $freo->pdo->prepare('SELECT * FROM ' . FREO_DATABASE_PREFIX . 'plugin_parts WHERE id = :id');
				$stmt->bindValue(':id', $_POST['plugin_parts']['id']);
				$flag = $stmt->execute();
				if (!$flag) {
					freo_error($stmt->errorInfo());
				}

				if ($data = $stmt->fetch(PDO::FETCH_ASSOC)) {
					$freo->smarty->append('errors', '入力されたブログパーツIDはすでに使用されています。');
				}
			}

			//状態
			if ($_POST['plugin_parts']['status'] == '') {
				$freo->smarty->append('errors', '状態が入力されていません。');
			}

			//並び順
			if ($_POST['plugin_parts']['sort'] == '') {
				$freo->smarty->append('errors', '並び順が入力されていません。');
			} elseif (!preg_match('/^\d+$/', $_POST['plugin_parts']['sort'])) {
				$freo->smarty->append('errors', '並び順は半角数字で入力してください。');
			} elseif (mb_strlen($_POST['plugin_parts']['sort'], 'UTF-8') > 10) {
				$freo->smarty->append('errors', '並び順は10文字以内で入力してください。');
			}

			//名前
			if ($_POST['plugin_parts']['name'] == '') {
				$freo->smarty->append('errors', '名前が入力されていません。');
			} elseif (mb_strlen($_POST['plugin_parts']['name'], 'UTF-8') > 80) {
				$freo->smarty->append('errors', '名前は80文字以内で入力してください。');
			}

			//内容
			if ($_POST['plugin_parts']['text'] == '') {
				$freo->smarty->append('errors', '内容が入力されていません。');
			} elseif (mb_strlen($_POST['plugin_parts']['text'], 'UTF-8') > 50000) {
				$freo->smarty->append('errors', '内容は50000文字以内で入力してください。');
			}
		}

		//エラー確認
		if ($freo->smarty->get_template_vars('errors')) {
			//エラー表示
			$plugin_parts = $_POST['plugin_parts'];
		} else {
			$_SESSION['input'] = $_POST;

			//登録処理へ移動
			freo_redirect('parts/admin_post?freo%5Btoken%5D=' . freo_token('create') . ($_GET['id'] ? '&id=' . $_GET['id'] : ''));
		}
	} else {
		if ($_GET['id']) {
			//編集データ取得
			$stmt = $freo->pdo->prepare('SELECT * FROM ' . FREO_DATABASE_PREFIX . 'plugin_parts WHERE id = :id');
			$stmt->bindValue(':id', $_GET['id']);
			$flag = $stmt->execute();
			if (!$flag) {
				freo_error($stmt->errorInfo());
			}

			if ($data = $stmt->fetch(PDO::FETCH_ASSOC)) {
				$plugin_parts = $data;
			} else {
				freo_error('指定されたブログパーツが見つかりません。', '404 Not Found');
			}
		} else {
			//並び順初期値取得
			$stmt = $freo->pdo->query('SELECT MAX(sort) FROM ' . FREO_DATABASE_PREFIX . 'plugin_parts');
			if (!$stmt) {
				freo_error($freo->pdo->errorInfo());
			}
			$data = $stmt->fetch(PDO::FETCH_NUM);
			$sort = $data[0] + 1;

			//新規データ設定
			$plugin_parts = array(
				'sort' => $sort
			);
		}
	}

	//データ割当
	$freo->smarty->assign(array(
		'token' => freo_token('create'),
		'input' => array(
			'plugin_parts' => $plugin_parts
		)
	));

	return;
}

/* 管理画面 | ブログパーツ登録 */
function freo_page_parts_admin_post()
{
	global $freo;

	//ログイン状態確認
	if ($freo->user['authority'] != 'root' and $freo->user['authority'] != 'author') {
		freo_redirect('login', true);
	}

	//入力データ確認
	if (empty($_SESSION['input'])) {
		freo_redirect('parts/admin?error=1');
	}

	//ワンタイムトークン確認
	if (!freo_token('check')) {
		freo_redirect('parts/admin?error=1');
	}

	//入力データ取得
	$parts = $_SESSION['input']['plugin_parts'];

	//データ登録
	if (isset($_GET['id'])) {
		$stmt = $freo->pdo->prepare('UPDATE ' . FREO_DATABASE_PREFIX . 'plugin_parts SET modified = :now, status = :status, sort = :sort, name = :name, text = :text WHERE id = :id');
		$stmt->bindValue(':now',    date('Y-m-d H:i:s'));
		$stmt->bindValue(':status', $parts['status']);
		$stmt->bindValue(':sort',   $parts['sort'], PDO::PARAM_INT);
		$stmt->bindValue(':name',   $parts['name']);
		$stmt->bindValue(':text',   $parts['text']);
		$stmt->bindValue(':id',     $parts['id']);
		$flag = $stmt->execute();
		if (!$flag) {
			freo_error($stmt->errorInfo());
		}
	} else {
		$stmt = $freo->pdo->prepare('INSERT INTO ' . FREO_DATABASE_PREFIX . 'plugin_parts VALUES(:id, :now1, :now2, :status, :sort, :name, :text)');
		$stmt->bindValue(':id',     $parts['id']);
		$stmt->bindValue(':now1',   date('Y-m-d H:i:s'));
		$stmt->bindValue(':now2',   date('Y-m-d H:i:s'));
		$stmt->bindValue(':status', $parts['status']);
		$stmt->bindValue(':sort',   $parts['sort'], PDO::PARAM_INT);
		$stmt->bindValue(':name',   $parts['name']);
		$stmt->bindValue(':text',   $parts['text']);
		$flag = $stmt->execute();
		if (!$flag) {
			freo_error($stmt->errorInfo());
		}
	}

	//入力データ破棄
	$_SESSION['input'] = array();

	//ログ記録
	if (isset($_GET['id'])) {
		freo_log('ブログパーツを編集しました。');
	} else {
		freo_log('ブログパーツを新規に登録しました。');
	}

	//ブログパーツ管理へ移動
	if (isset($_GET['id'])) {
		freo_redirect('parts/admin?exec=update&id=' . $parts['id']);
	} else {
		freo_redirect('parts/admin?exec=insert');
	}

	return;
}

/* 管理画面 | ブログパーツ一括編集 */
function freo_page_parts_admin_update()
{
	global $freo;

	//ログイン状態確認
	if ($freo->user['authority'] != 'root' and $freo->user['authority'] != 'author') {
		freo_redirect('login', true);
	}

	//ワンタイムトークン確認
	if (!freo_token('check')) {
		freo_redirect('parts/admin?error=1');
	}

	//データ登録
	if (isset($_POST['sort'])) {
		foreach ($_POST['sort'] as $id => $sort) {
			if (!preg_match('/^[\w\-\/]+$/', $id)) {
				continue;
			}
			if (!preg_match('/^\d+$/', $sort)) {
				continue;
			}

			$stmt = $freo->pdo->prepare('UPDATE ' . FREO_DATABASE_PREFIX . 'plugin_parts SET sort = :sort WHERE id = :id');
			$stmt->bindValue(':sort', $sort, PDO::PARAM_INT);
			$stmt->bindValue(':id',   $id);
			$flag = $stmt->execute();
			if (!$flag) {
				freo_error($stmt->errorInfo());
			}
		}
	}

	//ログ記録
	freo_log('ブログパーツを並び替えました。');

	//お礼管理へ移動
	freo_redirect('parts/admin?exec=sort');

	return;
}

/* 管理画面 | ブログパーツ削除 */
function freo_page_parts_admin_delete()
{
	global $freo;

	//ログイン状態確認
	if ($freo->user['authority'] != 'root' and $freo->user['authority'] != 'author') {
		freo_redirect('login', true);
	}

	//パラメータ検証
	if (!isset($_GET['id']) or !preg_match('/^[\w\-\/]+$/', $_GET['id'])) {
		freo_redirect('parts/admin?error=1');
	}

	//ワンタイムトークン確認
	if (!freo_token('check')) {
		freo_redirect('parts/admin?error=1');
	}

	//ブログパーツ削除
	$stmt = $freo->pdo->prepare('DELETE FROM ' . FREO_DATABASE_PREFIX . 'plugin_parts WHERE id = :id');
	$stmt->bindValue(':id', $_GET['id']);
	$flag = $stmt->execute();
	if (!$flag) {
		freo_error($stmt->errorInfo());
	}

	//ログ記録
	freo_log('ブログパーツを削除しました。');

	//ブログパーツ管理へ移動
	freo_redirect('parts/admin?exec=delete&id=' . $_GET['id']);

	return;
}

/* ブログパーツ一覧 */
function freo_page_parts_default()
{
	global $freo;

	freo_redirect('parts/admin');

	return;
}

?>
