let rInput = document.querySelectorAll(".motor .r-score-input");
let lInput = document.querySelectorAll(".motor .l-score-input");
let motorRTotal = document.querySelector(".motor .score-output-r");
let motorLTotal = document.querySelector(".motor .score-output-l");

let motorTotal = document.querySelector(".motor .total-output");

let rInputLight = document.querySelectorAll(".light .r-score-input");
let lInputLight = document.querySelectorAll(".light .l-score-input");
let lightRTotal = document.querySelector(".light .score-output-r");
let lightLTotal = document.querySelector(".light .score-output-l");
let lightTotal = document.querySelector(".light .total-output");

let rInputSensation = document.querySelectorAll(".sensation .r-score-input");
let lInputSensation = document.querySelectorAll(".sensation .l-score-input");
let sensationRTotal = document.querySelector(".sensation .score-output-r");
let sensationLTotal = document.querySelector(".sensation .score-output-l");
let sensationTotal = document.querySelector(".sensation .total-output");


let rInputPin = document.querySelectorAll(".pin .r-score-input");
let lInputPin = document.querySelectorAll(".pin .l-score-input");
let pinRTotal = document.querySelector(".pin .score-output-r");
let pinLTotal = document.querySelector(".pin .score-output-l");
let pinTotal = document.querySelector(".pin .total-output");

$(document).ready(function() {
    function calculateTotals(table) {
        var totalR = 0;
        var totalL = 0;
        $(table).find("tbody tr").each(function() {
            var rInput = $(this).find(".r-score-input").val();
            var lInput = $(this).find(".l-score-input").val();
            if (parseInt(rInput) > 5) {
                alert("Please enter a value less than or equal to 5");
                $(this).find(".r-score-input").val('');
                return; // Skip this iteration
            } else if (rInput === "nt") {
                rInput = 0;// $(this).find(".r-score-input").val(rInput);
            }
            console.log(rInput+"after else if");
            if (parseInt(lInput) > 5) {
                alert("Please enter a value less than or equal to 5");
                $(this).find(".l-score-input").val('');
                return; // Skip this iteration
            } else if (lInput === "nt") {
                lInput = 0;
                // $(this).find(".l-score-input").val(lInput);
            }
            console.log(lInput+"after else if");
            var inputR = parseInt(rInput) || 0;
            var inputL = parseInt(lInput) || 0;
            totalR += inputR;
            totalL += inputL;
            console.log(totalR+"total R after else if");
            console.log(totalL+"total L after else if");
            var rowTotal = totalR + totalL;
            $(this).find(".total-output").val(rowTotal);
            console.log(rowTotal+"row total after else if");
        });
        $(table).find(".score-output-r").val(totalR);
        $(table).find(".score-output-l").val(totalL);
    }
    $('.table input').on('input', function() {
        var table = $(this).closest('.table');
        calculateTotals(table);
    });
});   

$(document).ready(function() {

  function calculateSum(){
      var total = 0;
      $('.mental_score').each(function() {
          var input_score = parseInt($(this).val());

          if(!isNaN(input_score)){
          total += input_score;
          }
          
          console.log(total);
          
      });
      $(".mental_total").val(total);
     
  }
  $(document).on('input', '.mental_score', function() {
      calculateSum();
  });
});

