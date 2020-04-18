function validateForm() {
  var name = document.forms['fNode']['nombre'].value;
  if (name == '') {
    alert('Name must be filled out');
    return false;
  }

  var lastName = document.forms['fNode']['apellido'].value;
  if (lastName == '') {
    alert('last name must be filled out');
    return false;
  }
}
