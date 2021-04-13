<template>
    <section>
        <div class="row">
            <div class="col col-sm-12 col-md-6">
                <h3 class="text-center">testing</h3>
                <form>

                    <b-form-input autocomplete="new-password"  class="mt-2" id="addressLine1" v-model="addressLine1" placeholder="Address Line 1"></b-form-input>
                    <b-form-input autocomplete="new-password" class="mt-5" id="addressLine2" v-model="addressLine2" placeholder="Address Line 2"></b-form-input>
                    <b-form-input autocomplete="new-password" class="mt-5" id="city" v-model="city" placeholder="City"></b-form-input>
                    <b-form-input autocomplete="new-password" class="mt-5" id="state" v-model="state" placeholder="State"></b-form-input>
                    <b-form-input autocomplete="new-password" class="mt-5" id="zip" v-model="zip" placeholder="Zip"></b-form-input>



                </form>

            </div>
        </div>

    </section>

</template>

<script>
    import Vue from 'vue';
    import { FormInputPlugin } from 'bootstrap-vue'

    Vue.use(FormInputPlugin);

    export default {
        name: 'testing',
        props: [],
        data(){
            return{
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zip: '',

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