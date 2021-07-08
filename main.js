 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
 Myevent="empty";
 last_x="";
 last_y="";
 color="blue";
width=2;

canvas.addEventListener("mousedown",Mymousedown);

function Mymousedown(e){
    Myevent="mousedown";
    console.log(Myevent);
};

canvas.addEventListener("mouseup",Mymouseup);

function Mymouseup(e){
    Myevent="mouseup";
    console.log(Myevent);
};

canvas.addEventListener("mouseleave",Mymouseleave);

function Mymouseleave(e){
    Myevent="mouseleave";
    console.log(Myevent);
};


canvas.addEventListener("mousemove",Mymousemove);

function Mymousemove(e) {
   currentx= e.clientX - canvas.offsetLeft;
   currenty= e.clientY - canvas.offsetTop ;

   if( Myevent== "mousedown") {
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width;

       console.log("last position of x and y coordinates =");
       console.log("x =" + last_x + "y ="+ last_y);
       ctx.moveTo(last_x, last_y);

       console.log("current position of x and y coordinates =");
       console.log("x =" + currentx + "y ="+ currenty);
       ctx.lineTo (currentx, currenty );
       ctx.stroke();
   };
            last_x= currentx;
            last_y= currenty;
};



var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "blue";
    width_of_line = 2;

    var width_of_screen = screen.width;

    var height= screen.height - 90;
    var width= screen.width - 300;

    if(width_of_screen < 992){
      document.getElementById("myCanvas").width =width;
      document.getElementById("myCanvas").height= height;
      document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
       last_postiton_of_x = e.touches[0].clientX - canvas.offsetLeft;
       last_postion_of_y= e.touches[0].clientY - canvas.offsetTop;
       console.log("my_touchstart");
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

