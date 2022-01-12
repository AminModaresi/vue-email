<template>
    <main class="d-flex">
        <TheSidebar/>
        <BoxEmail/>
    </main>
</template>
<script>
import TheSidebar from "../components/layout/TheSidebar.vue"
import BoxEmail from "../components/box-email/BoxEmail.vue"
export default {
    components : {
        TheSidebar,
        BoxEmail
    }
};
</script>