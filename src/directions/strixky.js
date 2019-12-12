import Vue from 'vue'

Vue.directive("stricky",{
    update:function(el,binding){
        let {value,oldValue}=binding
        if(value&& (value !=oldValue)){
            let child=document.querySelector(value)
            el.scrollTop=child.offsetTop;
        }
    }
})