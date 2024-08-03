//adding event listener to info icon to show about section of the webpage
const infoElement=document.querySelector("#information");
document.querySelector("#icon").addEventListener("click",showfunction);
function showfunction(){
     if (infoElement.style.display === 'block' ) {
       
        infoElement.style.display = 'none';
    } else {
      
        infoElement.style.display = 'block';
    }
}
//adding event listener to button so it check if all the fiels are filled
document.querySelector("#btn").addEventListener("click",validation);
function validation(){
var a=document.getElementById("name").value;
var b=document.getElementById("id").value;
var c=document.getElementById("email").value;
var d=document.getElementById("phonenumber").value;

if(a==''||b==''||c==''||d=='')
    {
        alert("all fields are mandatory");
        return false;
   
    }
   
    
    else{
           true;
    }

}
//selecting the form to extract the form values added
const form=document.querySelector('form');
const tableBody = document.querySelector('#studenttable tbody');
let editingrow = null;
form.addEventListener('submit',function(e){
    e.preventDefault();//to prevent the form from refreshing
    const formData= new FormData(form);
    const newRow = document.createElement('tr');
  //using the for loop to iterate over the values and extract it
    formData.forEach(function(value, key){
        const cell = document.createElement('td');
        cell.textContent = value; // to store the value in the cell of tabledata
        newRow.appendChild(cell); //to send the value to the cell
         //using if condition so we can replace the value with edited value
        if (editingrow) {
        tableBody.replaceChild(newRow, editingrow);
        editingrow = null;
    } else {
        tableBody.appendChild(newRow);
    }
    form.reset();
    });
    //making edit icon
    const actionCell = document.createElement('td');
   const editicon= document.createElement('i');
   editicon.className="fas fa-edit";
   // adding event listener on the icon to call edit function for editing
   editicon.addEventListener("click",function(){
   editrow(newRow);
    alert ("edit clicked")
   });
   //making delete icon
   const deleteicon= document.createElement("i");
   deleteicon.className="fas fa-trash";
   //making an event listener which when clicked deletes the entire row
   deleteicon.addEventListener("click",function(){
    newRow.remove();
   });
   //inserting the edit & delete icon in action cell
   actionCell.appendChild(editicon);
   actionCell.appendChild(deleteicon);
   newRow.appendChild(actionCell);
    tableBody.appendChild(newRow);
    form.reset();
});
//making function for editing 
function editrow(row) {
    const cells = row.querySelectorAll('td');
    document.getElementById("name").value = cells[0].textContent;
    document.getElementById("id").value = cells[1].textContent;
    document.getElementById("email").value = cells[2].textContent;
    document.getElementById("phonenumber").value = cells[3].textContent;

    editingrow = row;
    document.getElementById("btn").textContent = "Update";
}
//after making a toggle button i am using event listener to making its display none to make it look more pleasable
const infoElement1=document.querySelector("#studenttable");
document.querySelector(".toggle-button").addEventListener("click",showfunction1);
function showfunction1(){
     if (infoElement1.style.display === 'none' ) {
       
        infoElement1.style.display = 'table';
    } else {
      
        infoElement1.style.display = 'none';
    }
}
