export default function makePersonForm() {

  let snap = $(`
    <div id="personFormContainer">
    <form id="person-form">
    <label for="firstName">First Name</label>
    <input type="text" value="Devon" placeholder="Enter first name" id="firstName">
    <label for="lastName">Last Name</label>
    <input type="text" value="Moubry" placeholder="Enter last Name" id="lastName">
    <label for="address">Address</label>
    <input type="text" value="1234" placeholder="1234 Internet Place Austin, TX 78777" id="address">
    <label for="phonenumber">Phone Number</label>
    <input type="text" value="123" placeholder="(888)888-8888" id="phonenumber">
    <input type="submit" class="submit" value="SAVE" id="">
    </form>
    </div>
  `);

  $(snap).find('#person-form').submit(function(event) {
    event.preventDefault();

    let firstName = event.target.elements['firstName'].value;
    let lastName = event.target.elements['lastName'].value;
    let address = event.target.elements['address'].value;
    let phonenumber = event.target.elements['phonenumber'].value;

    let settings = {
      type: 'POST',
      contentType: 'application/json',
      url: 'http://tiny-za-server.herokuapp.com/collections/devonmoubry-personForm',
      data: JSON.stringify ({
        firstName: firstName,
        lastName: lastName,
        address: address,
        phonenumber: phonenumber
      })
    }

    $.ajax(settings).then(function(data, status, xhr) {
      let msg = `<p>Hello ${firstName}!</p>`;
      $('#person-form').append(msg);
    })

  })

  return snap;
};
