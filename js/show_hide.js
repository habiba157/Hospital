// function showSiblingDiv(event) {
//     const checkbox = event.target;
//     const siblingDiv = checkbox.nextElementSibling; // Assuming the sibling is the next element
  
//     siblingDiv.style.display = checkbox.checked || (checkbox.matches(":hover") && !checkbox.checked) ? "flex" : "none";
//   }
  
//   const checkbox = document.querySelector(".checkbox_input");
//   checkbox.addEventListener("change", showSiblingDiv);
//   checkbox.addEventListener("mouseover", showSiblingDiv);
//   checkbox.addEventListener("mouseout", showSiblingDiv);


// function showSiblingDiv(event) {
//     let checkbox = event.target;
//     let siblingDiv = checkbox.nextElementSibling; // Assuming the sibling is the next element
  
//     if (siblingDiv) { // Check if the sibling exists
//         siblingDiv.classList.toggle("show", checkbox.checked || (checkbox.matches(":hover") && !checkbox.checked));
//         console.log("Sibling div found.");
//     } else {
//       console.log("Sibling div not found.");
//     }
//   }
  
//   let checkboxes = document.querySelectorAll(".trauma");
//   checkboxes.forEach(checkbox => {
//     checkbox.addEventListener("change", showSiblingDiv);
//     checkbox.addEventListener("mouseover", showSiblingDiv);
//     checkbox.addEventListener("mouseout", showSiblingDiv);
//   });

$(document).ready(function () {
  $('#note_previous_illness').hide();
  $('.previous_illness input[type="radio"]').click(function () {
      if ($(this).attr("id") === "no_previous") {
          $('#note_previous_illness').hide();
      } else if ($(this).attr("id") === "yes_previous") {
          $('#note_previous_illness').show();
      }
      else {
          $('#note_previous_illness').hide();
      }
  });


})

$(document).ready(function () {
  $('#note_extra_illness').hide();
  $('.chronic input[type="radio"]').click(function () {
      if ($(this).attr("id") === "no_extra") {
          $('#note_extra_illness').hide();
      } else if ($(this).attr("id") === "yes_extra") {
          $('#note_extra_illness').show();
      }
      else {
          $('#note_extra_illness').hide();
      }
  });


})



$(document).ready(function () {
  $('#note_prepration').hide();
  $('.prepration input[type="radio"]').click(function () {
      if ($(this).attr("id") === "no_prepration") {
          $('#note_prepration').hide();
      } else if ($(this).attr("id") === "yes_prepration") {
          $('#note_prepration').show();
      }
      else {
          $('#note_prepration').hide();
      }
  });


})


$(document).ready(function () {
  $('#note_complaints').hide();
  $('.complaints input[type="radio"]').click(function () {
      if ($(this).attr("id") === "no_complaint") {
          $('#note_complaints').hide();
      } else if ($(this).attr("id") === "yes_complaint") {
          $('#note_complaints').show();
      }
      else {
          $('#note_complaints').hide();
      }
  });


})




$(document).ready(function () {
  $('.drain_amount').hide();
  $('.drain input[type="radio"]').click(function () {
      if ($(this).attr("id") === "drain_no") {
          $('.drain_amount').hide();
          console.log("byhide shklo if");
          
      } else if ($(this).attr("id") === "drain_yes") {
          $('.drain_amount').show();
          console.log("byshow shklo else if");
      }
      else {
          $('.drain_amount').hide();
          console.log("byhide shklo else");
      }
  });


})

$(document).ready(function () {
  $('.catheter_amount').hide();
  $('.catheter input[type="radio"]').click(function () {
      if ($(this).attr("id") === "Catheter_no") {
          $('.catheter_amount').hide();
      } else if ($(this).attr("id") === "Catheter_yes") {
          $('.catheter_amount').show();
      }
      else {
          $('.catheter_amount').hide();
      }
  });


})

