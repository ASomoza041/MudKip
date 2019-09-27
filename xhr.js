
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://reqres.in/api/unknown');
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhr.responseText);
        let data = response.data;
        let output = '';
        for(var i = 0; i < data.length; i++){
            output += '<li>'+data[i].id+'</li>';
            output += '<li>'+data[i].year+'</li>';
            output += '<li>'+data[i].name+'</li>';
            output += '<li>'+data[i].color+'</li>';
            output += '<li>'+data[i].pantone_value+'</li>';
            output += '<br>';

        }
        selector = document.getElementById("poke");
        selector.innerHTML = output;
    }
};




