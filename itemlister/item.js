var getitem = document.getElementById('itemlist')
var form = document.getElementById('addform')
var filter = document.getElementById('filter')
var color = document.getElementById('custom-color')
var body = document.getElementsByTagName("body")
form.addEventListener("submit",additems)
var header = document.getElementById('main-header')
function additems(e)
{
  e.preventDefault()
  var newItem = document.getElementById("inputs").value
  var li = document.createElement("li")
  li.className = "list-group-item d-flex justify-content-between align-items-center"
  li.appendChild(document.createTextNode(newItem))

  var deletebtn = document.createElement("button")
  deletebtn.className = "btn btn-danger delete"
  deletebtn.appendChild(document.createTextNode("X")) 
  li.appendChild(deletebtn)
  getitem.appendChild(li)
}

getitem.addEventListener('click',removeitem)

function removeitem(e)
{
  console.log(e.target)
  if(e.target.classList.contains('delete'))
  {
      if(confirm('Do you want to Delete?'))
      {
      var li =e.target.parentElement;
      getitem.removeChild(li);
      }    
  }
}

filter.addEventListener("keyup",filteritems)

function filteritems(e){
  var text = e.target.value.toLowerCase()
  var items = getitem.getElementsByTagName("li")
  Array.from(items).forEach(function(item)
  {
    var itemName = item.firstChild.textContent
    if (itemName.toLowerCase().indexOf(text) != -1) {
      
      item.style.visibility = 'visible';
    } 
    else 
    {
      item.style.visibility = 'hidden';
    }
  }
  )
}

color.addEventListener('click',colors)

function colors(e){
  
  if(e.target.classList.contains('primary'))
  { 
    document.body.style.background = '#0275d8'
    
  }

  else if (e.target.classList.contains('secondary')) {
    document.body.style.background = '#6c757d';
  } else if (e.target.classList.contains('success')) {
    document.body.style.background = '#28a745';
    header.background = 'yellow';
  } else if (e.target.classList.contains('danger')) {
    document.body.style.background = '#dc3545';
  } else if (e.target.classList.contains('dark')) {
    document.body.style.background = '#343a40';
  } else if (e.target.classList.contains('white')) {
    document.body.style.background = '#ffffff';
  } else {
    document.body.style.background = '#ffffff';
  } 
}
