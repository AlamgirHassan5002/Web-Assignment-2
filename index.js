

function currenttime()
{
    var day2;
    var date1=new Date();
    var day1=date1.getDay();
    var month=date1.getMonth()+1;
    var date2=date1.getDate();
    var year=date1.getFullYear();
    var time1=date1.getHours();
    var mins=date1.getMinutes();
    var seconds1=date1.getSeconds();
    var fulldate;
    var time2=time1%12;
    
    
    if(mins<10)
    {
        mins="0"+mins;
    }
    if(seconds1<10)
    {
        seconds1="0"+seconds1;
    }
    if(time1>=12)
    {
        if(time1==12)
        {
            time2="12";
        }
    time2=time2+":"+mins+":"+seconds1+" PM";
    }
    else
    {
        if(time1==0)
        {
            time2="12";
        }
    time2=time2+":"+mins+":"+seconds1+" AM";
    }
    if(day1==0)
    {
        day2="Sunday";
    }
    else if(day1==1)
    {
        day2="Monday";
    }
    else if(day1==2)
    {
        day2="Tuesday";
    }
    else if(day1==3)
    {
        day2="Wednesday";
    }
    else if(day1==4)
    {
        day2="Thursday";
    }
    else if(day1==5)
    {
        day2="Friday";
    }
    else 
    {
        day2="Saturday";
    }
    fulldate=" Time:"+time2+" Date: "+month+"/"+date2+"/"+year+" Day: "+day2;
    document.getElementById("currentdateandtime").innerHTML= fulldate;
    

}


function gettemps()
{
    var array1=new Array("Islamabad","Karachi","Lahore","Peshawar","Quetta");
var check1=false;
    var i=0;
    while(i<5)
    {
        var link="http://api.openweathermap.org/data/2.5/weather?q="+array1[i]+"&appid=e940f6acb08573926ccbb6e3c7718d9f";
        myfun1(link,check1);
        i++;
    }
    

    
}


function myfun()
{
    if(cityname.value=="")
    {
        alert("kindly enter name of a city!");
    }
    else
    {
        var link="http://api.openweathermap.org/data/2.5/weather?q="+cityname.value+"&appid=e940f6acb08573926ccbb6e3c7718d9f";
        document.getElementById("cityname").value="";
        var check1=true;
    
        myfun1(link,check1);
    }
}



function myfun1(link,check1)
{

 
        var check=false;
       
        var request=new XMLHttpRequest();
        request.open("GET",link);
        request.onload=function()
        {
            var obj=JSON.parse(this.response);
            console.log(obj);
            if(obj.cod==200)
            {
                check=true;
            }
            if(obj.cod==404)
            {
                check=false;
                alert("Invalid Results");
            }
            if(check==true)
            {
                obj.main.temp=obj.main.temp-273.15;
                if(check==true&&check1==true)
                {
                    fun12();
                }

            
            
                var query="<tr><td>"+obj.name+"</td><td>"+ obj.sys.country+"</td><td>"+Math.ceil(obj.main.temp)+" ° Celcius "+"</td><td>"+obj.main.humidity+" % </td><td>"+obj.weather[0].description+"</td></tr>";
  
                $('#rankingtable tbody').append(query);


                $(document).ready(function()
                {
                    $("#rankingtable tr:odd").css("background-color", "#66a3ff");
                    $("#rankingtable tr:even").css("background-color", "#9999ff");
              
                })
            }
        }

       

        request.send();
    
}


function fun12()
{
    var count=$("#rankingtable tr").length;
    count=count-1;
    
        while(count>1)
        {
            document.getElementById("rankingtable").deleteRow(count); 
            count--;
        }
    
  
};





