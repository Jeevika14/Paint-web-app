canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mouseEvent="empty";

var last_position_of_x,last_position_of_y;
color="black";
width_of_line =1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent ="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent ="mouseup";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent ="mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x= e.clientX - canvas.offsetleft;
current_position_of_mouse_y= e.clientY - canvas.offsettop; 

if(mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokestyle= color;
    ctx.linewidth= width_of_line;

    console.log("last position of x and y coordinates=");
    console.log("x= " + last_position_of_x + "y= " + last_position_of_y);
    ctx.moveto(last_position_of_x,last_position_of_y);

    console.log("current position of x and y coordinates=");
    console.log("x= " + current_position_of_mouse_x + "y= " + current_position_of_mouse_y);

    ctx.lineto(current_position_of_mouse_x;current_position_of_mouse_y);
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}