var event1 = document.getElementById("button1");
        event1.addEventListener('click',myfirst,false);
            function myfirst(){
                var a = parseInt(document.getElementById("input1").value);
                var b = parseInt(document.getElementById("input2").value);
                var c = parseInt(document.getElementById("input3").value);
                
                var cal1 = (a + b) * c;
                var cal2 = (a + b + c) ;
                
                if (cal1>cal2)
                    {
                        ans1 = cal1 - cal2;
                        document.getElementById("demo1").innerHTML = ans1;
                        
                    }
                else 
                    {
                        ans2 = cal2 - cal1;
                        document.getElementById("demo2").innerHTML = ans2;
                    }
            }