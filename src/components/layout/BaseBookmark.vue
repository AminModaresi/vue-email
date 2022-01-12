<template>
    <font-awesome-icon :class="{'active' : addBookmark}" @click="addBookmark = !addBookmark" icon="bookmark"></font-awesome-icon>
</template>
<script>
export default {
    data  : ()=> ({
        addBookmark : false
    })
}
</script>
<style lang="scss" scoped>
    @import "../../assets/sass/variable/_var.scss";
    svg{
        transition: all .2s linear;
        font-size: $font-size-ultra-small;
        color: $color-secondary;
    }
    svg.active{
        color: $color-purple;
    }
</style>