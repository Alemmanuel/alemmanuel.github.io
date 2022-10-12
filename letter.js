document.addEventListener('keydown', (event)=>{
    var key = event.key
    var letters = document.getElementById('letters')
    letters.src=`letters/${key}.png`
})