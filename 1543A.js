///Problem Link
///https://codeforces.com/problemset/problem/1543/A

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
        aa=readLine();
        aa=aa.split(" ");
        let a=BigInt(aa[0]);
        let b=BigInt(aa[1]);
        if(a===b)
        {
            console.log(0,0);
            //cout<<0<<" "<<0<<endl;
            continue;
        }
        if(a===0 || b===0)
        {
            //console.log("Hello ",a,b);
            if(a!=0)
            {
                console.log(a.toString(),0);
                //cout<<a<<" "<<0<<endl;
            }
            else
            {
                console.log(b.toString(),0);
                //cout<<b<<" "<<0<<endl;
            }
            continue;
        }
        cur_gcd=gcd(a,b);
        //console.log("gcd ",cur_gcd);
        let mn;
        if(a<b)
            mn=a;
        else
            mn=b;
        let mx=a-b;
        if(mx<0)
            mx=b-a;
        mx=BigInt(mx)
        //console.log("Mx: ",mx);
        if(mx===cur_gcd)
        {
            console.log(mx.toString(),0);
            //cout<<cur_gcd<<" "<<0<<endl;
        }
        else
        {
            a=BigInt(a);
            b=BigInt(b);
            if(a%mx === b%mx)
            {
                let val=BigInt(a/mx);
                //console.log(val);
                let add=mx-(a- val*mx);
                add=BigInt(add)
                //console.log((a/mx));
                //console.log("add: ",add);
                //console.log(add,mx-add,Math.min(add,mx-add))
                //add=Math.min(add,mx-add);
                if((mx-add)<add)
                    add=mx-add;
                ///cout<<add<<endl;
                //console.log("add: ",add);
                if(add<mn)
                {
                    console.log(mx,add.toString());
                    //cout<<mx<<" "<<add<<endl;
                }
                else
                {
                    console.log(mx,mn.toString());
                    //cout<<mx<<" "<<mn<<endl;
                }
            }
            else
                console.log(mx,mn.toString())
                //cout<<mx<<" "<<mn<<endl;
        }
    }
}