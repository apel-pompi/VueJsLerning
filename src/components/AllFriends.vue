<template>
    <div class="allfriend">
        <h2>All Friends</h2>
        <div v-for="(friend,index) in friends" :key="index">
            <h3 @click="unfriend(friend.name)">{{ friend.name }}</h3>
        </div>
    </div>
</template>

<script>
export default{
    name: 'AllFriend',
    props:['friends'],
    data(){
        return {
            
        }
    },
    methods:{
        unfriend(name){
            this.$emit('delete',{name})
        }
    }
}
</script>