<?php
	$user = json_decode(file_get_contents('php://input')); // get data from json header
	if ($user->mail=="my.meddah@gmail.com" && $user->pwd=="admin") {
		echo "success";
	} else {
		echo "fail";
	}
?>