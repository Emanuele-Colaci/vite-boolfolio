<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import AppLoading from '../components/AppLoading.vue';
    import ProjectCard from './ProjectCard.vue';

    export default {
        components:{
            AppLoading,
            ProjectCard,
        },
        data(){
            return{
                name: "ProjectList",
                store,
                projects: [],
                currentPage: 1,
                lastPage: null
            }
        },
        created(){
            this.getProjects(1);
        },
        methods:{
            getProjects(num_page){
                this.store.loading = true;
                // axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                //     if(response.data.success){
                //         this.projects = response.data.results;
                //         this.loading = false;
                //     }
                // });
                axios.get(`${this.store.baseUrl}/api/projects`, {params: { page: num_page }}).then((response) => {
                    if(response.data.success){
                        this.projects = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
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
                    <h1 class="text-center my-5">BOOLFOLIO</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4" v-for="project in projects" :key="project.id">
                    <ProjectCard :project="project"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <nav>
                            <ul class="pagination">
                                <li :class="currentPage === 1 ? 'disabled' : ''">
                                    <button class="page-link" @click="getProjects(currentPage - 1)">Precedente</button>
                                </li>
                                <li :class="currentPage === lastPage ? 'disabled' : ''">
                                    <button class="page-link" @click="getProjects(currentPage + 1)">Successivo</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="text-center mt-3">
                        Pagina {{ currentPage }} di {{ lastPage }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
   

</style>