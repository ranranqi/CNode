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
                    </span>/<span>
                        {{post.visit_count}}
                    </span>
                    <span>
                        {{post.title}}
                    </span>
                    <span class="time">
                        {{post.last_reply_at}}
                    </span>
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
                params:{
                    page: 1,
                    limit: 20
                }
            })
            .then((response)=>{
                this.posts = response.data.data
            })
            .catch((error)=>{
                console.log(error)
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
ul{
    list-style: none;
    background: #fff;
    background-color: #f6f6f6;
}
.postlist ul li{
    padding: 10px;
    background: #fff;
    border-bottom: 1px solid #f6f6f6;
    border-radius: 3px 3px 0 0;
    width: 88%;
    margin: 0 auto;
}
.postlist ul li .time{
    text-align: right;
}
</style>