$(document).ready(function() {
  // $(document).tooltip({

    // content : function() {
    // $('.mental_total').hover(function() { 
    //   var itemValue = parseInt($(this).val()) || 0;
    //   if(0<= itemValue <=9){
    //    $(this).attr('title', "Late-stage/Severe Alzheimer's disease");
    //   }
    //   else if(10<=itemValue<=19){
    //     // return "Middle-stage/Moderate Alzheimer's disease";
    //     $(this).attr('title', "Middle-stage/Moderate Alzheimer's disease");
    //   }

    //   else if(20<=itemValue<=23){
    //     // return "Mild cognitive impairment or possible Early-stage/Mild Alzheimer's disease";

    //     $(this).attr('title', "Mild cognitive impairment or possible Early-stage/Mild Alzheimer's disease");
    //   }

    //   else if(24<=itemValue<=30){
    //     // return ' "Normal" range';

    //     $(this).attr('title', "Normal range");
    //   }
    //   else{
    //     return 'Error';
    //   }

      
    // });

    $('.mental_total').hover(function() {
      var itemValue = parseInt($(this).val()) || 0;
      var title = "";

      console.log("itemValue:", itemValue);

      if (itemValue >= 0 && itemValue <= 9) {
          title = "Late-stage/Severe Alzheimer's disease";
          console.log("Condition 1 met");
      } else if (itemValue >= 10 && itemValue <= 19) {
          title = "Middle-stage/Moderate Alzheimer's disease";
          console.log("Condition 2 met");
      } else if (itemValue >= 20 && itemValue <= 23) {
          title = "Mild cognitive impairment or possible Early-stage/Mild Alzheimer's disease";
          console.log("Condition 3 met");
      } else if (itemValue >= 24 && itemValue <= 30) {
          title = "Normal range";
          console.log("Condition 4 met");
      } else {
          title = "Error";
          console.log("Error condition");
      }

      $(this).attr('title', title);

  });
  

});




// $(document).ready(function() {
//     function calculateTotals(table) {
//         var totalR = 0;
//         var totalL = 0;
        
//         $(table).find("tbody tr").each(function() {

//             if(parseInt($(this).find(".r-score-input").val())>5){
//                 alert("Please enter value less than or equal to 5");
//                 // $(".r-score-input").val('');
//                 document.activeElement.value = "";

//             }
//             else if($(this).find(".r-score-input").val().toLowerCase()==="nt"){
//                 $(this).find(".r-score-input").val(0);
//             }
//             if(parseInt($(this).find(".l-score-input").val())>5){
//                 alert("Please enter value less than or equal to 5");
//                 document.activeElement.value = "";
//                 return;
//             }
//             else if($(this).find(".l-score-input").val().toLowerCase()==="nt"){
//                 $(this).find(".l-score-input").val(0);
//             }

//             var inputR = parseInt($(this).find(".r-score-input").val()) || 0;
//             var inputL = parseInt($(this).find(".l-score-input").val()) || 0;
//             totalR += inputR;
//             totalL += inputL; 
//             var total = totalR + totalL;

//             $(this).find(".total-output").val(total);


//     });
//     $(table).find(".score-output-r").val(totalR);
//     $(table).find(".score-output-l").val(totalL);

//     // $(".motor .total-output").val(totalR+totalL);
// }
// $('.table input').on('input', function() {
//     var table = $(this).closest('.table');

//     calculateTotals(table);
// });
// })
// $(document).ready(function() {
//     rInput.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         totalR += parseInt(input.value);
//         motorRTotal.innerHTML = totalR;
//     });
// })

// $(document).ready(function() {
//     lInput.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         totalL += parseInt(input.value);
//         motorLTotal.innerHTML = totalL;
//     });
// })
// $(document).ready(function() {
//     rInputLight.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         totalR += parseInt(input.value);
//         lightRTotal.innerHTML = totalR;
//     });
// })

// $(document).ready(function() {
//     lInputLight.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }   
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         totalL += parseInt(input.value);
//         lightLTotal.innerHTML = totalL;
//     });
// })
// function calculateMotorTotals() {
//     rInput.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         motorRTotal += parseInt(input.value);
//         motorRTotal.innerHTML = motorRTotal;
//     })

//     lInput.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         motorLTotal += parseInt(input.value);
//         motorLTotal.innerHTML = motorLTotal;
//     })
//     parseInt(motorTotal)=parseInt(motorLTotal)+parseInt(motorRTotal);
//     motorTotal.innerHTML = parseInt(motorTotal);

// }

// document.addEventListener('.motor input', calculateTotals);

// function calculateLightTotals() {
//     rInputLight.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         lightRTotal += parseInt(input.value);
//         lightRTotal.innerHTML = lightRTotal;
//     })

