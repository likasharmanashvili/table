fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((data) => {
 data.forEach(item=> {
   let products = document.querySelector(".table")
   const table = document.createElement("tr")
   table.innerHTML = `
   <table class = "tableone">
   <tr class="tr">
   <th class = "id" >${item.id} </th>
   <th class = "title" >${item.title} </th>
   <th  class = "category" >${item.category} </th>
   <th  class = "price" >${item.price} </th>
   <th  class = "rate" >${item.rating.rate} </th>
   <th  class = "count" >${item.rating.count} </th>
   <td> <div class="status">Delivered</div> </td>
   <div class="icon1">
  
   <img src="./images/edit.svg" alt="">
   <img src="./images/remove.svg" alt="" />
   </div>
   </tr>
   </table>
   `
   products.appendChild(table)
 })



    
   





}
   )



   const button = document.querySelector(".dark")
   const table = document.querySelector(".table")
const buttons = document.querySelector(".buttons")
const btn2 = document.querySelector (".btn2")
const btn3 = document.querySelector (".btn3")
const header1 = document.querySelector (".headerchild")
const input = document.getElementsByTagName("input")
const button10 = document.querySelector(".button10")

   button.addEventListener('click' , () => {
table.style.backgroundColor = " #1D1E42"
table.style.color = "white"
buttons.style.color = "white"
btn2.style.backgroundColor = "#141432"
btn2.style.color = "white"
btn3.style.backgroundColor = "#141432"
btn3.style.color = "white"
header1.style.color = "white"
button10.style.backgroundColor = "#141432"
button10.style.color = "white"
document.body.style.backgroundColor ="#141432";

   })