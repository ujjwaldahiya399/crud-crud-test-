document.getElementById("addItm").addEventListener("click", function(e) {
    e.preventDefault();
    submitForm();
});
function submitForm() {
    
        const Itmname = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("Price").value;
        const quantity = document.getElementById("Quantity").value;
  
        // Create an object with form data
        const formData = {
          Itmname:Itmname,
          description:description,
          price:price,
          quantity:quantity
        };
  
        
        axios.post('url', formData) // my crud crud api has reached it's daily subscription limit.
        .then(response => response.data)
        .then(data => {
          // Render the form data on the screen as an li
          renderItmInfo(data);
        })
        .catch(error => console.error('Error:', error));
}
function renderItmInfo(data) {
    const ItmList = document.querySelector("ul");

    // Create a new list item with the student information
    const listItem = document.createElement("li");
    const id = data._id;
    listItem.setAttribute("data-id", id);
    listItem.textContent = ` ${data.Itmname}  ${data.description}  ${data.price}  ${data.quantity}`;

    // Create a button to decrease Item number by 1
    const decreaseBy1Button = document.createElement("button");
    decreaseBy1Button.textContent = "Buy 1";
    const parentId = decreaseBy1Button.parentElement.id;
    decreaseBy1Button.onclick = () => decreaseItmBy1(data.quantity, listItem,parentId);

    // Create a button to decrease Item number by 2
    const decreaseBy2Button = document.createElement("button");
    decreaseBy2Button.textContent = "Buy 2";
    decreaseBy2Button.onclick = () => decreaseItmBy2(data.quantity, listItem,parentId);

    // Create a button to decrease Item number by 3
    const decreaseBy3Button = document.createElement("button");
    decreaseBy3Button.textContent = "Buy 3";
    decreaseBy3Button.onclick = () => decreaseItmBy3(data.quantity, listItem,parentId);
    // Append the button to the list item
    listItem.appendChild(decreaseBy1Button);
    listItem.appendChild(decreaseBy2Button);
    listItem.appendChild(decreaseBy3Button);

    // Append the list item to the student list
    ItmList.appendChild(listItem);
  }

  function decreaseItmBy1(quantity, listItem,parentId) {
    const newItemNo = parseInt(quantity) - 1;

    // Update the list item's text content with the new Item number
    listItem.textContent = listItem.textContent.replace(` ${quantity}`, ` ${newItemNo}`);

    axios.put(`url/${parentId}`, {quantity: newItemNo})
    axios.get(`url/${parentId}`) // i have react daily maximum limit
    .then(response => response.data)
    .then(data => {
      // Update the Item number in the listItem if the backend operation is successful
      listItem.textContent = listItem.textContent.replace( `${quantity}`, ` ${data.quantity}` );
    })
    .catch(error => console.error('Error:', error));
  }

  function decreaseItmBy2(quantity, listItem) {
    const newItemNo = parseInt(quantity) - 2;

    // Update the list item's text content with the new Item number
    listItem.textContent = listItem.textContent.replace(` ${quantity}`, ` ${newItemNo}`);

    axios.put(`url/${parentId}`, {quantity: newItemNo})
    axios.get(`url/${parentId}`) // i have react daily maximum limit
    .then(response => response.data)
    .then(data => {
      // Update the Item number in the listItem if the backend operation is successful
      listItem.textContent = listItem.textContent.replace( `${quantity}`, ` ${data.quantity}` );
    })
    .catch(error => console.error('Error:', error));
  }

  function decreaseItmBy3(quantity, listItem) {
    const newItemNo = parseInt(quantity) - 3;

    // Update the list item's text content with the new Item number
    listItem.textContent = listItem.textContent.replace(` ${quantity}`, ` ${newItemNo}`);

    axios.put(`url/${parentId}`, {quantity: newItemNo})
    axios.get(`url/${parentId}`) // i have react daily maximum limit
    .then(response => response.data)
    .then(data => {
      // Update the Item number in the listItem if the backend operation is successful
      listItem.textContent = listItem.textContent.replace( `${quantity}`, ` ${data.quantity}` );
    })
    .catch(error => console.error('Error:', error));
  }
    // console.log("hii");
    // const itemName = document.getElementById("name").value;
    // const description = document.getElementById("description").value;
    // const price = document.getElementById("Price").value;
    // const quantity = document.getElementById("Quantity").value;
    // const ul = document.querySelector("ul");
    // ul.innerHTML = ""
    // const li = document.createElement("li");
    // li.innerText = `${itemName}  ${description}  ${price}  ${quantity}`
    // ul.appendChild(li);
    // let buy1Btn = document.createElement("button");
    // let buy2Btn = document.createElement("button");
    // let buy3Btn = document.createElement("button");
    // buy1Btn.innerText = "Buy 1";
    // buy2Btn.innerText = "Buy 2";
    // buy3Btn.innerText = "Buy 3";
    // li.appendChild(buy1Btn);
    // li.appendChild(buy2Btn);
    // li.appendChild(buy3Btn);
    // buy1Btn.addEventListener("click",function(){
    //     quantity = parseInt(quantity,10)-1;
    //     let newData = {itemName:itemName,description:description,quantity:quantity,price:price}
    //     sendDataToBackend(newData);
    // });
    // buy2Btn.addEventListener("click",function(){
    //     quantity = parseInt(quantity,10)-2;
    //     let newData = {itemName:itemName,description:description,quantity:quantity,price:price}
    //     sendDataToBackend(newData);
    // });
    // buy3Btn.addEventListener("click",function(){
    //     quantity = parseInt(quantity,10)-3;
    //     let newData = {itemName:itemName,description:description,quantity:quantity,price:price}
    //     sendDataToBackend(newData);
    // });
    // const url = ""
    // axios.post(url, {
    //     item_name: itemName,
    //     description: description,
    //     price: price,
    //     quantity: quantity
    //   })
    //   .then(function 