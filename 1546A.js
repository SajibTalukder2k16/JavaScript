///problem link
///https://codeforces.com/problemset/problem/1546/A

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
        n=readLine();
        let a=[n],b=[n];
        aa=readLine();
        aa=aa.split(" ");
        for(i=0;i<n;i++)
            a[i]=parseInt(aa[i]);
        bb=readLine();
        bb=bb.split(" ");
        let sum_p=0,sum_n=0;
        decrease=[],increase=[];
        for(i=0;i<n;i++)
        {
            b[i]=parseInt(bb[i]);
            if((b[i]-a[i])>0)
            {
                sum_p+=b[i]-a[i];
                increase.push([i,b[i]-a[i]])
                //increase.push_back(mp(i,b[i]-a[i]));
            }
            else if((b[i]-a[i])<0)
            {
                sum_n+=a[i]-b[i];
                decrease.push([i,a[i]-b[i]]);
                //decrease.push_back(mp(i,a[i]-b[i]));
            }
        }
        if(sum_p!=sum_n)
        {
            console.log(-1);
            //cout<<"-1"<<endl;
            continue;
        }
        if(sum_p==0)
        {
            console.log(0);
            //cout<<0<<endl;
            continue;
        }
        console.log(sum_p);
        //cout<<sum_p<<endl;
        for(pos1=0,pos2=0,i=0;i<sum_p;i++)
        {
            if(decrease[pos1][1]==0)
                pos1++;
            //decrease[pos1][0]+1;
            decrease[pos1][1]--;
            if(increase[pos2][1]==0)
                pos2++;
            console.log(decrease[pos1][0]+1,increase[pos2][0]+1)//<<endl;
            increase[pos2][1]--;
        }
    }
}
