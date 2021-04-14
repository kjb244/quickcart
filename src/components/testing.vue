<template>
    <section>
        <div class="row">
            <div class="col col-sm-12 col-md-6">
                <h3 class="text-center">For Chrome</h3>
                <form autocomplete="off">
                    <b-form-checkbox @change="cbChange()" id="checkbox-1" v-model="cbox" name="checkbox-1">
                        Show/hide
                    </b-form-checkbox>
                    <div v-show="cbox">
                        <label class="mt-2" :for="addressLine1.id">{{addressLine1.label}}</label>
                        <b-form-input autocomplete="new-password" :name="addressLine1.id"  :id="addressLine1.id" v-model="addressLine1.model" ></b-form-input>

                        <label class="mt-5" :for="addressLine2.id">{{addressLine2.label}} </label>
                        <b-form-input autocomplete="new-password" :name="addressLine2.id" :id="addressLine2.id" v-model="addressLine2.model"></b-form-input>

                        <label class="mt-5" :for="city.id">{{city.label}}</label>
                        <b-form-input autocomplete="new-password" :name="city.id" :id="city.id" v-model="city.model"></b-form-input>

                        <label class="mt-5" :for="state.id">{{state.label}}</label>
                        <b-form-input autocomplete="new-password" :name="state.id"  :id="state.id" v-model="state.model"></b-form-input>

                        <label class="mt-5" :for="zip.id">{{zip.label}}</label>
                        <b-form-input autocomplete="new-password" :name="zip.id" :id="zip.id" v-model="zip.model"></b-form-input>
                    </div>


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
                addressLine1: {
                    model: '',
                    id: 'addressLine1',
                    label: 'address Line 1'
                },
                addressLine2: {
                    model: '',
                    id: 'addressLine2',
                    label: 'address Line 2'
                },
                city: {
                    model: '',
                    id: 'city',
                    label: 'city'
                },
                state: {
                    model: '',
                    id: 'state',
                    label: 'state'
                },
                zip: {
                    model: '',
                    id: 'zip',
                    label: 'zip'
                },
                cbox: false

            }
        },
        watch: {

        },
        methods: {

            cbChange: function(){
                //this.addressLine1.id = this.addressLine1.id.split('').reverse().join('');
                //this.addressLine2.id = this.addressLine2.id.split('').reverse().join('');
                //this.city.id = this.city.id.split('').reverse().join('');
                //this.state.id = this.state.id.split('').reverse().join('');
                //this.zip.id = this.zip.id.split('').reverse().join('');
            }


        },
        computed: {


        },
        created: function(){

        }
    }
</script>

<style scoped>



</style>