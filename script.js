let areas = {
    a:null,
    b:null,
    c:null
}

document.querySelectorAll('.item').forEach(item=>{
    item.addEventListener('dragstart',dragStart);
    item.addEventListener('dragend',dragEnd);
})

document.querySelectorAll('.area').forEach(item=>{
    item.addEventListener('dragover',dragOver)
    item.addEventListener('dragleave',dragLeave)
    item.addEventListener('drop',drop)
})

document.querySelectorAll('.neutralArea').forEach(item=>{
    item.addEventListener('dragover',dragOverNeutral)
    item.addEventListener('dragleave',dragLeaveNeutral)
    item.addEventListener('drop',dropNeutral)
})
//functions item
function dragStart(e){
    e.target.classList.add('dragging')
}
function dragEnd(e){
    e.target.classList.remove('dragging')
}

//function area
function dragOver(e){
    if(e.currentTarget.querySelector('.item') === null){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
    
}
function dragLeave(e){
    e.currentTarget.classList.remove('hover')
}
function drop(e){
    e.currentTarget.classList.remove('hover')
    
    let dragItem = document.querySelector('.item.dragging')
    
   if(e.currentTarget.querySelector('.item') === null){
        uptdate(dragItem.textContent,e.currentTarget.getAttribute('data-name'))
        e.currentTarget.appendChild(dragItem)
    }


}

//functions neutral area
function dragOverNeutral(e){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dropNeutral(e){
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem)
    uptdate(dragItem.textContent,e.currentTarget.getAttribute('data-name'))
    document.querySelector('.areas').classList.remove('correct')
    
}

function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover');
}


//logic

function uptdate(a,b){
   areas[b] = a;
   console.log(areas)
 
   if(areas.a=='1' && areas.b=='2' && areas.c=='3' ){
    document.querySelector('.areas').classList.add('correct')
   }
   else{
    document.querySelector('.areas').classList.remove('correct')
   }
}