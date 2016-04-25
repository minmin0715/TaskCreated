$(document).ready(function() {
    for (var i = 0; i < data.length; i++) {
        $('table').append('<tr><td class="col1">' +
            data[i].name + '</td><td class="col2">' +
            data[i].date + '</td><td class="col3">' +
            data[i].assigned + '</td></tr>');
    }
});

function validate() {
    var valid = true;
    if ($('#task').val() == '') {
        $('.remind').eq(0).css('display', 'inline');
        valid = false;
    } else {
        $('.remind').eq(0).css('display', 'none');
    }
    if ($('#date').val() == '') {
        $('.remind').eq(1).css('display', 'inline');
        valid = false;
    } else {
        $('.remind').eq(1).css('display', 'none');
    }
    if ($('#name').val() == '') {
        $('.remind').eq(2).css('display', 'inline');
        valid = false;
    } else {
        $('.remind').eq(2).css('display', 'none');
    }
    return valid;
}

function fixDateFormat(dateStr) {
    var newDate = dateStr.split('-');
    newDate.push(newDate[0]);
    newDate.shift();
    return newDate.join('/');
}

function addNewTask() {
    var addTask = {};
    addTask["name"] = $('#task').val();
    addTask["date"] = fixDateFormat($('#date').val());
    addTask["assigned"] = $('#name').val();
    data.unshift(addTask);
}

function appendToTable() {
    $('table').prepend('<tr><td class="col1">' +
        data[0].name + '</td><td class="col2">' +
        data[0].date + '</td><td class="col3">' +
        data[0].assigned + '</td></tr>');
}

$('#submit').on('click', function(event) {
    event.preventDefault();
    if (validate()) {
        addNewTask();
        appendToTable();
        $('input').val('');
    }

});