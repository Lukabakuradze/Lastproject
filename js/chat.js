var is_chat_open = false;

document.getElementById("myicon").addEventListener('click',function(){
    if(is_chat_open){
        document.getElementById("myForm").style.display = "block";
    }else{
        document.getElementById("myForm").style.display = "none";
    }
    is_chat_open = !is_chat_open;
});