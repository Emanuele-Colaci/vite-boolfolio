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
                maxCaracters: 80
            }
        },
        created(){
            this.getProjects();
        },
        methods:{
            getProjects(){
                this.loading = true;
                axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                    if(response.data.success){
                        this.projects = response.data.results;
                        this.loading = false;
                    }
                });
            },
            turncateText(text){
                if(text.length > this.maxCaracters){
                    return text.substr(0, this.maxCaracters) + '...';
                }
            }
        }
    }
</script>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center my-5">BOOLFOLIO</h1>
                </div>
            </div>
            <div class="row">
                <AppLoading />
                <div class="col-12 col-md-4" v-for="project in projects" :key="project.id">
                    <div class="card min-height-380px my-3">
                        <div class="card-image-container">
                            <img :src="`${this.baseUrl}/storage/${project.image}`" class="card-img-top my-img" v-if="project.image">
                            <img src="https://picsum.photos/200/300" class="card-img-top my-img" v-else>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ project.titolo }}</h5>
                            <p class="card-text">{{ turncateText(project.descrizione) }}</p>
                            <p class="card-text"><small class="text-muted">{{ project.data }}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @use '../styles/generals.scss' as *;


.min-height-380px{
    min-height: 380px;
}
.card-image-container{
    position: relative;
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 aspect ratio (adjust as needed) */
    
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