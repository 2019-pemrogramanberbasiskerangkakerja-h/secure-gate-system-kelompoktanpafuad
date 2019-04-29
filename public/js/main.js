$(document).ready(function(){
    $('.delete-gate').on('click', function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type:'DELETE',
            url: '/gate/'+id,
            success: function(response){
                alert('Deleting Gate');
                window.location.href='/';
            },
            error: function(err){
                console.log(err);
            }
        });
    })
});