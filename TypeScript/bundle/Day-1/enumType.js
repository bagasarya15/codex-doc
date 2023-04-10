"use strict";
{
    let Month;
    (function (Month) {
        Month[Month["Jan"] = 1] = "Jan";
        Month[Month["Feb"] = 2] = "Feb";
        Month[Month["Mar"] = 3] = "Mar";
        Month[Month["Apr"] = 4] = "Apr";
        Month[Month["May"] = 5] = "May";
        Month[Month["Jun"] = 6] = "Jun";
        Month[Month["Jul"] = 7] = "Jul";
        Month[Month["Aug"] = 8] = "Aug";
        Month[Month["Sep"] = 9] = "Sep";
        Month[Month["Oct"] = 10] = "Oct";
        Month[Month["Nov"] = 11] = "Nov";
        Month[Month["Dec"] = 12] = "Dec";
    })(Month || (Month = {}));
    console.log(Month.Feb);
    console.log(Month[2]);
}
