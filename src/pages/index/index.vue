<template>
    <view class="content">
        <image class="logo" src="/static/logo.svg"></image>
        <uni-card>
            <text class="title">{{ title }}</text>
        </uni-card>
        <u-icon name="chat" color="#2979ff" size="28"></u-icon>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: this.$t('hello'),
        }
    },
    onLoad() {},
    methods: {},
}
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: $uni-color-primary;
}
</style>
