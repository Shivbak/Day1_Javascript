var event1 = document.getElementById("button1");
        event1.addEventListener('click',myfirst,false);
            function myfirst(){
                var userinput1 = parseInt(document.getElementById("input1").value);
                 
               
                document.getElementById("demo").innerHTML =  userinput1-1 ; 
                   document.getElementById("demo2").innerHTML =  userinput1+1 ;
                //console.log(userinput1+1);
                //console.log(userinput1-1);
                
                
            }