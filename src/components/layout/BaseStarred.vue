<template>
    <font-awesome-icon :class="{'active' : addStar}" @click="addStar = !addStar" icon="star"></font-awesome-icon>
</template>
<script>
export default {
    data  : ()=> ({
        addStar : false
    })
}
</script>
<style lang="scss" scoped>
    @import "../../assets/sass/variable/_var.scss";
    svg{
        font-size: $font-size-ultra-small;
        color: $color-secondary;
        transition: all .2s linear;
    }
    svg.active{
        color: gold;
    }
</style>