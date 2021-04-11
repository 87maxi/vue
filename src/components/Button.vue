<template>
    
    <button @click="helloBackFunc()" :style="{background: color}" >{{text}} </button>

</template>
<script>
export default {
    name : 'Button',
    props:{
        text:String,
        color:String,
    },
    data(){
        return {
            helloBackVar: 'Hello Parent'
        }
    },

    methods:{
        helloBackFunc(){
            this.$emit('toggle-add-task')
        }
    }

}
</script>
