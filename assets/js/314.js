var name1;var name2;var name3;var name4;

var freq = [0,0,0,0];

//314
function person3141(data){
    if(freq[0]%2 === 0){
        var change = document.getElementById("person3141");
        change.style.backgroundColor = "#6495ed";
        freq[0] += 1;
        
        name1 = data.value;
    }
    else{
        var change = document.getElementById("person3141");
        change.style.backgroundColor = "#f0ffff";
        freq[0] += 1;
        
        name1 = "";
    }
}

function person3142(data){
    if(freq[1]%2 === 0){
        var change = document.getElementById("person3142");
        change.style.backgroundColor = "#6495ed";
        freq[1] += 1;
        
        name2 = data.value;
    }
    else{
        var change = document.getElementById("person3142");
        change.style.backgroundColor = "#f0ffff";
        freq[1] += 1;
        
        name2 = "";
    }
}
function person3143(data){
    if(freq[2]%2 === 0){
        var change = document.getElementById("person3143");
        change.style.backgroundColor = "#6495ed";
        freq[2] += 1;
        
        name3 = data.value;
    }
    else{
        var change = document.getElementById("person3143");
        change.style.backgroundColor = "#f0ffff";
        freq[2] += 1;
        
        name3 = "";
    }
}
function person3144(data){
    if(freq[3]%2 === 0){
        var change = document.getElementById("person3144");
        change.style.backgroundColor = "#6495ed";
        freq[3] += 1;
        
        name4 = data.value;
    }
    else{
        var change = document.getElementById("person3144");
        change.style.backgroundColor = "#f0ffff";
        freq[3] += 1;
        
        name4 = "";
    }
}