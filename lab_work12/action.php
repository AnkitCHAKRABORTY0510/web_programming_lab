<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>submitted doc</title>
</head>
<body>
<?php
    $X=$_POST["integer1"];
    posneg($X);
    echo"<br> <br><br>";

    $y=$_POST["integer2"];
    prime($y);
    echo"<br> <br><br>";

    $z=$_POST["integer3"];
    fibonicci($z);
    echo"<br> <br><br>";
    function posneg($x)
    {
        if($x>0)
        echo "$x"." is positive";
        else if($x<0)
        echo "$x"." is negative";
        else
        echo "$x"." is neither negative nor positive";
    }
    
    function prime($y)
    {
        if($y<1)
        {
            echo "$y"." is neither prime nor composite";
        }
        else
        {
            $count=0;
            for($i=1;$i<$y;$i++)
            {
                if($y % $i===0)
                {
                    $count++;
                }
                if ($count===2)
                {
                    echo "$y". " is composite"; 
                    break;
                }
            }
            if ($count===1)
            {
                echo "$y". " is prime"; 
            }
        }
    }

    function fibonicci($z)
    {
        $x=0;
        $y=1;
        echo "$x";
        for($i=0;$i<$z-1;$i++)
        {
            echo ","."$y";
            $temp=$y;
            $y=$x+$y;
            $x=$temp;
        }
    }
    
?>


    
    
</body>
</html>