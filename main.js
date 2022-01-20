canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
rover_width = 200; 
rover_height = 200; 
background_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcXr005ZcTK94lBsMFJnF9xf8A4VuY9m-bA&usqp=CAU"; 
rover_image = "https://i.pinimg.com/originals/d3/16/3a/d3163a2cab1323b3b7e051507bdcea48.png"; 
rover_x = 10; 
rover_y = 10;

function add() {

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image; 
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
        }
        if(keyPressed == '40')
        {
            down();
        }
        if(keyPressed == '37')
        {
            left();
        }
        if(keyPressed == '39')
        {
            right();
        }
        
}
function up() 
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadrover();
    }
}

function down() 
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();
    }
}


function left() 
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }
}

function right() 
{
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
    }
}