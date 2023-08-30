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
                        nameUrl: 'Project',
                        routeName: 'project'
                    },
                   
                ]
            }
        },
    }
</script>
<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
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
</template>
<style lang="scss">
    @use '../styles/generals.scss' as *;
</style>