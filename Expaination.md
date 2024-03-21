userInput.max = new Date().toISOString().split("T")[0];

1. max is a property that specifies the maximum value.
2. new Date() creates a new Date object representing the current date and time.
3. toISOString() is a method of the Date object that returns a string representation of the date in ISO 8601 format.
4. split() is a method of the String object that splits the string into an array of strings, using the specified separator character as the delimiter.
5. T is the separator character that is used to split the ISO 8601 string into an array of two strings, the first string containing the date and the second string containing the time.
6. [0] is the index of the first element in the array, which is the string containing the date.
---------------------------------------------------------------------------
1. getDate(): Returns the day of the month (from 1 to 31).
2. getMonth(): Returns the month (from 0 to 11), so we add 1 to get the conventional month number.
3. getFullYear(): Returns the year (four digits).
--------------------------------------------------------------------------
if (m2 >= m1) {
    m3 = m2 - m1;
} else {
    y3--;
    m3 = 12 + m2 - m1;
}

1. if (currentmonth>= birthmonth) then (currentmonth - birthmonth);
2. else birthmonth has already passed in the current year
   then 1. (Decrement the year (y3--) to move back to the previous year);
        2. (Calculate the difference between the months, taking into account that it spans across two different years. This is done by adding 12 (representing the total months in a year) to m2 and then subtracting m1. The result is then stored in m3)
---------------------------------------------------------------------------

function getDaysInMonth(year, month) 
{
    return new Date(year, month, 0).getDate();
}
1. new Date(year, month, 0): This line creates a new Date object, using the provided year and month parameters. The third argument, 0, represents the day. By passing 0 as the day, it sets the date to the last day of the previous month. This is because in JavaScript, when you pass 0 as the day in the Date constructor, it gives you the last day of the previous month. For example, if you pass 1 as the day, it gives you the first day of the specified month. Therefore, 0 gives you the last day of the previous month.

2. .getDate(): This method retrieves the day of the month (from 1 to 31) for the date object returned by new Date(year, month, 0). Since 0 was passed as the day, it effectively gives the last day of the specified month. So, getDate() returns the day of that last date, which corresponds to the total number of days in the specified month.

---------------------------------------------------------------------------
if (d2 >= d1) {
    d3 = d2 - d1;
} else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
}
1. If the current day is greater than or equal to the birth day, simply subtract to get the difference.
2. If not, decrement the month difference by 1 and calculate the remaining days.
---------------------------------------------------------------------------
if (m3 < 0) {
    m3 = 11;
    y3--;
}
1. If the month difference becomes negative, adjust by decreasing the year difference by 1 and setting the month difference to 11 (December).