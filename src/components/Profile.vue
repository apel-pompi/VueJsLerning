<template>
    <div class="profile">
        <h2>Profile Page ID: {{ userId }}</h2>
    </div>
</template>
<script>
export default{
    name:'Profile',
    data() {
        return {
            userId: this.$route.params.user_id
        };
    },
    methods:{
        updateId(){
            this.userId = this.$route.params.user_id
        }
    },
    watch:{
        $route: 'updateId'
    }
}
</script>