// $(document).ready(function () {
//   $('#note_co-manage').hide();
//   $('.co-mange input[type="radio"]').click(function () {
//       if ($(this).attr("id") === "co-mange_no") {
//           $('#note_co-manage').hide();
//       } else if ($(this).attr("id") === "co-mange_yes") {
//           $('#note_co-manage').show();
//       }
//       else {
//           $('#note_co-manage').hide();
//       }
//   });


// })

$(document).ready(function () {
  $('#note_consult').hide();
  $('.consult input[type="radio"]').click(function () {
      if ($(this).attr("id") === "consult_no") {
          $('#note_consult').hide();
      } else if ($(this).attr("id") === "consult_yes") {
          $('#note_consult').show();
      }
      else {
          $('#note_consult').hide();
      }
  });


})

$(document).ready(function () {
  $('#note_case').hide();
  $('.case input[type="radio"]').click(function () {
      if ($(this).attr("id") === "case_no") {
          $('#note_case').hide();
      } else if ($(this).attr("id") === "case_yes") {
          $('#note_case').show();
      }
      else {
          $('#note_case').hide();
      }
  });


})

$(document).ready(function () {

  $(' .affect_nerves_input').hide();
  $('.info Select').change(function() {
    var selectedValue = $(this).find("option:selected").val();
    console.log(selectedValue);
    
    if (selectedValue === 'affect') {
      $('.affect_nerves_input').show();
     
      console.log(selectedValue+"inside ");
      
    }
    else if (selectedValue === 'intact') {
      $('.affect_nerves_input').hide();
      console.log(selectedValue+"inside else if");
    }
     else {
      $('.affect_nerves_input').hide();
      console.log(selectedValue+"inside else ");
    }
    console.log(selectedValue+"outside ");
    
  })

});



$(document).ready(function() {
    $('.info').hide();
    // $('.affect_nerves_input').hide();
    $('.affect_nerves_input').hide();
    $('.checkbox_input').change(function() {
      if ($(this).is(':checked')) {
        $(this).parent().next('.info').show();
        // $('.affect_nerves_input').hide();
        // $('#select_nerves').change(function() {
        //   var selectedValue = $(this).val();
        //   if (selectedValue === 'affect') {
        //     $('.affect_nerves_input').show();
        //   } else {
        //     $('.affect_nerves_input').hide();
        //   }
        // })
      } else {
        $(this).parent().next('.info').hide();
      }
    });
    $('.checkbox').hover(function() {
      $(this).parent().next('.info').show();
    }, function() {
      if (!$(this).is(':checked')) {
        $(this).parent().next('.info').hide();
      }
    });
  });

  $(document).ready(function() {
  
      $('.info').hide();
      $('.speech .checkbox_input_gait').change(function() {
        if ($(this).is(':checked')) {
          $(this).parent().next('.info').show();
          $('.speech .checkbox_input_gait').not(this).prop('disabled', true);
        } else {
          $(this).parent().next('.info').hide();
          $('.speech .checkbox_input_gait').not(this).prop('disabled', false);
        }
      
  });
});

