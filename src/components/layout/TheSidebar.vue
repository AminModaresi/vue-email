<template>
    <aside class="sidebar" :class="{'show-menu' : ShowSidebar}">
        <router-link to="/new-email" class="btn btn-purple w-75 mx-auto d-block">
             ارسال ایمیل جدید   
        </router-link>
        <ul class="sidebar__list">
            <li class="sidebar__list_item">
                <router-link class="sidebar__list_link" to="/inbox">
                    <font-awesome-icon icon="inbox"></font-awesome-icon>
                    <span>
                        صندوق ورودی
                    </span>
                </router-link>
            </li>
            <li class="sidebar__list_item">
                <router-link class="sidebar__list_link" to="/d">
                    <font-awesome-icon icon="star"></font-awesome-icon>
                    <span>
                        ستاره دار
                    </span>
                </router-link>
            </li>
            <li class="sidebar__list_item">
                <router-link class="sidebar__list_link" to="/d">
                    <font-awesome-icon icon="clock"></font-awesome-icon>
                    <span>
                        به تعویق افتاد
                    </span>
                </router-link>
            </li>
            <li class="sidebar__list_item">
                <router-link class="sidebar__list_link" to="/d">
                    <font-awesome-icon icon="bookmark"></font-awesome-icon>
                    <span>
                        مهم
                    </span>
                </router-link>
            </li>
            <li class="sidebar__list_item">
                <router-link class="sidebar__list_link" to="/d">
                    <font-awesome-icon icon="paper-plane"></font-awesome-icon>
                    <span>
                        ارسال شد
                    </span>
                </router-link>
            </li>
            <li class="sidebar__list_item">
                <router-link class="sidebar__list_link" to="/d">
                    <font-awesome-icon icon="book"></font-awesome-icon>
                    <span>
                        پیش نویس
                    </span>
                </router-link>
            </li>
            <li class="sidebar__list_item">
                <router-link class="sidebar__list_link" to="/d">
                    <font-awesome-icon icon="times-circle"></font-awesome-icon>
                    <span>
                        هرزنامه ها 
                    </span>
                </router-link>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    computed : {
        ShowSidebar(){
            return this.$store.getters["ShowSidebar"]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/sass/layout/sidebar.scss";
</style>