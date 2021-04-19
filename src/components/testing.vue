<template>
    <section>
        <div class="row">
            <div class="col col-sm-12 col-md-6">
                <h3 class="text-center">Heading</h3>
                <form autocomplete="off">
                    <b-form-checkbox @change="cbChange()" id="checkbox-1" v-model="cbox" name="checkbox-1">
                        Show/hide
                    </b-form-checkbox>

                    <label class="mt-2" :for="firstName.id">{{firstName.label}}</label>
                    <b-form-input autocomplete="name" :name="firstName.id"  :id="firstName.id" v-model="firstName.model" ></b-form-input>

                    <label class="mt-2" :for="lastName.id">{{lastName.label}}</label>
                    <b-form-input autocomplete="given-name" :name="lastName.id"  :id="lastName.id" v-model="lastName.model" ></b-form-input>



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
                firstName: {
                    model: '',
                    id: 'firstName',
                    label: 'First Name'
                },
                lastName: {
                    model: '',
                    id: 'lastName',
                    label: 'Last Name'
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