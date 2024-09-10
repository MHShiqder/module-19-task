/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


for(let i=1;i<=100;i++)
{
    let n=Math.sqrt(i);
    let p=Math.floor(n);
    if(i===1)
        continue
    if((n*n)===(p*p))
    {
        console.log("found the first square number ", i);
        break;
    }
}