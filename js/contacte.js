var contact = '<tr>'+
    '<th>First Name</th>'+
'<th>Last Name</th>'+
'<th>Phone</th>'+
    '</tr>';

function getContactHTML(contact){
    return  '<tr>'+
        '<th>'+ contact.firstName +'</th>'+
        '<th>'+ contact.lastName +'</th>'+
        '<th>'+ contact.phone +'</th>'+
        '</tr>';
}




var contacts = [

    {firstName:'Matei', lastName:'Nicolae', phone :'123'},
    {firstName:'Vasile', lastName:'u', phone :'234'},
    {firstName:'Victor', lastName:'D', phone :'345'}


];

function showcontacts(contacts) {
    for(var i =0;i<contacts.length; i++){
        console.info(contacts[i]);
        contactsHTML += getContactHTML([i]);
    }

    $('#agenda tbody').html(contactsHTML);
}

//showcontacts();
$.ajax(   )