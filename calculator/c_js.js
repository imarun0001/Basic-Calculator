let display_screen=document.getElementById('display_screen');
display_screen.value='0';
let btn1=document.querySelectorAll('button');
let val='';
for(item of btn1)
{
    item.addEventListener('click',(e)=>
    {
        let btn=e.target.innerText;
        if(val=='Infinity'||val=='undefined')
        {
            if(btn=='C')
            {
                val='';
                display_screen.value='0';
            }
        }   
        else{     
        if(btn=='x')
        {
            btn='*';
            last_elem=val.substring(val.length-1);
            if(last_elem=='*'||last_elem=='/'||last_elem=='+'||last_elem=='-')
            {
                val=val.substring(0,val.length-1);
                val=val+btn;
                display_screen.value=val;   
            }
            else
            {
                val=val+btn;
                display_screen.value=val;
            }
        }
        else if(btn=='/'||btn=='-'||btn=='+')
        {   last_elem=val.substring(val.length-1);
            if(last_elem=='*'||last_elem=='/'||last_elem=='+'||last_elem=='-')
            {
                val=val.substring(0,val.length-1);
                val=val+btn;
                display_screen.value=val;   
            }
            else
            {
                val=val+btn;
                display_screen.value=val;
            }
        }
        else if(btn=='.')
        {
            let match=['+','-','*','/','.'];
            let store='';
            for(let i of val)
            {
                for(let j of match)
                {   
                    if (i==j)
                    {store+=i;
                    break;}
                }
            }
            let last_elem=store.substring(store.length-1);
            if(last_elem=='.')
            {
                val=val.substring(0,val.length);
                display_screen.value=val;   
            }
            else
            {
                val=val+btn;
                display_screen.value=val;
            }
        }
        else if(btn=='C')
        {
            val='';
            display_screen.value='0';
        }
        else if(btn=='DEL')
        {
            if(val.length<=1)
            {
                val='';
                display_screen.value='0';  
            }
            else
            {
                val=val.substring(0,val.length-1);
                display_screen.value=val;
            }
        }
        else if(btn=='=')
        {
            val=eval(val);
            display_screen.value=val;
            val=val.toString();  
        }    
        else if(btn=='0')
        {
            
            if(val.length==1 && val=='0')
            {
            val='0';
            display_screen.value='0';
            }
            else
            { 
                val=val+btn;
                display_screen.value=val;   
            }
        }
        else 
        {
            if(val.length==1 && (val=='0'||val=='/'||val=='*'))
            {
                val=btn
                display_screen.value=val;
            }
            else{
                val=val+btn;
                display_screen.value=val;}
        }}    
    })
}