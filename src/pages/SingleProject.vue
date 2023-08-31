<script>
    import axios from 'axios';
    import { store } from '../store.js';
    import AppLoading from '../components/AppLoading.vue';
    import ProjectCard from './ProjectCard.vue';

export default {
    components:{
        AppLoading,
        ProjectCard
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
                if(response.data.status){
                    this.project = response.data.project;
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
                    <h1>BOOLFOLIO - Determinato Proggetto {{ project.titolo }}</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-3">
                        <div class="card-image-container">
                            <img :src="`${this.store.baseUrl}/storage/${project.image}`" class="card-img-top my-img" v-if="project.image">
                            <img src="https://picsum.photos/200/300" class="card-img-top my-img" v-else>
                        </div>
                    </div>
                    <div>
                        <h6 class="mt-3">Tipologia:</h6>
                        <div>
                            <span class="text-success" v-if="project.type"><strong>{{project.type.name}}</strong></span>
                            <span v-else><em>Tipologia non assegnata</em> </span>
                        </div>
                    </div>
                    <div>
                        <h6 class="mt-3" >Tecnologie:</h6>
                        <div>
                            <span v-if="project.technologies.length > 0 "><a class="badge text-primary" href="#" v-for="technology in project.technologies" :key="technology.id">{{technology.name}}</a></span> 
                            <span v-else><em>Tecnologie non assegnate</em></span>
                        </div>
                            <h6 class="mt-3">Descrizione:</h6>
                            {{project.descrizione}}
                        </div>
                    </div>
                </div>
            </div>  
        </div>
</template>
<style lang="scss">
    @use '../styles/generals.scss' as *;

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