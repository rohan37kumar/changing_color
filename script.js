var index = 0;

function magic(){
    var colors = ["red","blue","crimson","orange","bisque","cornflowerblue","magenta","gold","violet","seagreen","aqua","fuchsia","chocolate"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if(index>colors.length - 1){
        index = 0;
    }
    if((index>0)&&(index<colors.length-2)){
        document.getElementsByTagName("button")[0].style.background = colors[(index+2)];
        
    }
    else{
        document.getElementsByTagName("button")[0].style.background = colors[(index-3)];

    }


}