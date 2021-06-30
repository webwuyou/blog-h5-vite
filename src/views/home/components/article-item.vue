<template>
    <div class="article">
        <div class="article-img">
            <img :src="data.thumbnail ? data.thumbnail : 'https://cn.vitejs.dev/logo.svg'" alt="" />
        </div>
        <div class="article-info">
            <div class="article-title">{{ data.title }}</div>
            <div class="article-desc">{{ data.description }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: Object,
    },
    setup(props, context) {
        console.log(props, context);
    },
};
</script>

<style lang="less" scoped>
.article {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #f5f5f5;
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
        font-size: 14px;
        color: #333;
        font-weight: bold;
        margin-bottom: 10px;
    }
    &-desc {
        font-size: 12px;
        line-height: 22px;
    }
}
</style>