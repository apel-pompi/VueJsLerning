<template>
    <div class="navbar">
        <nav>
            <ul>
                <li><router-link :to="{name:'home'}">Home</router-link></li>
                <li><router-link :to="{name:'about'}">About</router-link></li>
                <li><router-link :to="{name:'contact'}">Contact</router-link></li>
            </ul>
        </nav>
        <div>
            <ul>
                <li v-for="(id,index) in userIds" :key="index">
                    <router-link :to="{name:'profile',params:{user_id:id}}">Profile {{ id }}</router-link>
                </li>
            </ul>
        </div>
        <button @click="Forward">Forward</button>
        <button @click="Home">Home</button>
        <button @click="About">About</button>
        <button @click="Contact">Contact</button>
        <button @click="Back">Back</button>
                
    </div>
</template>
<script>
export default {
    name:'Navbar',
    data() {
        return {
            userIds: [1,2,3,4,5,6]
        };
    },
    methods:{
        Forward(){
            this.$router.go(1)
        },
        Home(){
            this.$router.push({name:'home'})
        },
        About(){
            this.$router.push({name:'about'})
        },
        Contact(){
            this.$router.push({name:'contact'})
        },
        Back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
nav ul{margin: 0;padding: 0;}
nav ul li{display: inline-block;list-style: none;margin: 5px; padding: 10px;background-color: #C1C1C1;}
nav ul li a{text-decoration: none;}
</style>