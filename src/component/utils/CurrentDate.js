export const currentDate = () => {

    let date = String(new Date().getDate());
    let month = String((new Date().getMonth())+1);
    let year = String(new Date().getFullYear());

    if(date.length === 1){
        date = '0'+date;
    }

    if(month.length === 1){
        month = '0'+month;
    }

    return year+'-'+month+'-'+date
}