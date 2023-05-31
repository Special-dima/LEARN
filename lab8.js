function sd() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML="Дата и время для русскрй локали: "+ today.toLocaleDateString('ru-RU') + '<br>' +
    "Дата и время для греческой локали: " + today.toLocaleDateString('el-GR') + '<br>' +
    "Дата и время для китайской локали: " + today.toLocaleDateString('zh-CN') + '<br>' +
    "Дата и время для монгольской локали: " + today.toLocaleDateString('mn-MN') + '<br>' +
    "Дата и время для египетской локали: " + today.toLocaleDateString('ar-EG')+ '<br>' +
    "Дата и время для африканской локали: " + today.toLocaleDateString('af') ;
    out.style.color = 'olive'
    out.style.fontFamily = 'Monserat'
    out.style.fontSize = '16px'
}
function sdc(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('rojd').innerHTML = "Количесвто дней с даты рождения: " + daysCount;
}