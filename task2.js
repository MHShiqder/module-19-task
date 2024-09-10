/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum=0,i=1;
while(1)
{
    if(sum>=100)
        break;
    sum=sum+i++;
    console.log("sum= ",sum );
}
console.log("the loop broke at sum= ",sum );