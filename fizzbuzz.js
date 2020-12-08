let x = 1;
for ( x=1; x <100; x++)
{
    
if ([x] % 7 == 0 &&  [x] %  3 == 0)
{
    
    document.querySelector("#displayAll").innerHTML  += "fizzbuzz<br>";
}

else if (x % 5 == 0)
{
 
 document.querySelector("#displayAll").innerHTML  += "buzz<br>"
}
else if (x % 3 == 0)
{
 
 document.querySelector("#displayAll").innerHTML  += "fizz<br>";
}

else 
{
    
    document.querySelector("#displayAll").innerHTML  += x;
}
}
