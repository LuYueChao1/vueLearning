<template>
    <div :class="['todo-item',todo.completed ? 'completed' : '']">
        <input
          type="checkbox"
          class="toggle"
          v-model="todo.completed"
        >

        <label>{{todo.content}}</label>
        <button class="destroy" @click="deleteTodo">X</button>
    </div>
</template>

<script>
export default {
    props:{
        todo:{
            type:Object,
            required:true,
        }
    },
    methods:{
        deleteTodo(){
            this.$emit('del',this.todo.id)
        }
    }
}
</script>
<style lang="stylus" scoped>
.todo-item{
    margin-top: 5px;
    background: white;
    height: 35px;
}
.todo-item>label{
    font-size: 20px;
    display: inline-block;
    margin-top: 4px;
    margin-left 3px
}
.completed>label{
    font-size: 20px;
    display: inline-block;
    margin-top: 4px;
    margin-left 3px
    text-decoration line-through
}
.destroy{
    float: right;
    margin-right: 3px;
    margin-top: 10px;
    background: none;
    border: none
}
</style>

