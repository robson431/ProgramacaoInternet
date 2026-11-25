<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questão 8</title>
</head>
<body>
    <form action="">
        <input name="txt" type="text">
          <input type="submit" value="Calcular">
    </form>

    <p>Resultado: </p>

    <?php  
        $texto = $_GET['txt'];

        function calcular($texto) {
            $exp = explode(" ", $texto);
            $soma = 0;

            for ($i = 0; $i < count($exp); $i++) {
                $soma = $soma + floatval($exp[$i]);
            }

            return $soma;s
        }
            echo calcular($texto);
    ?>
</body>
</html>
