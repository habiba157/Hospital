
// !!enlarged image
/** 
 * $(document).ready(function() {
    // Enlarge image on click
    $('.enlargeable-image').click(function() {
        var imageUrl = $(this).attr('src');
        $('#enlarged-content').empty().append('<img src="' + imageUrl + '" style="max-width: 100%; max-height: 100%;">');
        $('#enlarged-view').css('visibility', 'visible');
    });

    // Close enlarged view
    $('#close-enlarged').click(function() {
        $('#enlarged-view').css('visibility', 'hidden');
    });
});
 * 
 * 
 */

/** 
$(document).ready(function () {
    // $('.enlarged-view').hide();
    $('#video_check .file_upload .file-input').change(function () {
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
  **/
/** 
  $(document).ready(function () {
    $('#video_check .file-input').change(function () {
        var files = this.files;
        var container = ('.file_upload'); // Find the correct container
        var previewContainer = container.find('.preview-container');
        var enlargedView = container.find('.enlarged-view');
        var enlargedContent = container.find('.enlarged-content');

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
                    previewContainer.append(previewElement);

                    // Enlarge on click
                    previewElement.on('click', function () {
                        var content;
                        if (fileType.startsWith('image/')) {
                            content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
                        } else if (fileType.startsWith('video/')) {
                            content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
                        }
                        enlargedContent.empty().append(content);
                        enlargedView.css('visibility', 'visible');
                    });

                    previewElement.find('.delete-preview').on('click', function (event) {
                        event.stopPropagation();
                        $(this).closest('.preview-item').remove();
                    });
                }
            };
            reader.readAsDataURL(file);
        }
        $(this).val(''); // Clear the file input
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});

**/
console.log("before ready video check");
/** 
$(document).ready(function () {

    console.log("inside ready video check");
    

    $('input_video').change(function () {

        console.log("inside change");
        

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

                    $('#preview-container').append(previewElement);



                    // Enlarge on click

                    previewElement.on('click', function () {

                        var content;

                        if (fileType.startsWith('image/')) {

                            content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');

                        } else if (fileType.startsWith('video/')) {

                            content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');

                        }

                        $('#enlarged-content').empty().append(content);

                        $('#enlarged-view').show();

                    });



                    // Delete preview

                    previewElement.find('.delete-preview').on('click', function (event) {

                        event.stopPropagation();

                        $(this).closest('.preview-item').remove();

                    });

                }

            };

            reader.readAsDataURL(file);

        }

        $(this).val(''); // Clear the file input

    });



    // Close enlarged view

    $('#close-enlarged').click(function () {

        $('#enlarged-view').hide();

    });

});
**/    
    
    


//all
// $(document).ready(function() {
//     // Ensure enlarged views are hidden on page load
//     $('.enlarged-view').css('visibility', 'hidden');

//     $('.file-input').change(function() {
//         var files = this.files;
//         var container = $(this).closest('.file_upload'); // Find the correct container
//         var previewContainer = container.find('.preview-container');
//         var enlargedView = container.find('.enlarged-view');
//         var enlargedContent = container.find('.enlarged-content');

//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             var reader = new FileReader();
//             reader.onload = function(e) {
//                 var fileType = file.type;
//                 var previewElement;

//                 if (fileType.startsWith('image/')) {
//                     previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
//                 } else if (fileType.startsWith('video/')) {
//                     previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
//                 }

//                 if (previewElement) {
//                     previewContainer.append(previewElement);

//                     // Enlarge on click (using visibility)
//                     previewElement.on('click', function() {
//                         var content;
//                         if (fileType.startsWith('image/')) {
//                             content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
//                         } else if (fileType.startsWith('video/')) {
//                             content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
//                         }
//                         enlargedContent.empty().append(content);
//                         enlargedView.css('visibility', 'visible');
//                     });

//                     // Delete preview
//                     previewElement.find('.delete-preview').on('click', function(event) {
//                         event.stopPropagation();
//                         $(this).closest('.preview-item').remove();
//                     });
//                 }
//             };
//             reader.readAsDataURL(file);
//         }
//         $(this).val(''); // Clear the file input
//     });

