
// 1. Write a JavaScript program to remove items from a drop-down list.


function Remove(){

    const Car=document.getElementById("colorSelect").removeChild(document.getElementById("colorSelect").lastElementChild)

    console.log(Car);

}

// 2. Write a JavaScript program to change the  color given text in p tag  

function myFunction(){

    let color=document.getElementById("colorSelect").value
    let Text=document.getElementById("ColorChange").style.color=color

Text.innerText=color



}


// 3.Write a JavaScript function to get the values of First and Last names of the following form.

function submit(){

    let FirstName=document.getElementById("firstname").value;
    let LastName=document.getElementById("LastName").value;

    console.log("Name:",FirstName+" "+LastName);
    
}


// 4. Write a JavaScript program to display a random image (clicking on a button) from the following list.


function RandomImage(){

    let limg=["https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot","https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot","https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot"]

    
    let random=Math.floor(Math.random() * limg.length);

    
    let image=document.querySelector('img')

    image.src=limg[random]
}

    

    
  



   
