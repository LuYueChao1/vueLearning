<template>
    <section class="real-app">
        <input
          type="text"
          class="add-input"
          autofocus="autofocus"
          placeholder=" 接下来要做什么"
          @keyup.enter="addTodo"
        >
        <Item 
        :todo="todo"
        v-for="todo in filteredTodos"
        :key="todo.id"
        @del="deleteTodo"
        ></Item>
        <Tabs :filter="filter" 
        :todos="todos"
        @toggle="toggleFilter"
        @clearAllCompleted="clearallCompleted"
        ></Tabs>
    </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id=0
export default {
    data(){
        return{
            todos:[],
            filter:'all'
        }
    },
    components: {
        Item,
        Tabs
    },
    computed:{
        filteredTodos(){
            if(this.filter==='all')
            {
                return this.todos
            }
            const completed=this.filter==='completed'
            return this.todos.filter(todo=>completed===todo.completed)
        }
    },
    methods:{
        addTodo(e){
            this.todos.unshift({
                id:id++,
                content:e.target.value.trim(),
                completed:false
            })
            content:e.target.value=''
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)
        },
        toggleFilter(state){
            this.filter=state
            console.log(this.filter)
        },
        clearallCompleted(){
            this.todos=this.todos.filter(todo =>!todo.completed)
        }
    }
}
</script>

<style lang="stylus" scoped>
.real-app{
    width 600px
    margin 0 auto 
    box-shadow 0 0 5px #66
}

.add-input{
    width: 99.5%;
    height: 28px;
    margin-top: 3px
}
</style>


