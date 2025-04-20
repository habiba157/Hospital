

$(document).ready(function() {
    $('#add_row').click(function() {
      var tableBody = $('#medicine_table tbody');
      var newRow = `<tr>
                                <td>
                                    <select name="medicine_name" id="medicine_name" class="form-select">
                                        <option disabled selected>Select</option>
                                        <option value="name1" name="name1">Name 1</option>
                                        <option value="name2" name="name2">Name 1</option>

                                        <option value="name3" name="name3">Name 1</option>

                                        <option value="name4" name="name4">Name 1</option>

                                        </select>
                                </td>
                                <td><input type="text" class="number_dosage w-25"> <input type="text" name="dosage_unit" id="dosage_unit" class="number_dosage_unit w-25"></td>
                                <td><input type="text" class="number_frequency w-50"></td>
                                <td><input type="text" class="number_duration w-50"></td>
                            </tr>`;
      tableBody.append(newRow);
  
      // Scroll to the bottom of the table
      // $('.table-container').scrollTop(tableBody[0].scrollHeight);
      requestAnimationFrame(function() {
        $('.table-container').scrollTop(tableBody[0].scrollHeight);
    });
    });
  });

  $(document).ready(function() {
    $('#add_row').click(function() {
      var tableBody = $('#medication_table tbody');
      var newRow = `<tr>
                                <td>
                                    <select name="medicine_name" id="medicine_name" class="form-select">
                                        <option disabled selected>Select</option>
                                        <option value="name1" name="name1">Name 1</option>
                                        <option value="name2" name="name2">Name 1</option>

                                        <option value="name3" name="name3">Name 1</option>

                                        <option value="name4" name="name4">Name 1</option>

                                        </select>
                                </td>
                                <td><input type="text" class="number_dosage w-25"> <input type="text" name="dosage_unit" id="dosage_unit" class="number_dosage_unit w-25"></td>
                                <td><input type="text" class="number_frequency w-50"></td>
                                
                            </tr>`;
      tableBody.append(newRow);
  
      // Scroll to the bottom of the table
      // $('.table-container').scrollTop(tableBody[0].scrollHeight);
      // tableBody.find('tr:last')[0].scrollIntoView({ behavior: 'smooth', block: 'end' });


      requestAnimationFrame(function() {
        $('.table-container').scrollTop(tableBody[0].scrollHeight);
    });

    });
  });


  $(document).ready(function() {
    $('.expected_time #add_row').one('click', function() {
      $('.expected_time .added').append('<p class="fw-bold text-primary">Expected Time of The Second Plan <span><input type="number" class="number_day"></span>Day</p>');
      
    })
  });