//     lInputLight.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }    
//         lightLTotal += parseInt(input.value);
//         lightLTotal.innerHTML = lightLTotal;
//     })
//     parseInt(lightTotal)=parseInt(lightLTotal)+parseInt(lightRTotal);
//     lightTotal.innerHTML = parseInt(lightTotal);
// }   

// document.addEventListener('.light input', calculateLightTotals);


// function calculatePinTotals() {
//     rInputPin.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         pinRTotal += parseInt(input.value);
//         pinRTotal.innerHTML = pinRTotal;
//     }) 

//     lInputPin.forEach((input) => {
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
//         }
//         pinLTotal += parseInt(input.value);
//         pinLTotal.innerHTML = pinLTotal;
//     })
//     parseInt(pinTotal)=parseInt(pinLTotal)+parseInt(pinRTotal);
//     pinTotal.innerHTML = parseInt(pinTotal);
    
// }

// document.addEventListener('.pin input', calculatePinTotals);
/***
 * function calculateTotals() {
  // Get all score input elements
  const scoreInputs = document.querySelectorAll('.score-input');

  // Initialize total variables
  let motorTotalRight = 0;
  let motorTotalLeft = 0;
  let sensoryTotalRight = 0;
  let sensoryTotalLeft = 0;

  // Iterate through score inputs and calculate totals
  scoreInputs.forEach(input => {
    const value = parseInt(input.value);

    // Check if value is valid (integer between 1 and 5)
    if (isNaN(value) || value < 1 || value > 5) {
      // Handle invalid input (e.g., show an error message)
      return;
    }

    // Determine section and side based on input class
    if (input.classList.contains('motor')) {
      if (input.closest('td').previousElementSibling.textContent.startsWith('R')) {
        motorTotalRight += value;
      } else {
        motorTotalLeft += value;
      }
    } else if (input.classList.contains('sensory')) {
      if (input.closest('td').previousElementSibling.textContent.startsWith('R')) {
        sensoryTotalRight += value;
      } else {
        sensoryTotalLeft += value;
      }
    }
  });

  // Update total input elements
  document.querySelector('.motor .total-input').value = motorTotalRight + motorTotalLeft;
  document.querySelector('.sensory .total-input').value = sensoryTotalRight + sensoryTotalLeft;
}

// Attach event listener to calculate totals on input change
document.addEventListener('input', calculateTotals);
 */

// document.querySelectorAll(".r-score-input").onBlur = function() {
//     rInput.forEach((input) => {
//         var totalR = 0;
//         if(parseInt(input.value)>5){
//             alert("Please enter value less than or equal to 5");
//         }
//         else if(input.value=="NT"){
//             input.value=0;
    
//         }
       
//             // input.value=parseInt(input.value);
//             totalR += parseInt(input.value);
//             motorRTotal.innerHTML = totalR;
        
//     });
// }

// lInput.forEach((input) => {
//     if(parseInt(input.value)>5){
//         alert("Please enter value less than or equal to 5");
//     }
//     else if(input.value=="NT"){
//         input.value=0;
//     }
//     totalL += parseInt(input.value);
//         motorLTotal.innerHTML = totalL;
// })




// $(function() {
//     var $rows = $('.table tbody tr');
//     $rows.each(function(index) {
//         var $row = $(this);
//         $row.find('.l-score-input').on('change', function() { 
//             var $inputL = $row.find('.l-score-input').val();
//             var $inputR = $row.find('.r-score-input').val();
//            if(!isNaN($inputL)&&!isNaN($inputR)){
//             var $totalL = parseInt($inputL);
//             var $totalR = parseInt($inputR);
//             // var $total = 0;
//             $('.l-score-input').each(function() {   
//                 $totalL += parseInt($(this).val());
//             });

//             $('.r-score-input').each(function() {
//                 $totalR += parseInt($(this).val());
//             });
//             // $total = $totalL + $totalR;

             
//             $row.find('.score-output-l').val($totalL);

//             $row.find('.score-output-r').val($totalR);
//             $row.find('.total-output').val($totalL+$totalR);
//            }
            
//         })
//     });
// })