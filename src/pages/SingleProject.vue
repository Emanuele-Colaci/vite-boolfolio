<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import AppLoading from '../components/AppLoading.vue';

export default {
    components:{
        AppLoading,
    },
    data() {
        return {
            name: 'SingleProject',
            store,
            project: null,
        }
    },
    created(){
        this.getSingleProjects();
    },
    methods:{
        getSingleProjects(){
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/project/${this.$route.params.title}`).then((response) => {
                if(response.data.success){
                    this.project = response.data.results.data;
                    this.store.loading = false;
                }else{
                    this.$router.push({ name: 'not-found' })
                }
            });
        },
    }
}
</script>
<template>
    <AppLoading v-if="this.store.loading"/>
    <div v-else>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>BOOLFOLIO - Determinato Proggetto</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4" v-for="item in project" :key="item.id">
                    <ProjectCard :item="project"/>
                </div>
            </div>  
        </div>
    </div>
</template>
<style lang="scss">
    @use '../styles/generals.scss' as *;

</style>