/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let sum1=0,sum2=0;

console.log("Sub-task one");

for(let i=91;i<=129;i++)
{
    if(i%2==0)
        sum1+=i;
}
console.log(sum1);
console.log("\n");
console.log("Sub-task two");

for(let i=51;i<=85;i++)
{
    if(i%2==0)
        continue;
    sum2+=i;
}
console.log(sum2);