//     // Close enlarged view (using visibility)
//     $('.close-enlarged').click(function() {
//         $(this).closest('.enlarged-view').css('visibility', 'hidden');
//     });
// });



// $(document).ready(function () {
//     // $('.enlarged-view').hide();
//     console.log("Inside ready video check");

//     $('#input_video').change(function () {
//         console.log("inside change");
//         var files = this.files;
//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                 var fileType = file.type;
//                 var previewElement;

//                 if (fileType.startsWith('image/')) {
//                     previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
//                 } else if (fileType.startsWith('video/')) {
//                     previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
//                 }

//                 if (previewElement) {
//                     $('.preview-container').append(previewElement);

//                     // Enlarge on click
//                     previewElement.on('click', function () {
//                         var content;
//                         if (fileType.startsWith('image/')) {
//                             content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
//                         } else if (fileType.startsWith('video/')) {
//                             content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
//                         }
//                         $('.enlarged-content').empty().append(content);
//                         $('.enlarged-view').css('visibility', 'visible');
//                     });

//                     previewElement.find('.delete-preview').on('click', function (event) {
//                         event.stopPropagation();
//                         $(this).closest('.preview-item').remove();
//                     });

//                 }
//             };
//             reader.readAsDataURL(file);
//         }
//         $(this).val(''); // Clear the file input
//     });

//     // Delete preview
//     // $(document).on('click', '.delete-preview', function () {

//     //   /event.stopPropagation(); 

//     //   $(this).parent('.preview-item').remove();
//     // });

//     // Close enlarged view
//     $('.close-enlarged').click(function () {
//         $('.enlarged-view').css('visibility', 'hidden');
//     });
// });
//<input type="file" class="form-control py-3" id="operation_images" multiple>
// $(document).ready(function () {
//     // $('.enlarged-view').hide();
//     console.log("Inside ready video check");

//     $('#operation_images').change(function () {
//         console.log("inside change");
//         var files = this.files;
//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                 var fileType = file.type;
//                 var previewElement;

//                 if (fileType.startsWith('image/')) {
//                     previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
//                 } else if (fileType.startsWith('video/')) {
//                     previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
//                 }

//                 if (previewElement) {
//                     $(this).siblings('.preview-container').append(previewElement);

//                     // Enlarge on click
//                     previewElement.on('click', function () {
//                         var content;
//                         if (fileType.startsWith('image/')) {
//                             content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
//                         } else if (fileType.startsWith('video/')) {
//                             content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
//                         }
//                         $(this).siblings().children('.enlarged-content').empty().append(content);
//                         $(this).siblings('.enlarged-view').css('visibility', 'visible');
//                     });

//                     previewElement.find('.delete-preview').on('click', function (event) {
//                         event.stopPropagation();
//                         $(this).closest('.preview-item').remove();
//                     });

//                 }
//             };
//             reader.readAsDataURL(file);
//         }
//         $(this).val(''); // Clear the file input
//     });

//     // Delete preview
//     // $(document).on('click', '.delete-preview', function () {

//     //   /event.stopPropagation(); 

//     //   $(this).parent('.preview-item').remove();
//     // });

//     // Close enlarged view
//     $('.close-enlarged').click(function () {
//         $(this).siblings('.enlarged-view').css('visibility', 'hidden');
//     });
// });


// $(document).ready(function () {
//     console.log("Inside ready video check");

//     $('#input_video').change(function () {
//         console.log("inside change");
//         var files = this.files;
//         var parent = $(this).parent(); // Find the parent container
//         var previewContainer = parent.find('.preview-container');
//         var enlargedView = parent.find('.enlarged-view');
//         var enlargedContent = enlargedView.find('.enlarged-content');

//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                 var fileType = file.type;
//                 var previewElement;

//                 if (fileType.startsWith('image/')) {
//                     previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
//                 } else if (fileType.startsWith('video/')) {
//                     previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 100px; max-width: 100px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
//                 }

//                 if (previewElement) {
//                     previewContainer.append(previewElement);

//                     previewElement.on('click', function () {
//                         var content;
//                         if (fileType.startsWith('image/')) {
//                             content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
//                         } else if (fileType.startsWith('video/')) {
//                             content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
//                         }
//                         enlargedContent.empty().append(content);
//                         enlargedView.css('visibility', 'visible');
//                     });

