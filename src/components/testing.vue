<template>
    <section>
        <div class="row">
            <div class="col col-sm-12 col-md-6">
                <h3 class="text-center">Heading</h3>
                <form>

                    <div class="mb-5" v-bind:key="rec.name + rec.id + rec.label" v-for="rec in inputs">
                        <label class="mt-2" :for="rec.id">{{rec.label}}</label>
                        <b-form-input :autocomplete="rec.autocomplete"
                                      :class="rec.class || rec.name"
                                      :name="rec.name"
                                      :id="rec.id"
                                      v-model="rec.model" >

                        </b-form-input>
                        {{rec}}
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
                inputs: [
                    {
                        model: '',
                        id: 'streetNumberMailing',
                        name: 'streetNumberMailing',
                        class: 'street-number-mailing-field',
                        label: 'Number of Street (optional)',
                        autocomplete: ''
                    },
                    {
                        model: '',
                        id: 'streetAddress',
                        name: 'streetAddress',
                        label: 'Street Address',
                        autocomplete: 'street-address'

                    },
                    {
                        model: '',
                        id: 'addressLine1',
                        name: 'addressLine1',
                        label: 'Address Line 1',
                        autocomplete: 'address-line1'
                    },
                    {
                        model: '',
                        id: 'addressLine2',
                        name: 'addressLine2',
                        label: 'Address Line 2',
                        autocomplete: 'address-line2'
                    },
                    {
                        model: '',
                        id: 'addressLine3',
                        name: 'addressLine3',
                        label: 'Address Line 3',
                        autocomplete: 'address-line3'
                    },
                    {
                        model: '',
                        id: 'addressLevel1',
                        name: 'addressLevel1',
                        label: 'Address Level 1',
                        autocomplete: 'address-level1'
                    },
                    {
                        model: '',
                        id: 'addressLevel2',
                        name: 'addressLevel2',
                        label: 'Address Level 2',
                        autocomplete: 'address-level2'
                    },
                ]




            }
        },
        watch: {

        },
        methods: {



        },
        computed: {


        },
        mounted: function(){
            const firstInput = this.inputs[0];
            firstInput.class = firstInput.class.split('').reverse().join('');
            firstInput.name = firstInput.name.split('').reverse().join('');
            firstInput.id = firstInput.id.split('').reverse().join('');


        }
    }
</script>

<style scoped>



</style>