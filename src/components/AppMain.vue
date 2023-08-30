<script>
    import axios from 'axios';
    import AppLoading from './AppLoading.vue';
    export default {
        components:{
            AppLoading
        },
        data(){
            return{
                baseUrl: 'http://127.0.0.1:8000',
                projects: [],
                loading: true,
                maxCaracters: 80,
                currentPage: 1,
                lastPage: null
            }
        },
        created(){
            this.getProjects(1);
        },
        methods:{
            getProjects(num_page){
                this.loading = true;
                // axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                //     if(response.data.success){
                //         this.projects = response.data.results;
                //         this.loading = false;
                //     }
                // });
                axios.get(`${this.baseUrl}/api/projects`, {params: { page: num_page }}).then((response) => {
                    if(response.data.success){
                        this.projects = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
                        this.loading = false;
                    }
                });
            },
            turncateText(text){
                if(text.length > this.maxCaracters){
                    return text.substr(0, this.maxCaracters) + '...';
                }
                    return text
                
            }
        }
    }
</script>
<template>
    <div>
        <AppLoading v-if="loading"/>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center my-5">BOOLFOLIO</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4" v-for="project in projects" :key="project.id">
                    <div class="card min-height-500px my-3">
                        <div class="card-image-container">
                            <img :src="`${this.baseUrl}/storage/${project.image}`" class="card-img-top my-img" v-if="project.image">
                            <img src="https://picsum.photos/200/300" class="card-img-top my-img" v-else>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ project.titolo }}</h5>
                            <p class="card-text">{{ turncateText(project.descrizione) }}</p>
                            <p class="card-text"><small class="text-muted">{{ project.data }}</small></p>
                            
                            <!-- Visualizza il tipo -->
                            <p class="card-text"><strong>Type:</strong> {{ project.type ? project.type.name : 'N/A' }}</p>
                            
                            <!-- Visualizza le tecnologie -->
                            <p class="card-text">
                                <strong>Tecnologie: </strong>
                                <span v-for="(technology, index) in project.technologies" :key="index">
                                    {{ technology.name }}{{ index < project.technologies.length - 1 ? ', ' : '' }}
                                </span>
                                <span v-if="project.technologies.length === 0">N/A</span>
                            </p>
                        </div>
                    </div>
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
    @use '../styles/generals.scss' as *;


.min-height-500px{
    min-height: 500px;
}

.card-image-container{
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    
    .my-img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>