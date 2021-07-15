///problem link
///https://codeforces.com/problemset/problem/1534/A


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
        nn=readLine();
        nn=nn.split(" ");
        n=parseInt(nn[0]);
        m=parseInt(nn[1]);
        grid=[];
        pos_x=-1,pos_y=-1;
        for(i=0;i<n;i++)
        {
            nn=readLine();
            nn.split(" ");
            temp=[];
            for(j=0;j<m;j++)
            {
                temp.push(nn[j]);
                if(pos_x===-1 && pos_y===-1 && nn[j]!='.')
                {
                    pos_x=i;
                    pos_y=j;
                }
            }
            grid.push(temp);
        }
        if(pos_x===-1 && pos_y===-1)
        {
            //cout<<"YES"<<endl;
            console.log("YES");
            for(i=0;i<n;i++)
            {

                previous='';
                if(i===0)
                    previous='s';
                else
                    previous=grid[i-1][0];
                str=""
                for(j=0;j<m;j++)
                {
                    give='';
                    if(i===0 && j===0)
                        give='W';
                    if(previous==='R')
                        give='W';
                    else if(previous==='W')
                        give='R';
                    grid[i][j]=give;
                    previous=give;
                    str+=grid[i][j]
                    //cout<<grid[i][j];

                }
                console.log(str);
               // cout<<endl;
            }
            continue;
        }

        chk=true;
        ///line left
        ch=grid[pos_x][pos_y];
        //cout<<ch<<endl;
        for(j=pos_y-1;j>=0;j--)
        {
            if(ch=='R')
            {
                cur='W';
                temp=grid[pos_x][j];
                if(temp===ch)
                {
                    chk=false;
                    break;
                }
                else
                {
                    grid[pos_x][j]=cur;
                    ch=cur;
                }
            }
            else
            {
                cur='R';
                temp=grid[pos_x][j];
                if(temp===ch)
                {
                    chk=false;
                    break;
                }
                else
                {
                    grid[pos_x][j]=cur;
                    ch=cur;
                }
            }
        }

        ///line right
        ch=grid[pos_x][pos_y];
        for(j=pos_y+1;j<m ;j++)
        {
            if(ch==='R')
            {
                cur='W';
                temp=grid[pos_x][j];
                if(temp===ch)
                {
                    chk=false;
                    break;
                }
                else
                {
                    grid[pos_x][j]=cur;
                    ch=cur;
                }
            }
            else
            {
                cur='R';
                temp=grid[pos_x][j];
                if(temp===ch)
                {
                    chk=false;
                    break;
                }
                else
                {
                    grid[pos_x][j]=cur;
                    ch=cur;
                }
            }
        }

        ///up
        for(i=pos_x-1;i>=0;i--)
        {
            now=grid[i+1][0];
            for(j=0;j<m;j++)
            {
                give='';
                if(now==='R')
                    give='W';
                else
                    give='R';
                if(grid[i][j]===now)
                {
                    chk=false;
                    break;
                }
                else
                {
                    grid[i][j]=give;
                    now=give;
                }

            }
            if(chk==false)
                break;
        }


        ///down

        for(i=pos_x+1;i<n;i++)
        {
            now=grid[i-1][0];
            for(j=0;j<m;j++)
            {
                give='';
                if(now==='R')
                    give='W';
                else
                    give='R';
                if(grid[i][j]===now)
                {
                    chk=false;
                    break;
                }
                else
                {
                    grid[i][j]=give;
                    now=give;
                }

            }
            if(chk===false)
                break;
        }

        if(chk===false)
        {
            console.log("NO")
            //cout<<"NO"<<endl;
            continue;
        }
        console.log("YES");
        //cout<<"YES"<<endl;

        for(i=0;i<n;i++)
        {
            out="";
            for(j=0;j<m;j++)
                out+=grid[i][j];
            console.log(out);
        }
        
    }
}