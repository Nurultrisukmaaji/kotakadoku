const cont = document.querySelector('.gallery-container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelector('.thumb');


cont.addEventListener('click', function(e){
    if (e.target.className='thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumb.forEach(function(thumb){
            thumb.className='thumb';
        })
    }
});
