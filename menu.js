let menuItems=[
    {title:"Team"},

    {title:"Service",
     menu:[
    {title:"WEB & APP development"},
    {title:"APP testing"},
    {title:"WEB design"}
]
},
    {title:"Reviews",
     icon:'<i class="fa-regular fa-bell"></i>'},

    {title:"Order",
    url:"/order"},

    {title:"Contacts"}
]
const renderMenu = function(parent,items){
html=`<ul>`
for(let i=0;i<items.length;i++){
    html+=`<li>
    <span>${items[i].icon??''}</span>
    <a href="${items[i].url??'#'}" 
         onclick="renderSubmenu(${i},${items[i].menu!= undefined})">
         ${items[i].title}
    </a>
    </li>`
}
html+=`</ul>`
parent.innerHTML+=html
}

const renderSubmenu=function(index,render){
if(render){
    let li=document.querySelector(`li:nth-child(${index+1})`)
    if(!menuItems[index].open){

    renderMenu(li,menuItems[index].menu)
    menuItems[index].open=true
}
    else{
        navBar.innerHTML=``
        renderMenu(navBar,menuItems)
        menuItems[index].open=false
     }
}
}
renderMenu(navBar,menuItems)