//                     previewElement.find('.delete-preview').on('click', function (event) {
//                         event.stopPropagation();
//                         $(this).closest('.preview-item').remove();
//                     });
//                 }
//             };
//             reader.readAsDataURL(file);
//         }
//         $(this).val('');
//     });

//     $('.close-enlarged').click(function () {
//         $(this).closest('.enlarged-view').css('visibility', 'hidden');
//     });
// });

$(document).ready(function () {
    console.log("Inside ready video check");

    $('#input_video').change(function () {
        console.log("inside change");
        var files = this.files;
        var parent = $(this).parent(); // Find the parent container
        var previewContainer = parent.find('.preview-container');
        var enlargedView = parent.find('.enlarged-view');
        var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileType = file.type;
            var previewElement;

            // Use createObjectURL for videos
            if (fileType.startsWith('video/')) {
                var videoURL = URL.createObjectURL(file);
                previewElement = $(
                    `<div class="preview-item position-relative m-2">
                        <video src="${videoURL}" class="img-thumbnail" style="max-height: 300px; max-width: 300px;" controls></video>
                        <span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span>
                    </div>`
                );
            } else if (fileType.startsWith('image/')) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    previewElement = $(
                        `<div class="preview-item position-relative m-2">
                            <img src="${e.target.result}" class="img-thumbnail" style="max-height: 300px; max-width: 300px;">
                            <span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span>
                        </div>`
                    );
                    previewContainer.append(previewElement);
                };
                reader.readAsDataURL(file);
            }

            if (previewElement) {
                previewContainer.append(previewElement);

                // Enlarge on click
                previewElement.on('click', function () {
                    var content;
                    if (fileType.startsWith('video/')) {
                        content = $('<video src="${videoURL}" controls style="max-width: 90%; max-height: 90%;"></video>');
                    }
                    enlargedContent.empty().append(content);
                    enlargedView.css('visibility', 'visible');
                });

                // Add delete functionality
                previewElement.find('.delete-preview').on('click', function (event) {
                    event.stopPropagation();
                    $(this).closest('.preview-item').remove();
                });
            }
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});

// $(document).ready(function () {
//     console.log("Inside ready video check");

//     $('#input_video').change(function () {
//         console.log("inside change");
//         var files = this.files;
//         var parent = $(this).parent();
//         var previewContainer = parent.find('.preview-container');
//         var enlargedView = parent.find('.enlarged-view');
//         var enlargedContent = enlargedView.find('.enlarged-content');

//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             var fileType = file.type;
//             var previewElement;

//             if (fileType.startsWith('video/')) {
//                 var videoURL = URL.createObjectURL(file);
//                 previewElement = $(
//                     `<div class="preview-item position-relative m-2">
//                         <video src="${videoURL}" class="img-thumbnail" style="max-height: 300px; max-width: 300px;" controls></video>
//                         <span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span>
//                     </div>`
//                 );
//                 // Store the videoURL in the previewElement's data
//                 previewElement.data('videoURL', videoURL);

//             } else if (fileType.startsWith('image/')) {
//                 var reader = new FileReader();
//                 reader.onload = function (e) {
//                     previewElement = $(
//                         `<div class="preview-item position-relative m-2">
//                             <img src="${e.target.result}" class="img-thumbnail" style="max-height: 300px; max-width: 300px;">
//                             <span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span>
//                         </div>`
//                     );
//                     previewContainer.append(previewElement);
//                 };
//                 reader.readAsDataURL(file);
//             }

//             if (previewElement) {
//                 previewContainer.append(previewElement);

//                 previewElement.on('click', function () {
//                     var content;
//                     var clickedElement = $(this); // The element that was clicked.

//                     if (fileType.startsWith('video/')) {
//                         // Retrieve the videoURL from the clicked element's data
//                         var videoURL = clickedElement.data('videoURL');
//                         content = $(`<video src="${videoURL}" controls style="max-width: 90%; max-height: 90%;"></video>`);
//                     } else if (fileType.startsWith('image/')) {
//                         var imgSrc = clickedElement.find("img").attr("src");
//                         content = $(`<img src="${imgSrc}" style="max-width: 90%; max-height: 90%;">`);
//                     }
//                     enlargedContent.empty().append(content);
//                     enlargedView.css('visibility', 'visible');
//                 });

