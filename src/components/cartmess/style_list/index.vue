<template>
    <div class="style_wrap">
        样式组件
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return {

        }
    },
    computed:{
        },
    methods:{
        ...mapActions({
            getCartColorList:"ColorStyle/getCartColorList"
        })
    },
    created(){
        this.getCartColorList(2593)
    }
}
</script>
<style scoped  lang="scss">

</style>