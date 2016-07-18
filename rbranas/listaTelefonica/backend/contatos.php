<?php
date_default_timezone_set('America/Sao_Paulo');
$contatos = json_decode(file_get_contents("contatos.json"));
$post = file_get_contents("php://input");
if(!empty($post)){
	$contato = json_decode($post);
	$contato->data = time();
	array_push($contatos, $contato);
	file_put_contents('contatos.json',json_encode($contatos));
}
