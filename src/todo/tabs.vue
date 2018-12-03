<template>
    <div class="helper">
        <span class="left">{{unfinishedLength}} item left</span>
        <span class="tabs">
            <span 
              v-for="state in states"
              :key="state"
              :class="[state,filter === state ? 'actived' : '']"
              @click="toggleFilter(state)"
            >
            {{state}}
            </span>
            <span class="clear" @click="clearAllCompleted">Clear Completed</span>
        </span>
    </div>
</template>

<script>
export default {
    props:{
        filter:{
            type: String,
            required:true
        },
        todos:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
            states:['all','active','completed']
        }
    },
    computed:{
        unfinishedLength(){
            return this.todos.filter(todo=>!todo.completed).length
        } 
    },
    methods:{
        toggleFilter(state){
            this.$emit('toggle',state)
        },
        clearAllCompleted(){
            this.$emit('clearAllCompleted')
        }
    }
}
</script>
<style lang="stylus" scoped>
.left{
    float: right;
    margin: 13px 8px;
    padding-left 5px
    padding-right 5px
    background: white;
    text-align: center;
    padding-top: 7px;
    height: 30px;
    display: inline-block;
}
.active{
    padding-left 5px
    padding-right 5px
    margin: 13px 8px;
    background: white;
    text-align: center;
    padding-top: 7px;
    height: 30px;
    display: inline-block;
}
.clear{
    float: right;
    margin: 13px 8px;
    padding-left 5px
    padding-right 5px
    background: white;
    text-align: center;
    padding-top: 7px;
    height: 30px;
    display: inline-block;
}
.completed{
    padding-left 5px
    padding-right 5px
    margin: 13px 8px;
    background: white;
    text-align: center;
    padding-top: 7px;
    height: 30px;
    display: inline-block;
}
.all{
    margin: 13px 8px;
    background: white;
    text-align: center;
    padding-left 5px
    padding-right 5px
    padding-top: 7px;
    height: 30px;
    display: inline-block;
}
</style>


