<template>
    <div class="email-line">
        <div class="email-line__option">
            <base-check-box></base-check-box>
            <div class="email-line__option_icon">
                <base-starred></base-starred>
            </div>
            <div class="email-line__option_icon">
                <base-bookmark></base-bookmark>
            </div>
        </div>
        <div class="email-line__text">
            <p>
                {{ name }}
            </p>
        </div>
        <div class="email-line__description">
            <p>
               {{ description }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props : ["name" , "description"],
}
</script>
<style lang="scss" scoped>
    @import "../../assets/sass/layout/emailLine.scss";
</style>