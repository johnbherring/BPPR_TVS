function assert(outcome, description) 
{  
    var li = document.createElement('li');  
    li.className = outcome ? "pass" : "fail";
    //alert(li.className);
    
    li.appendChild(document.createTextNode(description));
    output.appendChild(li);
} 
