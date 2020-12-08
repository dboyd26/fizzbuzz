let x = 0;
for ( x=1; x <100; x++) // the loop begins at  1, count is to 100, x++ is the interation
{
    
if ( x % 5 == 0 &&  x %  3 == 0) // if x divided by 5 has a remainder of 0 and  x divided by 3 has a remainder of 0, an action will occur
{
    
    document.querySelector("#displayAll").innerHTML  += "fizzbuzz" + "<br>";// the action that will occur
}

else if (x % 5 == 0)
{
 
 document.querySelector("#displayAll").innerHTML  += "buzz" + "<br>";
}
else if (x % 3 == 0)
{
 
 document.querySelector("#displayAll").innerHTML  += "fizz" + "<br>";
}

else 
{
    
document.querySelector("#displayAll").innerHTML  += x + "<br>";
}
}
