function check()
{
        var name = document.calc.name1.value;
        var debit1=document.calc.debit1.value;
        if(name.length<1)
        {
                alert("Enter name");
        }
        var card = /^(?:[1-9]{1}[0-9]{15})$/;
        if (!(debit1.match(card)))
        {
                alert("Enter 16 digits debit card number.");
        }
      
        var month1 = document.calc.m1.value;
        if(month1<1 || month1>12)
        {
            alert("check Month value");
        }
        var year1 = document.calc.yr1.value;
        {
            if(year1.length!=2)
            {
                alert("check year value");
            }
        }
}
