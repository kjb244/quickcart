<template>
    <section>
       <div class="row mt-5">
           <div class="col col-sm-12 col-md-6">
               <store-item></store-item>
           </div>
           <div class="col col-sm-12 col-md-6">
               <cart></cart>
           </div>
       </div>
    </section>

</template>

<script>


    import StoreItem from './usingstoreitem.vue';
    import Cart from './usingstorecart.vue';

    export default {
        name: 'usingstore',
        components:{
            StoreItem,
            Cart,
        },
        props: [],
        data(){
            return{

            }
        },
        watch: {

        },
        methods: {


        },
        computed: {

        },
        created: function(){

        }
    }
</script>

<style scoped>


</style>