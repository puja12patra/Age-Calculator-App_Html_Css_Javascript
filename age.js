let userInput = document.getElementById("date");
//future date must be disabled because we need todays date and past date not future date
userInput.max = new Date().toISOString().split("T")[0]

let result = document.getElementById("result");
const calculateAge = document.getElementById("calculate_Btn");
calculateAge.addEventListener("click",()=>
{
    let birthDate = new Date(userInput.value);//userInput value store in birthDate

    //Extracting day, month, and year components from the birthdate:
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;//It starts from 0 but we need the start from 1 i,e january
    let y1 = birthDate.getFullYear();

    //need current date or present date for calcuate the difference
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    //Initializing variables to hold the difference:
    let d3,m3,y3;
    
    //Calculating the difference in years:
    y3 = y2 - y1;//(current - past)

    //Calculating the difference in months:
    if(m2 >= m1 )
    {
        m3 = m2 - m1;
    }
    else
    {
        y3--; //drecrease the year by 1 if birth_month>=current_month
        m3 = 12 + m2 - m1 ;//adding 12 with the month
      
    }
    //Calculating the difference in days:
    if(d2 >= d1)
    {
        d3 = d2 - d1;
    }
   else
   {
     m3--;//drecrease the month by 1 if birth_day>=current_day
     d3 = getDaysInMonth(y1,m1) + d2 - d1;
   }
   //Adjusting negative month difference:
   if(m3 < 0) //If final_month is negative
   {
    m3 = 11;//January is 0 and December is 11.
    y3--;//moves the date back by one year
   }
   console.log(y3,m3,d3);
   result.innerHTML = `You are <span> ${y3} </span> Years, <span> ${m3} </span> Months and <span> ${d3} </span> Days old.`
})

function getDaysInMonth(year,month)
{
    return new Date(year,month,0).getDate()//whatever the last day of birthmonth that set instead of using 0.
}
// 0 -->the last day of the previous month (31,30,28)
//.getDate(): This method retrieves the day of the month (from 1 to 31).
//             Since 0 was passed as the day, it gives the last day of the specified month. 
//             So, getDate() returns the day of that last date, 
//             which corresponds to the total number of days in the specified month.