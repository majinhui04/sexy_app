$(function(){

    // data-toggle="collapse"
    $(document).on('click','[data-toggle="collapse"]',function(e){
        var $target = $(e.currentTarget), 
            $parent = $target.parent(),
            id = $target.attr('data-href') || '',
            $content = id? $('#'+id):$parent.find('[data-role="content"]'),
            height = $content.height();

        
        // 若展开则收起
        if($target.hasClass('aria-expanded')) {
            $content.slideUp(400,function(){
                $content.addClass('collapse');
            });

        }else {
            //$content.removeClass('collapse');
            $content.slideDown(400,function(){});
        }
        $target.toggleClass('aria-expanded');


    });

    // 返回键
    $(document).on('click','[role="back"]',function(e){
       
        history.go(-1);
    });

    // radio 
    $(document).on('click','.radio-simulate',function(e){
        var label = $(e.currentTarget), 
            input = label.parent().find('input')[0],
            checked = input.checked,
            inputs = label.parent().parent().find('input');

        
        inputs.removeAttr('checked');
        if(checked) {
            input.checked = false;
        }else {
            input.checked = true;
        }
        
        
    });
    
});
