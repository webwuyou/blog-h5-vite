<template>
    <van-nav-bar :title="detailData && detailData.title" left-text="返回" fixed left-arrow @click-left="goTo" />
    <div class="article" v-if="detailData">
        <h2 class="article-title">{{ detailData.title }}</h2>
        <div class="article-content" v-html="detailData.content"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, getCurrentInstance, onActivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const instance = getCurrentInstance();
const { $axios } = instance.proxy;
const router = useRouter();
const route = useRoute();
onActivated(() => {
    getDetail();
});
let detailData = ref(null);
const getDetail = async id => {
    let res = await $axios(`/news/detail/${route.query.id}`);
    console.log(res);
    let data = res.data.data;
    detailData.value = data;
};
console.log(detailData);
const goTo = () => {
    router.back();
};
</script>

<style lang="less" scoped>
.article {
    padding: 20px;
    background: #fff;
    overflow: hidden;
    &-title {
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 30px;
    }
    &-content {
        font-size: 14px;
        line-height: 28px;
        color: #333;
        &:deep(p),
        &:deep(div) {
            font-size: 14px;
            line-height: 28px;
            color: #333;
        }
        &:deep(img) {
            max-width: 100%;
        }
    }
}
</style>