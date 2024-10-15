<template>
    <div class="hook">
        <h2>Post Page</h2>
        <input type="text" v-model="searchItem" placeholder="search item">
        <hr>
        <div v-for="post in searchfilter" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body | snippet }}</p><hr>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'Hook',
    data(){
        return{
            posts:[],
            searchItem:''
        }
    },
    computed:{
        searchfilter(){
            return this.posts.filter(post=>{
                return post.title.match(this.searchItem)
            })
        }
    },
    methods:{

    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.posts = response.data
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
}
</script>
