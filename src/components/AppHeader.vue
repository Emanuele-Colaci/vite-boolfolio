<script>
    export default {
        data() {
            return {
                name: "AppHeader",
                menuItems: [
                    {
                        nameUrl: 'Home',
                        routeName: 'home'
                    },
                    {
                        nameUrl: 'Proggetti',
                        routeName: 'project'
                    },
                    {
                        nameUrl: 'Tipologia',
                        routeName: 'type'
                    },
                   
                ]
            }
        },
    }
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg ">
                        <div class="container-fluid">
                            <img class="my-img" src="https://yt3.googleusercontent.com/UXFC9eFKxjbOcUeEiIFqpywdInXJijIrh5bkfUMPlKhCLKaO6rrTfh5O5IzNTS_2Wap2yBk1J44=s900-c-k-c0x00ffffff-no-rj" alt="img-boolean">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                                        <router-link class="nav-link" :to="{ name: item.routeName }">{{ item.nameUrl }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @use '../styles/generals.scss' as *;

    .my-img{
        width: 50px;
    }
</style>