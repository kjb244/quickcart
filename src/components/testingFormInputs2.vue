<template>
    <section>
        <div class="row">
            <div class="col col-sm-12 col-md-6">
                <h3 class="text-center">Heading</h3>
                <form>

                    <div class="mb-5" v-bind:key="rec.name + rec.id + rec.label" v-for="rec in inputs">
                        <label class="mt-2" :for="rec.id">{{rec.label}}</label>
                        <b-form-input  :name="rec.name"  :id="rec.id" v-model="rec.model" ></b-form-input>
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
        name: 'testingFormInputs2',
        props: [],
        data(){
            return{
                inputs: [
                    {
                        model: '',
                        id: 'addressLine1',
                        name: 'addressLine1',
                        label: 'Address Line 1'
                    },
                    {
                        model: '',
                        id: 'notAField',
                        name: 'addressLine1',
                        label: 'Address Line 1'
                    },
                    {
                        model: '',
                        id: 'notAField2',
                        name: 'notAField2',
                        label: 'Address Line 1'
                    },
                    {
                        model: '',
                        id: 'notAField3',
                        name: 'addressLineOne',
                        label: 'A Line'
                    },
                    {
                        model: '',
                        id: 'notAField4',
                        name: 'notAField4',
                        label: 'Not a Field'
                    }
                ]




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