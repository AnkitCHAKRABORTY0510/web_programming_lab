function conc()
{
    let a=["ANKIT","CHAKRABORTY"];
    let b=[1,2,3];
    ab=a.concat(b);
    document.getElementById("output1").innerHTML = ab; 
}

function jointhis()
{
    let a=[1,2,3,4];
    joina=a.join("");
    document.getElementById("output2").innerHTML = joina; 

}

function indexofarray()
{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let x=fruits.indexOf("Apple")
    document.getElementById("output3").innerHTML=x; 

}

function sort()
{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let x=fruits.sort();
    document.getElementById("output4").innerHTML=x; 

}

function pushthis()
{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("cherry");
    document.getElementById("output5").innerHTML=fruits; 

}

function CHARAT()
{
    let a="Ankit";
    a=a.charAt(0);
    document.getElementById("output6").innerHTML=a; 
}

function INDEXOF()
{
    let a="Ankit";
    a=a.indexOf("k");
    document.getElementById("output7").innerHTML=a; 
}

function STRING_concat()
{
    let a="ankit ";
    let b="Chakraborty";
    a=a.concat(b);
    document.getElementById("output8").innerHTML=a;
}

function FIND_MATCH()
{
    let a="ankit ";
    let b="Chakraborty";
    a=a.concat(b);
    result=a.match("Chak");
    document.getElementById("output9").innerHTML=result;
}
function REPLACE()
{
    let text = "Mr Blue has a blue house and a blue car";
    let result = text.replace("blue", "red");
    document.getElementById("output10").innerHTML=result;
}

function GETTIME()
{   let d = new Date();
    let time = d.getTime();
    document.getElementById("output11").innerHTML=time;
}

function GETMONTH()
{   let d = new Date();
    let time = d.getMonth();
    document.getElementById("output12").innerHTML=time;
}
function GETDATE()
{   let d = new Date();
    let time = d.getDate();
    document.getElementById("output13").innerHTML=time;
}
