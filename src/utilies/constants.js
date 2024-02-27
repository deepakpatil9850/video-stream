export const API_KEY = "AIzaSyB9Cmne8-pmnXPDsMdAdHdSJbvHZCagi_Y"

export const count=(x)=>{
    const num = x;
    let result = "";
    if (num > 0 && num < 1000) {
        result += num;
    } else if (num >= 1000 && num < 999999) {
        const calcul = num / 1000;
        result = calcul.toString().slice(0,calcul.toString().indexOf(".")+2)+ "K";
    } else if (num >= 1000000 && num < 999999999) {
        const  calcul = num / 1000000;
        result = calcul.toString().slice(0,calcul.toString().indexOf(".")+2) + "M";
    } else if (num >= 1000000000) {
       const calcul = num / 1000000000;
        result = calcul.toString().slice(0,calcul.toString().indexOf(".")+2)  + "B";
    }
    return result;
}