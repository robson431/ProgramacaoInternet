<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="">
    <label for="numero">Numero: </label>
    <input name="numero" type="number">

</form>
    
<?php
$numero=$_GET['numero'];    


function ePar($numero){
if($numero % 2 == 0){
    echo "é par";

}else{
    echo "é impar";
}
}
ePar($numero);

?>
</body>

</html>