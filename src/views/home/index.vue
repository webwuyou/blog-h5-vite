<template>
    <van-nav-bar title="首页" />
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
        <van-list v-model:loading="state.loading" :finished="state.finished" finished-text="没有更多了" @load="onLoad">
            <articleItem v-for="(item, index) of state.list" :key="index" :data="item" @click="goTo(item.id)"></articleItem>
        </van-list>
    </van-pull-refresh>
</template>



<script setup>
import articleItem from './components/article-item.vue';
import { onMounted, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { Toast } from 'vant';
const router = useRouter();

const state = reactive({
    pageIndex: 0,
    pageSize: 10,
    list: [],
    totalCount: 0,
    refreshing: false,
    loading: false,
    finished: false,
});

const onLoad = async () => {
    setTimeout(async () => {
        state.pageIndex++;
        let params = {
            pageIndex: state.pageIndex,
            pageSize: state.pageSize,
        };
        let res = await axios.get('http://localhost:8888/api/default/news/list?type=1', { params: params });
        let data = res.data.data;
        if (state.refreshing) {
            state.list = [];
            state.refreshing = false;
        }
        state.list = state.list.concat(data.list);
        state.totalCount = data.totalCount;
        //加载状态结束
        state.loading = false;

        let totalPage = Math.ceil(data.totalCount / state.pageSize);
        console.log(totalPage);
        if (state.pageIndex >= totalPage) {
            state.finished = true;
        }
    }, 1000);
};
const onRefresh = () => {
    // 清空列表数据
    state.pageIndex = 0;
    state.list = [];

    state.finished = false;

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    state.loading = true;
    onLoad();
};
const goTo = id => {
    router.push(`/detail?id=${id}`);
};
onMounted(() => {
    // getList();
});
</script>

<style lang="less" scoped>
</style>