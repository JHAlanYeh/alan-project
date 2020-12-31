<template>
    <Menubar :model="items">
        <template #start>
            <img alt="logo" src="https://primefaces.org/primevue/showcase/img/logo.d32bce0e.svg" height="40" class="mr-2">
        </template>
        <template #end>
         <!--   <Button label="Logout" icon="pi pi-power-off" :style="{'margin-left': '0 .5em'}"/> -->
        </template>
    </Menubar>
    <div class="container-fluid">
      <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                   label: 'Home',
                   to: '/'
                },
                {
                   label: '首頁',
                   to: '/about'
                },
             ]
        }
    }
}
</script>