$(document).ready(function () {
  // $('.enlarged-view').hide();
  $('#file-input').change(function () {
    var files = this.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
      reader.onload = function (e) {
        var fileType = file.type;
        var previewElement;

        if (fileType.startsWith('image/')) {
          previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
        } else if (fileType.startsWith('video/')) {
          previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
        }

        if (previewElement) {
          $('.preview-container').append(previewElement);

          // Enlarge on click
          previewElement.on('click', function () {
            var content;
            if (fileType.startsWith('image/')) {
              content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
            } else if (fileType.startsWith('video/')) {
              content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
            }
            $('.enlarged-content').empty().append(content);
            $('.enlarged-view').css('visibility', 'visible');
          });

          previewElement.find('.delete-preview').on('click', function(event) {
            event.stopPropagation();
            $(this).closest('.preview-item').remove();
        });

        }
      };
      reader.readAsDataURL(file);
    }
    $(this).val(''); // Clear the file input
  });

  // Delete preview
  // $(document).on('click', '.delete-preview', function () {
    
  //   /event.stopPropagation(); 
    
  //   $(this).parent('.preview-item').remove();
  // });

  // Close enlarged view
  $('.close-enlarged').click(function () {
    $('.enlarged-view').css('visibility', 'hidden');
  });
});


  
$(document).ready(function() {
  $('.info').hide();
  $('.gait .checkbox_input_gait').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().next('.info').show();
      $('.gait .checkbox_input_gait').not(this).prop('disabled', true);
    } else {
      $(this).parent().next('.info').hide();
      $('.gait .checkbox_input_gait').not(this).prop('disabled', false);
    }
  });


 
  $('.checkbox').hover(function() {
    $(this).parent().next('.info').show();
  }, function() {
    if (!$(this).is(':checked')) {
      $(this).parent().next('.info').hide();
    }
  });
});


$(document).ready(function(){
  $('.co-mange .info').hide();
  $('.co-mange .checkbox_input').change(function(){
    if($(this).is(':checked')){
      $(this).$('.co-mange .info').show();
    }else{
      $(this).$('.co-mange .info').hide();

    }

  })
})


$(document).ready(function() {
  $('.vital_number').hide();
  $('#pressure').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().next('.vital_number').show();
    } else {
      $(this).parent().next('.vital_number').hide();
    }
  });

});
  

$(document).ready(function() {
  $('.vital_number').hide();
  $('#pulse').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().next('.vital_number').show();
    } else {
      $(this).parent().next('.vital_number').hide();
    }
  });

});
  

$(document).ready(function() {
  $('.vital_number').hide();
  $('#temp').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().next('.vital_number').show();
    } else {
      $(this).parent().next('.vital_number').hide();
    }
  });

});

$(document).ready(function() {
  $('.vital_number').hide();
  $('#rate').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().next('.vital_number').show();
    } else {
      $(this).parent().next('.vital_number').hide();
    }
  });

});

$(document).ready(function() {
  $('.vital_number').hide();
  $('#saturation').change(function() {
    if ($(this).is(':checked')) {
      $(this).parent().next('.vital_number').show();
    } else {
      $(this).parent().next('.vital_number').hide();
    }
  });

});

