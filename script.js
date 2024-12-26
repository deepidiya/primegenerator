function prime()
        {
            var start=parseInt(document.getElementById("start").value);
            var end=parseInt(document.getElementById("end").value);
            const p = document.getElementById("res");
            for(var it=start;it<=end;it++)
           {
            var a=false;
           
           for(var i=2;i<=it;i++)
           {
            if(it%i==0 && i!=it)
           {
            a=true;
           }
           }
           if(a==false)
           {
            const li = document.createElement('li');
             li.textContent = it;
             p.appendChild(li);
           }
          
           }
        }