///problem link
///https://codeforces.com/problemset/problem/1547/B

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
        let str=readLine();
        let l=str.length;
        let val=97+l-1;
        //console.log(val);
        let pos_f=0,pos_b=l-1;
        let cnt=0;
        while(cnt<l)
        {
            let val_f=str.charCodeAt(pos_f);
            let val_b=str.charCodeAt(pos_b);
            if(val_f===val)
            {
                pos_f++;
                val--;
                cnt++;
            }
            else if(val_b===val)
            {
                val--;
                cnt++;
                pos_b--;
            }
            else
                break; 
            }
            if(cnt===l)
            {
                console.log("YES");
            }
            else
            {
                console.log("NO");
            }

    }
}