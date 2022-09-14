function strToElem(text, link){
    var temp = '<p> An absolute URL : <a href="'+ link + '">'+text+'</a></p>';
    var a = document.createElement("p");
    a.innerHTML = temp;
    return a.childNodes[0];
  }
  
  var parent2 = document.getElementById('first');
  var elem2 = strToElem("w3Schools", "www.w3School.com");
  parent2.appendChild(elem2);

 



  function display_date(){
    var date = new Date();
    var year = date.getFullYear()
    
    var month = date.getMonth()+1
    switch (month){
    case 1: month = '01'; break;
    case 2: month = '02'; break;
    case 3: month = '03'; break;
    case 4: month = '04'; break;
    case 5: month = '05'; break;
    case 6: month = '06'; break;
    case 7: month = '07'; break;
    case 8: month = '08'; break;
    case 9: month = '09'; break;
    }
    
    var day = date.getDate()
    switch (day){
    case 1: day = '01'; break;
    case 2: day = '02'; break;
    case 3: day = '03'; break;
    case 4: day = '04'; break;
    case 5: day = '05'; break;
    case 6: day = '06'; break;
    case 7: day = '07'; break;
    case 8: day = '08'; break;
    case 9: day = '09'; break;
    }
    
    var week = date.getDay()
    switch (week){
    case 0: week = 'Domingo'; break;
    case 1: week = 'Segunda-Feira'; break;
    case 2: week = 'Terça-Feira'; break;
    case 3: week = 'Quarta-Feira'; break;
    case 4: week = 'Quinta-Feira'; break;
    case 5: week = 'Sexta-Feira'; break;
    case 6: week = 'Sábado'; break;
    }
    
    var hour = date.getHours()
    switch (hour){
    case 0: hour = '00'; break;
    case 1: hour = '01'; break;
    case 2: hour = '02'; break;
    case 3: hour = '03'; break;
    case 4: hour = '04'; break;
    case 5: hour = '05'; break;
    case 6: hour = '06'; break;
    case 7: hour = '07'; break;
    case 8: hour = '08'; break;
    case 9: hour = '09'; break;
    }
    
    var min = date.getMinutes()
    switch (min){
    case 0: min = '00'; break;
    case 1: min = '01'; break;
    case 2: min = '02'; break;
    case 3: min = '03'; break;
    case 4: min = '04'; break;
    case 5: min = '05'; break;
    case 6: min = '06'; break;
    case 7: min = '07'; break;
    case 8: min = '08'; break;
    case 9: min = '09'; break;
    }
    
    //return write(week + ", " + day + "/" + month + ", " + year + " " + hour + ":" + min);
    return "oi";
    }
    
 


    // var parent = document.getElementById('parent');
    // var elem = display_date();
    // parent.appendChild(elem);
    document.getElementById('parent').innerHTML=display_date();






    
    // document.getElementById("botao").addEventListener("click", forms);
    // function forms(){
    // var nome = document.getElementById("nome");
    // var ra = document.getElementById("ra");
    // var dtnasc = document.getElementById("dtnasc");
    // var nat = document.getElementById("nat");
    
    // if (nome == ''){
    // alert("O campo Nome não pode ficar em branco.")
    // return false;
    // }
    // else{
    // alert("Formulário submetido com sucesso!")
    // return true;
    // }
    
    // }