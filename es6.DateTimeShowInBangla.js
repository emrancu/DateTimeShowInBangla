const DateShowInBangla = (function () {
    let date_format, MainDate, hour, minutes, seconds, year, month, day, TimeSufix, noon;
    let options = {};
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "October", "Nov", "Dec"];
    const banglaMonths = ["জানুয়ারী", "ফেব্রুয়ারী", "মার্স", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টবর", "নভেম্বর", "ডিসেম্বর"];
    const banglaNumber = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    const initOptions = function () {
        date_format = options.format ? options.format : 12;
        MainDate = options.myDate ? new Date(options.myDate) : new Date();
        year = MainDate.getFullYear();
        month = MainDate.getMonth() + 1;
        day = MainDate.getDate();
        hour = MainDate.getHours();
        minutes = MainDate.getMinutes();
        seconds = MainDate.getSeconds();

    }

    const banglaNoonSet = function () {
        noon = TimeSufix == 'AM' ? 'পূর্বাহ্ণ ' : 'অপরাহ্ণ';
        return noon;
    }

    const digitFormat = function (number) {
        let StringNumber = number;
        if (number < 10) {
            StringNumber = "0" + number;
        }
        return StringNumber.toString();
    }

    const generateTimeSuffix = function () {

        if (date_format == 12) {
            if (hour > 12) {
                TimeSufix = 'PM';
                hour = (hour - 12);

                if (hour < 10) {
                    result = "0" + hour;
                } else if (hour == 12) {
                    hour = "00";
                    TimeSufix = 'AM';
                }
            }
            else if (hour < 12) {
                result = ((hour < 10) ? "0" + hour : hour);
                TimeSufix = 'AM';
            } else if (hour == 12) {
                TimeSufix = 'PM';
            }
        }
    }

    const convertBn = function (number) {
        generateTimeSuffix();
        let result = '';
        let stringNumber = digitFormat(number);
        for (let i = 0; i < stringNumber.length; i++) {
            result += banglaNumber[parseInt(stringNumber[i])];
        }
        return result;
    }

    const convert = function () {
        let convertedTime = '';
        let convertedDate = '';
        if (!options.onlyTime) {
            convertedDate = convertBn(day) + ' ' + banglaMonths[month - 1] + ' ' + convertBn(year);
        }
        if (!options.onlyDate) {
            convertedTime = convertBn(hour) + ':' + convertBn(minutes) + ':' + convertBn(seconds) + ' ' + banglaNoonSet();
        }
        return convertedDate + ' ' + convertedTime;
    }


    return {
        init: function (optns = {}) {
            options = optns;
            console.log(options.myDate)
            initOptions();
            return convert();
        }
    };
})()

export default   DateShowInBangla ;
 