var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 block_image_object = "BirthayImage.jpg"

 function add() {
    block_image_object = BirthdayImage.jpg; 
    block_image_object.onload = uploadBackground; 
    block_image_object.src = Background_image; 
 }

function new_image()
{
fabric.Image.fromURL('BirthayImage.jpg', function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
    top: 0,
    left: 0
    });
    canvas.add(block_image_object);
    });	
	
}

function playSound(){
	x.play();
}
