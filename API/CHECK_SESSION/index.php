<?php
	if (isset($_GET['user'])){
		session_start();
		if (isset($_SESSION['user'])){
			if ($_GET['user'] == $_SESSION['user']) echo $_GET['user'];
		}
	}
?>