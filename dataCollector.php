<?php

$var = $_GET["do"];
response = array("meow"=>$var);
$file = 'session.json';
file_put_contents($file, json_encode($response, JSON_PRETTY_PRINT));

?>