//                 previewElement.find('.delete-preview').on('click', function (event) {
//                     event.stopPropagation();
//                     $(this).closest('.preview-item').remove();
//                 });
//             }
//         }
//         $(this).val('');
//     });

//     $('.close-enlarged').click(function () {
//         $(this).closest('.enlarged-view').css('visibility', 'hidden');
//     });
// });


$(document).ready(function () {
    console.log("Inside ready video check");

    $('#operation_images').change(function () {
        console.log("inside change");
        var files = this.files;
        var parent = $(this).parent(); //find the parent container.
        var previewContainer = parent.find('.preview-container');
        var enlargedView = parent.find('.enlarged-view');
        var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function (e) {
                var fileType = file.type;
                var previewElement;

                if (fileType.startsWith('image/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                } else if (fileType.startsWith('video/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                }

                if (previewElement) {
                    previewContainer.append(previewElement);

                    previewElement.on('click', function () {
                        var content;
                        if (fileType.startsWith('image/')) {
                            content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
                        } else if (fileType.startsWith('video/')) {
                            content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
                        }
                        enlargedContent.empty().append(content);
                        enlargedView.css('visibility', 'visible');
                    });

                    previewElement.find('.delete-preview').on('click', function (event) {
                        event.stopPropagation();
                        $(this).closest('.preview-item').remove();
                    });
                }
            };
            reader.readAsDataURL(file);
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});


$(document).ready(function () {
    console.log("Inside ready video check");

    $('#cut_images').change(function () {
        console.log("inside change");
        var files = this.files;
        var parent = $(this).parent(); // Find the parent container
        var previewContainer = parent.find('.preview-container');
        var enlargedView = parent.find('.enlarged-view');
        var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function (e) {
                var fileType = file.type;
                var previewElement;

                if (fileType.startsWith('image/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                } else if (fileType.startsWith('video/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                }

                if (previewElement) {
                    previewContainer.append(previewElement);

                    previewElement.on('click', function () {
                        var content;
                        if (fileType.startsWith('image/')) {
                            content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
                        } else if (fileType.startsWith('video/')) {
                            content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
                        }
                        enlargedContent.empty().append(content);
                        enlargedView.css('visibility', 'visible');
                    });

                    previewElement.find('.delete-preview').on('click', function (event) {
                        event.stopPropagation();
                        $(this).closest('.preview-item').remove();
                    });
                }
            };
            reader.readAsDataURL(file);
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});


$(document).ready(function () {
    console.log("Inside ready video check");

    $('#sample_images').change(function () {
        console.log("inside change");
        var files = this.files;
        var parent = $(this).parent(); // Find the parent container
        var previewContainer = parent.find('.preview-container');
        var enlargedView = parent.find('.enlarged-view');
        var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function (e) {
                var fileType = file.type;
                var previewElement;

                if (fileType.startsWith('image/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                } else if (fileType.startsWith('video/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                }

                if (previewElement) {
                    previewContainer.append(previewElement);

                    previewElement.on('click', function () {
                        var content;
                        if (fileType.startsWith('image/')) {
                            content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
                        } else if (fileType.startsWith('video/')) {
                            content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
                        }
                        enlargedContent.empty().append(content);
                        enlargedView.css('visibility', 'visible');
                    });

                    previewElement.find('.delete-preview').on('click', function (event) {
                        event.stopPropagation();
                        $(this).closest('.preview-item').remove();
                    });
                }
            };
            reader.readAsDataURL(file);
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});


$(document).ready(function () {
    console.log("Inside ready video check");

    $('.radiology_input').change(function () {
        console.log("inside change");
        var files = this.files;
        var parent = $(this).parent(); // Find the parent container
        var previewContainer = parent.find('.preview-container');
        var enlargedView = parent.find('.enlarged-view');
        var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function (e) {
                var fileType = file.type;
                var previewElement;

                if (fileType.startsWith('image/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                } else if (fileType.startsWith('video/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                }

                if (previewElement) {
                    previewContainer.append(previewElement);

                    previewElement.on('click', function () {
                        var content;
                        if (fileType.startsWith('image/')) {
                            content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
                        } else if (fileType.startsWith('video/')) {
                            content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
                        }
                        enlargedContent.empty().append(content);
                        enlargedView.css('visibility', 'visible');
                    });

                    previewElement.find('.delete-preview').on('click', function (event) {
                        event.stopPropagation();
                        $(this).closest('.preview-item').remove();
                    });
                }
            };
            reader.readAsDataURL(file);
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});

$(document).ready(function () {

    $('#enlarged-view').hide();

    // Click event for images in the specified table cell
    $('.pentagon_img img').click(function() {
        // Get the source of the clicked image
        var imgSrc = $(this).attr('src');

        // Create an image element for the enlarged view
        var enlargedImg = $('<img src="' + imgSrc + '" style="max-width: 90%; max-height: 90%;">');

        // Clear and append the enlarged image to the content div
        $('#enlarged-content').empty().append(enlargedImg);

        // Show the enlarged view
        $('#enlarged-view').show();
    });

    // Click event for images in the specified div
    $('.back-img img').click(function() {
        // Get the source of the clicked image
        var imgSrc = $(this).attr('src');

        // Create an image element for the enlarged view
        var enlargedImg = $('<img src="' + imgSrc + '" style="max-width: 90%; max-height: 90%;">');

        // Clear and append the enlarged image to the content div
        $('#enlarged-content').empty().append(enlargedImg);

        // Show the enlarged view
        $('#enlarged-view').show();
    });


    $('.reflex_img img').click(function() {
        // Get the source of the clicked image
        var imgSrc = $(this).attr('src');

        // Create an image element for the enlarged view
        var enlargedImg = $('<img src="' + imgSrc + '" style="max-width: 90%; max-height: 90%;">');

        // Clear and append the enlarged image to the content div
        $('#enlarged-content').empty().append(enlargedImg);

        // Show the enlarged view
        $('#enlarged-view').show();
    });

    $('.tones_img img').click(function() {
        // Get the source of the clicked image
        var imgSrc = $(this).attr('src');

        // Create an image element for the enlarged view
        var enlargedImg = $('<img src="' + imgSrc + '" style="max-width: 90%; max-height: 90%;">');

        // Clear and append the enlarged image to the content div
        $('#enlarged-content').empty().append(enlargedImg);

        // Show the enlarged view
        $('#enlarged-view').show();
    });




    // Close enlarged view
    $('#close-enlarged').click(function() {
        $('#enlarged-view').hide();
    });

});

$(document).ready(function () {
    console.log("Inside ready video check");

    $('#personal_img').change(function () {
        console.log("inside change");
        var files = this.files;
        var parent = $(this).parent(); //find the parent container.
        var previewContainer = parent.find('.preview-container');
        var enlargedView = parent.find('.enlarged-view');
        var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function (e) {
                var fileType = file.type;
                var previewElement;

                if (fileType.startsWith('image/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                } else if (fileType.startsWith('video/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                }

                if (previewElement) {
                    previewContainer.append(previewElement);

                    previewElement.on('click', function () {
                        var content;
                        if (fileType.startsWith('image/')) {
                            content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
                        } else if (fileType.startsWith('video/')) {
                            content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
                        }
                        enlargedContent.empty().append(content);
                        enlargedView.css('visibility', 'visible');
                    });

                    previewElement.find('.delete-preview').on('click', function (event) {
                        event.stopPropagation();
                        $(this).closest('.preview-item').remove();
                    });
                }
            };
            reader.readAsDataURL(file);
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});

$(document).ready(function () {
    console.log("Inside ready video check");

    $('#personal_picture').change(function () {
        console.log("inside change");
        var files = this.files;
        var parent = $(this).parent(); //find the parent container.
        var previewContainer = parent.find('.preview-container');
        var enlargedView = parent.find('.enlarged-view');
        var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function (e) {
                var fileType = file.type;
                var previewElement;

                if (fileType.startsWith('image/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><img src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                } else if (fileType.startsWith('video/')) {
                    previewElement = $('<div class="preview-item position-relative m-2"><video src="' + e.target.result + '" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></video><span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span></div>');
                }

                if (previewElement) {
                    previewContainer.append(previewElement);

                    previewElement.on('click', function () {
                        var content;
                        if (fileType.startsWith('image/')) {
                            content = $('<img src="' + e.target.result + '" style="max-width: 90%; max-height: 90%;">');
                        } else if (fileType.startsWith('video/')) {
                            content = $('<video src="' + e.target.result + '" controls style="max-width: 90%; max-height: 90%;"></video>');
                        }
                        enlargedContent.empty().append(content);
                        enlargedView.css('visibility', 'visible');
                    });

                    previewElement.find('.delete-preview').on('click', function (event) {
                        event.stopPropagation();
                        $(this).closest('.preview-item').remove();
                    });
                }
            };
            reader.readAsDataURL(file);
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});



// $(document).ready(function () {
//     $('#cv_input').change(function () {
//         var files = this.files;
//         var parent = $(this).parent(); // Find the parent container
//         var previewContainer = parent.find('.preview-container');
//         var enlargedView = parent.find('.enlarged-view');
//         var enlargedContent = enlargedView.find('.enlarged-content');

//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             var fileType = file.type;

//             if (fileType === 'application/pdf') {
                // Preview PDF
//                 var fileURL = URL.createObjectURL(file);
//                 var previewElement = $(
//                     `<div class="preview-item position-relative m-2">
//                         <iframe src="${fileURL}" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></iframe>
//                         <span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span>
//                     </div>`
//                 );

//                 previewContainer.append(previewElement);

//                 previewElement.on('click', function () {
//                     var content = $('<iframe src="${fileURL}" style="width: 100%; height: 100%;"></iframe>');
//                     enlargedContent.empty().append(content);
//                     enlargedView.css('visibility', 'visible');
//                 });

//                 previewElement.find('.delete-preview').on('click', function (event) {
//                     event.stopPropagation();
//                     $(this).closest('.preview-item').remove();
//                 });
//             }
//         }
//         $(this).val('');
//     });

//     $('.close-enlarged').click(function () {
//         $(this).closest('.enlarged-view').css('visibility', 'hidden');
//     });
// });


$(document).ready(function () {
    $('#cv_input').change(function () {
        var files = this.files;
        var parent = $(this).parent();
        var previewContainer = parent.find('.preview-container');
        // var enlargedView = parent.find('.enlarged-view');
        // var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileType = file.type;

            if (fileType === 'application/pdf') {
                var fileURL = URL.createObjectURL(file);
                var previewElement = $(
                    `<div class="preview-item position-relative m-2">
                        <iframe src="${fileURL}" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></iframe>
                        <span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span>
                    </div>`
                );

                previewContainer.append(previewElement);

                
                previewElement.on('click', function () {
                    window.open(fileURL, '_blank'); // Open in new tab/window
                });

                previewElement.find('.delete-preview').on('click', function (event) {
                    event.stopPropagation();
                    $(this).closest('.preview-item').remove();
                });
            }
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});

$(document).ready(function () {
    $('#input_CV').change(function () {
        var files = this.files;
        var parent = $(this).parent();
        var previewContainer = parent.find('.preview-container');
        // var enlargedView = parent.find('.enlarged-view');
        // var enlargedContent = enlargedView.find('.enlarged-content');

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var fileType = file.type;

            if (fileType === 'application/pdf') {
                var fileURL = URL.createObjectURL(file);
                var previewElement = $(
                    `<div class="preview-item position-relative m-2">
                        <iframe src="${fileURL}" class="img-thumbnail" style="max-height: 300px; max-width: 300px;"></iframe>
                        <span class="delete-preview position-absolute top-0 end-0 bg-danger text-white rounded-circle p-1" style="cursor: pointer;">&times;</span>
                    </div>`
                );

                previewContainer.append(previewElement);

                // Open PDF in new tab/window on click
                previewElement.on('click', function () {
                    window.open(fileURL, '_blank'); // Open in new tab/window
                });

                previewElement.find('.delete-preview').on('click', function (event) {
                    event.stopPropagation();
                    $(this).closest('.preview-item').remove();
                });
            }
        }
        $(this).val('');
    });

    $('.close-enlarged').click(function () {
        $(this).closest('.enlarged-view').css('visibility', 'hidden');
    });
});