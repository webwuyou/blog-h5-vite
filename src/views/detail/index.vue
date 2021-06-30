<template>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="goTo" />
    <div class="article" v-if="detailData">
        <h2 class="article-title">{{ detailData.title }}</h2>
        <div class="article-cotent" v-html="detailData.content"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();
const route = useRoute();
onMounted(() => {
    getDetail();
});
let detailData = ref(null);
const getDetail = async id => {
    let res = await axios(`http://localhost:8888/api/default/news/detail/${route.query.id}`);
    console.log(res);
    let data = res.data.data;
    detailData.value = data;
};
console.log(detailData);
const goTo = () => {
    router.push('/');
};
</script>

<style lang="less" scoped>
.article {
    padding: 20px;
    &-title {
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 30px;
    }
    &-content {
        font-size: 14px;
        line-height: 1.5;
        color: #666;
        :deep(p) {
            font-size: 14px;
            line-height: 3;
            color: #666;
        }
    }
}
</style>