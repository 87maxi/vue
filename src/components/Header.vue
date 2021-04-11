<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
    <Button @toggle-add-task="$emit('toggle-add-task')" 
    :color="showAddTask ? 'red' : 'green'" 
    :text="showAddTask ? 'Close' : 'add task'" />
</template>
<script>

import Button from './Button'



export default {
    name:'Header',
    props:  {
      title : {
          type: String,
          default: "MAXIMILIANO",
          
      },
      showAddTask: Boolean,
    },
    components:{
        Button
    },
    methods:{
        thanks(m){
            console.log(m)

        }
    },
    emits:['toggle-add-task']

}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

</style>