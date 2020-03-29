var field = document.querySelector('#field');

var btnresult = document.querySelector('.btn')



btnresult.onclick = function () {

    goods.unit = field.value ;

    // console.log(goods.getCost());
    
    document.querySelector('.result-field').value = goods.getCost();

}


