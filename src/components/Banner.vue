<template>
    <div class="container">
        <img src="@/assets/Star_Wars_Logo.svg.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'banner-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    //watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        margin: 0 auto;
        height: 80vh;
    }
    img{
        width: 100%;
    }
</style>