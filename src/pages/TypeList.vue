<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import AppLoading from '../components/AppLoading.vue';

    export default {
        components:{
            AppLoading,
        },
        data(){
            return{
                name: "TypeList",
                store,
                types: [],
            }
        },
        created(){
            this.getTypes();
        },
        methods:{
            getTypes(){
                this.store.loading = true;
                axios.get(`${this.store.baseUrl}/api/types`).then((response) => {
                    if(response.data.success){
                        console.log(response)
                        this.types = response.data.results;
                        this.store.loading = false;
                    }
                });
            },
        }
    }
</script>
<template>
    <div>
        <AppLoading v-if="this.store.loading"/>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center my-5">BOOLFOLIO - Tipologia</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4" v-for="tipo in types" :key="tipo.id">
                    <div class="card my-5">
                        <h5 class="card-title text-center">{{ tipo.name }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
   

</style>