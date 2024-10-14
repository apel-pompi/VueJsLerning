<template>
    <div class="online">
        <h2>Online Friends</h2>
        <div v-for="(friend,index) in friends" :key="index">
            <h4 v-if="friend.online">{{ friend.name }}</h4>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Online',
    props:['friends'],
    data(){
        return {
            
        }
    }
}
</script>