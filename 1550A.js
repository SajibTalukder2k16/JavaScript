///problem link
///https://codeforces.com/problemset/problem/1550/A

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
function main()
{
    //const name=readLine();
    //console.log(name);

    let test=readLine();
    while(test--)
    {
        let s=readLine();
        s--;
        val=3;
        cnt=1;
        while(s-val>=0)
        {
            s-=val;
            val+=2;
            cnt++;
        }
        if(s>0)
            cnt++;
        console.log(cnt);
    }
}