<template>
    <div class="navbar">
        <nav>
            <ul>
                <li><router-link :to="{name:'home'}">Home</router-link></li>
                <li><router-link :to="{name:'about'}">About</router-link></li>
                <li><router-link :to="{name:'contact'}">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    data() {
        return {
            
        };
    },
}
</script>

<style>
nav ul{margin: 0;padding: 0;}
nav ul li{display: inline-block;list-style: none;margin: 5px; padding: 10px;background-color: #C1C1C1;}
nav ul li a{text-decoration: none;}
</style>