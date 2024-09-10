/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */



console.log("Subtask-1:" );
let i=91,sum1=0;
while(i<=129)
{
    if(i%2!=0)
        sum1+=i;
    i++;
}
console.log("sum of odd numbers ",sum1);
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

console.log("Subtask-2:" );
let j=51,sum2=0;
while(j<=85)
{
    if(j%2==0)
        sum2+=i;

    j++;
}
console.log("sum of even numbers ",sum2);