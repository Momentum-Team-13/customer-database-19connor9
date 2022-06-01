console.log(customers);

const customerList = document.querySelector("#customer-list");
console.log(customerList);


for (let customer of customers) {
    let customerElement = document.createElement('div');

    customerElement.classList.add('customer');
    console.log(customerElement);
    let contentElement = document.createElement('article');

    contentElement.classList.add("br2", "ba", "dark-gray", "b--black-10", "mv4",
        "w-100", "w-50-m", "w-25-l", "mw5", "center");

    let imageElement = document.createElement('img');
    imageElement.src = customer.picture.medium;
    imageElement.alt = 'image of customer';

    imageElement.classList.add("db", "w-100", "br2", "br--top");
    contentElement.appendChild(imageElement);
    customerElement.appendChild(contentElement);

    let infoElement = document.createElement('div');
    infoElement.classList.add("pa2", "ph3-ns", "pb3-ns");

    let nameElement = document.createElement('h1');
    nameElement.classList.add("5", "f4-ns", "mv0");
    nameElement.innerText = `Name: ${customer.name.title} ${customer.name.first} ${customer.name.last}`
    contentElement.appendChild(nameElement);



    let addressElement = document.createElement('div');
    addressElement.classList.add("5", "f4-ns", "mv0");
    let stateAbrev = nameToAbbr(customer.location.state);
    addressElement.innerText = `Address: ${customer.location.street.number} ${customer.location.street.name} ${stateAbrev}`
    contentElement.appendChild(addressElement);
    customerList.appendChild(customerElement);

    let phoneElement = document.createElement('div');
    phoneElement.classList.add("5", "f4-ns", "mv0");
    phoneElement.innerText = `phone: ${customer.phone}`
    contentElement.appendChild(phoneElement);
    customerList.appendChild(customerElement);

    let birthElement = document.createElement('div');
    birthElement.classList.add("5", "f4-ns", "mv0");
    // console.log(DataTransfer.toISO(customer.dob.date))
    birthElement.innerText = `Birthday: ${customer.dob.date}`
    contentElement.appendChild(birthElement);
    customerList.appendChild(customerElement);

    let joinedElement = document.createElement('div');
    joinedElement.classList.add("5", "f4-ns", "mv0");
    joinedElement.innerText = `Joined: ${customer.registered.date}`
    contentElement.appendChild(joinedElement);
    customerList.appendChild(customerElement);





}