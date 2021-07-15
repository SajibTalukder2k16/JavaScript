///problem link
///https://codeforces.com/problemset/problem/1547/C

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
        k=parseInt(p1[0]);
        n=parseInt(p1[1]);
        m=parseInt(p1[2]);
        //console.log(n,m,k);
        vec1=[],vec2=[],vec=[];
        for(i=0;i<n;i++)
        {
            //console.log("hh ",i);
            vec1.push(parseInt(p2[i]));
        }
        for(i=0;i<m;i++)
        {
            vec2.push(parseInt(p3[i]));
        }
        //console.log(vec1);
        //console.log(vec2);
        for( i=0,pos1=0,pos2=0;i<n+m;i++)
        {
            if(pos1===n)
            {
                for( j=pos2;j<m;j++)
                {
                    vec.push(vec2[pos2++]);
                }
                break;
            }
            if(pos2===m)
            {
                for(j=pos1;j<n;j++)
                {
                    vec.push(vec1[pos1++]);
                }
                break;
            }

            if(vec1[pos1]<=vec2[pos2])
            {
                vec.push(vec1[pos1]);
                pos1++;
            }
            else
            {
                vec.push(vec2[pos2]);
                pos2++;
            }
        }
        cnt=k;
        chk=true;
        for(i=0;i<n+m;i++)
        {
            if(vec[i]==0)
            {
                cnt++;
                continue;
            }
            val=vec[i];
            if(val>cnt)
            {
                chk=false;
                break;
            }

        }
        //console.log("hello ",chk);
        if(chk===false)
        {
            console.log(-1);
            //cout<<-1<<endl;
        }
        else
        {
            out="";
            for(i=0;i<n+m;i++)
                out+=vec[i]+" ";
            console.log(out);
                //console.log(vec[i]," ");
        }
    
    }
}