//   $('.case input[type="radio"]').click(function () {
//     if ($(this).attr("id") === "case_no") {
//         $('#note_case').hide();
//     } else if ($(this).attr("id") === "case_yes") {
//         $('#note_case').show();
//     }
//     else {
//         $('#note_case').hide();
//     }
// });



  
    // $(document).ready(function() {
    //   $('.info_general').hide();
    //   $('.general_exam input[type="checkbox"]').change(function() {
        
    //     if($('#co-mange1').is(':checked')||$('#co-mange2').is(':checked')||$('#co-mange3').is(':checked')||$('#co-mange4').is(':checked')){
    //       $('.info_general').show();
    //     }
    //     else{
    //       $('.info_general').hide();
    //     }
    //   }
    //   )
    // }
    //   );

  //  $(document).ready(function() {

  //   var guidelines = document.getElementById("guideline");
  //   Array.prototype.forEach.call(guidelines, function (item) {
  //     item.placeholder = item.placeholder.replace(/\\n/g, '\n');
      
  //   })

  // })

   $(document).ready(function () {
    $(".co-mange ul li input:checkbox").on('click',function(){


      var $box = $(this);
      if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
      }
      else {
        $box.prop("checked", false);
      }

    });

   }),

   
   $(document).ready(function () {
    $(".cerebellar input:checkbox").on('click',function(){


      var $box = $(this);
      if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
      }
      else {
        $box.prop("checked", false);
      }

    });

   }),
    

    $(document).ready(function () {
      $('#note_analysis').hide();
      $('.analysis input[type="radio"]').click(function () {
          if ($(this).attr("id") === "no") {
              $('#note_analysis').hide();
          } else if ($(this).attr("id") === "yes") {
              $('#note_analysis').show();
          }
          else {
              $('#note_analysis').hide();
          }
      });
    
    
    })
   
    $(document).ready(function () {
      $('#note_anesthesia').hide();
      $('.anesthesia input[type="radio"]').click(function () {
          if ($(this).attr("id") === "no") {
              $('#note_anesthesia').hide();
          } else if ($(this).attr("id") === "yes") {
              $('#note_anesthesia').show();
          }
          else {
              $('#note_anesthesia').hide();
          }
      });
    
    
    })

    $(document).ready(function () {
      $('#note_offer').hide();
      $('.offer input[type="radio"]').click(function () {
          if ($(this).attr("id") === "no") {
              $('#note_offer').hide();
          } else if ($(this).attr("id") === "yes") {
              $('#note_offer').show();
          }
          else {
              $('#note_offer').hide();
          }
      });
    
    
    })

    
    $(document).ready(function () {
      $('#note_fasting').hide();
      $('.fasting input[type="radio"]').click(function () {
          if ($(this).attr("id") === "no") {
              $('#note_fasting').hide();
          } else if ($(this).attr("id") === "yes") {
              $('#note_fasting').show();
          }
          else {
              $('#note_fasting').hide();
          }
      });
    
    
    })
  

  $(document).ready(function () {
    $('#note_preserve').hide();
    $('.preserve input[type="radio"]').click(function () {
        if ($(this).attr("id") === "no") {
            $('#note_preserve').hide();
        } else if ($(this).attr("id") === "yes") {
            $('#note_preserve').show();
        }
        else {
            $('#note_preserve').hide();
        }
    });
  })

  $(document).ready(function () {
    $('#note_pressure').hide();
    $('.pressure input[type="radio"]').click(function () {
        if ($(this).attr("id") === "no") {
            $('#note_pressure').hide();
        } else if ($(this).attr("id") === "yes") {
            $('#note_pressure').show();
        }
        else {
            $('#note_pressure').hide();
        }
    });
  })


  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="appearance"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="appearance"]').next('.showText').show();
      } else {
        $('select[name="appearance"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })

  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="head"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="head"]').next('.showText').show();
      } else {
        $('select[name="head"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })



  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="face"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="face"]').next('.showText').show();
      } else {
        $('select[name="face"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })

  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="ear"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="ear"]').next('.showText').show();
      } else {
        $('select[name="ear"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })

  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="mouth"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="mouth"]').next('.showText').show();
      } else {
        $('select[name="mouth"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })

  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="neck"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="neck"]').next('.showText').show();
      } else {
        $('select[name="neck"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })

  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="nodes"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="nodes"]').next('.showText').show();
      } else {
        $('select[name="nodes"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })

  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="oedema"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="oedema"]').next('.showText').show();
      } else {
        $('select[name="oedema"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })

  $(document).ready(function () {
    $('.showText').hide();
    
    $('select[name="limbs"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "abnormal") {
        $('select[name="limbs"]').next('.showText').show();
      } else {
        $('select[name="limbs"]').next('.showText').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })



  $(document).ready(function () {
    $('.other').hide();
    
    $('select[name="name_operation"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      if (val === "other") {
        $('select[name="name_operation"]').next('.other').show();
      } else {
        $('select[name="name_operation"]').next('.other').hide();

      }

      console.log(val + '  after if and else');
      
  });

  })


  $(document).ready(function () {
    $('.management_plan').hide();
    
    $('select[name="management_plan"]').on('change', function() {
      let val = $(this).children('option:selected').val();
      $('select[name="management_plan"]').parent().next('.management_plan').show();
      console.log(val + '  after if and else');
      
  });

  })