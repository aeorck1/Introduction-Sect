// oPen = ()=>{
//     const op=document.getElementsByClassName("open");
//     const cl=document.getElementsByClassName("close");
//     if (op.style.display==="block"&&cl.style.display==="none"){
//         op.style.display="none"
//         cl.style.display="block"
//     }
//     else{
//         op.style.display="block"
//         cl.style.display="none"
//     }
// }

function oPen() {
    var x = document.getElementById("open");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// close => () =>{
//     const cl=document.getElementsByClassName("close");
//     if(cl.style.display==="block"){
//         cl.style.display==="none"
//     }
// }

