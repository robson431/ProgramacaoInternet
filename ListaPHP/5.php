<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random</title>
</head>
<body>
    <?php

    if(isset($_GET["min"]) && isset($_GET["max"]) ) {

        $min = $_GET["min"];
        $max = $_GET["max"];
        echo rand ($min, $max);

    }

?>

<form action = "">

<label for="min">Minimo</label>
<input name="min" type="number">

<label for="max">Maximo</label>
<input name="max" type="number">

<input type="submit">

</form>


</body>
</html>