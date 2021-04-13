<template>
    <section>
        <h3 class="text-center">Cart</h3>
        <div class="container mb-5" v-bind:key="index" v-for="(item,index) in getCart">
            <p >{{item.name}}{{item.price}}</p>
            <b-button variant="primary" v-on:click="removeFromCart(item)">Remove From Cart</b-button>

        </div>

    </section>

</template>

<script>
    import Vue from 'vue';
    import { mapGetters, mapActions } from 'vuex';
    import { FormInputPlugin } from 'bootstrap-vue'

    Vue.use(FormInputPlugin);

    export default {
        name: 'usingstorecart',
        props: [],
        data(){
            return{

            }
        },
        watch: {

        },
        methods: {
            ...mapActions([
                'removeFromCart',
            ]),

        },
        computed: {
            ...mapGetters([
                'getCart',
            ]),

        },
        created: function(){

        }
    }
</script>

<style scoped>



</style>