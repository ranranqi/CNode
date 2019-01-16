<template>
    <div>
        <div>
            <img src="" alt="">
        </div>
        <div class="postlist">
            <ul>
                <li v-for="post in posts">
                    <img :src="post.author.avatar_url" alt="">
                    <span>
                        {{post.reply_count}}
                    </span>/{{post.visit_count}}
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
.postlist img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
</style>

