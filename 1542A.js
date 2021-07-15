///problem link
///https://codeforces.com/problemset/problem/1542/A


process.stdin.resume();
process.stdin.setEncoding('utf-8');

 

let inputString = '';
let currentLine = 0;

 

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

 

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

 

    main();
});

 
function readLine() {
    return inputString[currentLine++];
}
var gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
}

function main()
{
    //const name=readLine();
    //console.log(name);

    let test=readLine();
    while(test--)
    {
        n=parseInt(readLine());
        ara=readLine();
        ara=ara.split(" ");
        cnt=0;
        for(i=0;i<2*n;i++)
        {
            val=parseInt(ara[i]);
            if(val&1)
                cnt++;
        }
        if(cnt===n)
        {
            console.log("YES");
        }
        else
        {
            console.log("NO");
        }
    }
}
