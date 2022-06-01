// need: picture(prob thumbnail), first and last name, email, address, DOB, customer since date
console.log(customers)
console.log(moment())

const customerContainer = document.querySelector('#customerContainer')

function showCustomers(customers) {
    // const customerContainer = document.querySelector('#customerContainer')
    for (let customer of customers) {

        let customerCard = document.createElement("div")
        customerCard.classList.add("customer_card")

        let customerPic = document.createElement("img")
        customerPic.setAttribute("src", customer.picture.large)
        customerCard.appendChild(customerPic)

        let customerNameP = document.createElement("p")
        customerNameP.classList.add("capitalize")
        customerNameP.innerText = (`${customer.name.first} ${customer.name.last}`)
        customerCard.appendChild(customerNameP)

        let customerEmailP = document.createElement("p")
        customerEmailP.classList.add("email")
        customerEmailP.innerText = (`${customer.email}`)
        customerCard.appendChild(customerEmailP)

        let customerAddress1 = document.createElement("p")
        customerAddress1.innerText = (`${customer.location.street.number} ${customer.location.street.name}`)
        let customerAddress2 = document.createElement("p")
        customerAddress2.classList.add("address")
        let stateName = nameToAbbr(customer.location.state);
        customerAddress2.innerText = (`${customer.location.city}, ${stateName} ${customer.location.postcode}`)
        // customerAddress1.innerText = (`${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} ${stateName} ${customer.location.postcode}`)
        customerCard.appendChild(customerAddress1)
        customerCard.appendChild(customerAddress2)

        let customerDOBP = document.createElement("p")
        let dateOfBirth = moment(customer.dob.date).format("MMM D, YYYY");
        console.log(dateOfBirth)
        customerDOBP.innerText = (`DOB: ${dateOfBirth}`)
        customerCard.appendChild(customerDOBP)

        let customerSinceP = document.createElement("p")
        customerSinceP.classList.add("last_element")
        let sinceDate = moment(customer.registered.date).format("MMM D, YYYY");
        customerSinceP.innerText = (`Customer since: ${sinceDate}`)
        customerCard.appendChild(customerSinceP)

        customerContainer.appendChild(customerCard)
    }
}
showCustomers(customers)