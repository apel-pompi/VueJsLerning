<template>
  <div id="home">
    <navbar></navbar>
    <allfriend :friends="friends" @delete="deleteFriend"></allfriend>
    <Online :friends="friends" />
  </div>
</template>
<script>
import navbar from './components/Navbar'
import allfriend from './components/AllFriends'
import Online from './components/OnlineFriends'
export default {
  name:'app',
  data(){
    return {
      friends:[
                {name:'A',online:true},
                {name:'B',online:true},
                {name:'C',online:false},
                {name:'D',online:true},
                {name:'E',online:false},
                {name:'F',online:false},
            ]
    }
  },
  components:{
    navbar,
    allfriend,
    Online
  },
  methods:{
    deleteFriend(payload){
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }

}
</script>
<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
