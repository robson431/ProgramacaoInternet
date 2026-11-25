<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada</title>
</head>
<body>
    <form action="">
        <label for="numero">Numero: </label>
        <input name="numero" type="number">

    </form>
    <?php 
        if(!isset($_GET['numero'])){
            exit();
        }
        $num = $_GET['numero'];

    function tabuada($num){
        for($i = 1; $i < 10; $i++){
            $res = $num * $i;
            echo "$num x $i = $res";
            echo "<br>";
        }
    }
    tabuada($num);

    ?>
</body>
</html>