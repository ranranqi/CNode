<template>
    <div>
        <div>
            <img src="" alt="">
        </div>
        <div>
            <ul>
                <li v-for="post in posts">
                    <img :src="post.author.avatar_url" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Postlist',
    data () {
        return {
            posts: []
        }
    },
    methods: {
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',{
                page: 1,
                limit: 10
            })
            .then((response)=>{
                this.posts = response.data.data
                console.log(response.data.data)
            })
        }
    },
    beforeMount(){
        this.getData()
    }
}
</script>
<style scoped>

</style>

