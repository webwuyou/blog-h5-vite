<template>
    <div class="article">
        <div class="article-img" v-if="data.thumbnail">
            <img
                :src="data.thumbnail ? (data.thumbnail.startsWith('http') ? data.thumbnail : baseImgUrl + data.thumbnail) : 'https://cn.vitejs.dev/logo.svg'"
                alt=""
            />
        </div>
        <div class="article-info">
            <div class="article-title">{{ data.title }}</div>
            <div class="article-desc">{{ data.description.substring(0, 30) }}</div>
        </div>
    </div>
</template>
<script>
import { getCurrentInstance } from '@vue/runtime-core';
export default {
    props: {
        data: Object,
    },
    setup(props, context) {
        console.log(props, context);
        const instance = getCurrentInstance();
        console.log(instance.proxy.$config);
        return {
            baseImgUrl: instance.proxy.$config.baseImgUrl,
        };
    },
};
</script>

<style lang="less" scoped>
.article {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
    margin: 10px;
    &-img {
        width: 100px;
        height: 100px;
        margin-right: 20px;
        border: 1px solid #f1f1f1;
        padding: 4px;
        box-sizing: border-box;
        border-radius: 4px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &-info {
        flex: 1;
    }
    &-title {
        font-size: 16px;
        color: #333;
        margin-bottom: 10px;
        line-height: 22px;
    }
    &-desc {
        font-size: 12px;
        line-height: 22px;
    }
}
</style>