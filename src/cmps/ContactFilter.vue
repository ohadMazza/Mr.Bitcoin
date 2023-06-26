<template>
    <section class="contact-filter"> 
        <input @input="onSetFilterBy" v-model="filterBy.txt" type="text" placeholder="Search.." />
    </section>
  
</template>

<script>
export default {
    data(){
        return{
            filterBy:{
                txt:""
            }
        }
    },
    methods: {
        onSetFilterBy(){
            this.$emit('filter',this.filterBy )

        }
    }
}
</script>

<style>

</style>