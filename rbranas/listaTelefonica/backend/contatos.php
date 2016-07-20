<?php
date_default_timezone_set('America/Sao_Paulo');
function pr($var){
	echo '<pre>';
	print_r($var);
	echo '</pre>';
}
$contatos = json_decode(file_get_contents("contatos.json"));
$post = file_get_contents("php://input");
if(!empty($post)){
	$contato = json_decode($post);
	$maxId = 0;
	foreach ($contatos as $contato) {
		$maxId = $contato->id > $maxId ? $contato->id: $maxId;
	}
	$contato->id = ++$maxId;
	array_push($contatos, $contato);
	file_put_contents('contatos.json',json_encode($contatos));
}
if($_GET['id']){
	foreach ($contatos as $contato) {
		if($contato->id == $_GET['id']){
			echo json_encode($contato);
		}
	}
}
