<script>
import { store } from '../store.js';
export default {
    props: {
        project: Object,
    },
    data(){
        return{
            name: "ProjectCard",
            store,
            maxCaracters: 80
        }
    },
    methods: {
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
    
    <div class="card min-height-500px my-3">
        <div class="card-image-container">
            <img :src="`${this.store.baseUrl}/storage/${project.image}`" class="card-img-top my-img" v-if="project.image">
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

            <div class="card-footer">
                <router-link class="btn btn-outline-primary w-100" :to="{ name: 'determinato_proggetto', params: { title: project.titolo } }">Vedi il proggetto</router-link>
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