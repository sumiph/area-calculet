// document.getElementById('buttonFirst').addEventListener('click',function(){
//     const bassInput = document.getElementById('bass');
//     const  bassInoutNamber = parseFloat( bassInput.value );
//     const hightInput = document.getElementById('hight');
//     const hightInputNamber = parseFloat( hightInput.value);
//     // console.log( bassInoutNamber,hightInputNamber)
//     const areaCalculet = 0.5 * bassInoutNamber * hightInputNamber ;
//     const area = document.getElementById('totat-area');
//     console.log( areaCalculet);
//     area.innerText = areaCalculet;
    
//    })
//  -------------all off function-----------------------------------
function inputValue(fileId){
    const inputFiled = document.getElementById(fileId);
    const inputValueTaxt = parseFloat(inputFiled.value);
    return inputValueTaxt ;
}

function setInnertext( elementId,area){
    const element = document.getElementById(elementId);
    element.innerText =area;
}
// ---------------------------all of function of end -----------------

function Triangle(){
 const bass = inputValue('bass') ;
 const hight = inputValue('hight' );
 if(isNaN(bass)|| isNaN(hight)){
    alert('please insert number')
    return;
 }
 const totleTriangle = 0.5 * bass * hight ;
 console.log (totleTriangle)
  setInnertext('totat-area' , totleTriangle);
}
function rectangele(){
    const rectwidth = inputValue('rectangelWidth')
    const rectlength = inputValue('rectanglelength')
    if(isNaN(rectwidth)|| isNaN(rectlength)){
        alert('please insert number')
        return;
     }
    const rectTotleArea = rectwidth * rectlength ;
    console.log ( rectTotleArea);
    setInnertext( 'rectangleArea' , rectTotleArea);
}

function parallelogram(){
    const pralwidth = inputValue('parallalBass');
    const parahight = inputValue('paralalhight');
    if(isNaN(pralwidth)|| isNaN(parahight)){
        alert('please insert number')
        return;
     }
    const paralalTotleAriya = pralwidth *  parahight ;
    console.log(paralalTotleAriya);
    setInnertext('paralalspen', paralalTotleAriya);
}

function Rhombus(){
    const reomb1= inputValue('rohomb1');
    const reomb2 = inputValue('rohomb2');
    if(isNaN(reomb1)|| isNaN(reomb2)){
        alert('please insert number')
        return;
     }
    const rhombushTotleArea = 0.5 * reomb1 * reomb2 ;
    console.log(rhombushTotleArea) ;
    setInnertext('setrombh', rhombushTotleArea);
}

function Pentagon(){
    const pentagoninput1 = inputValue( 'inputPen1');
    const pentafoninput2 = inputValue('inputpen2');
    if(isNaN(pentagoninput1)|| isNaN(pentafoninput2)){
        alert('please insert number')
        return;
     }
    const pentatotalArea = 0.5 *  pentagoninput1 * pentafoninput2 ;
    console.log(pentatotalArea) ;
    setInnertext ( 'penspen' , pentatotalArea);
}

function Ellipsefun(){
    const ellipsefunFrist = inputValue('inputEll1');
    const ellipseaFunsecend = inputValue('inputEll2');
    if(isNaN(ellipsefunFrist)|| isNaN(ellipseaFunsecend)){
        alert('please insert number')
        return;
     }
    const ellTotleArea = 3.1416 * ellipsefunFrist * ellipseaFunsecend ;
    
    console.log(ellTotleArea);
    setInnertext('setText',ellTotleArea);
}