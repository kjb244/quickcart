<template>
    <section>
        <h3 class="text-center">Items</h3>
        <div class="container mb-5" v-bind:key="index" v-for="(item,index) in getItems">
            <p >{{item.name}}{{item.price}}</p>
            <b-button variant="primary" v-on:click="moveToCart(item)">Add to Cart</b-button>

        </div>

    </section>

</template>

<script>
    import Vue from 'vue';
    import { mapGetters, mapActions } from 'vuex';
    import { FormInputPlugin } from 'bootstrap-vue'

    Vue.use(FormInputPlugin);

    export default {
        name: 'usingstoreitem',
        props: [],
        data(){
            return{

            }
        },
        watch: {

        },
        methods: {
            ...mapActions([
                'moveToCart',
            ]),

        },
        computed: {
            ...mapGetters([
                'getItems',
            ]),

        },
        created: function(){

        }
    }
</script>

<style scoped>



</style>