///problem link
///https://codeforces.com/problemset/problem/1547/A

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
       // let p1x,p1y,p2x,p2y,p3x,p3y;

        readLine();
        p1=readLine();
        p2=readLine();
        p3=readLine();
        p1=p1.split(" ");
        p2=p2.split(" ");
        p3=p3.split(" ");
        p1x=parseInt(p1[0]);
        p1y=parseInt(p1[1]);
        p2x=parseInt(p2[0]);
        p2y=parseInt(p2[1]);
        p3x=parseInt(p3[0]);
        p3y=parseInt(p3[1]);   
        
        let val=Math.abs(p1x-p2x);
        val+=Math.abs(p1y-p2y);
        if(p1x===p2x && p2x===p3x)
        {
            if((p1y<p3y && p3y<p2y)||(p2y<p3y && p3y<p1y))
            {
                //cout<<p1y<<" "<<p3y<<" "
                val+=2;
            }
        }
        if(p1y===p2y && p2y===p3y)
        {
            if((p1x<p3x && p3x<p2x)||(p2x<p3x && p3x<p1x))
                val+=2;
        }
        //cout<<val<<endl;
        console.log(val);

    }
}
