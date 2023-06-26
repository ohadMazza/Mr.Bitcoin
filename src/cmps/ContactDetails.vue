<template>
    <main  class="contact-details-page">
        <article v-if= "contact" class=" contact-details">
            <img :src="contact.img" alt="Contact Image">
            <h2>{{ contact.name }}</h2>
            <h3>{{ contact.email }}</h3>
            <h3>{{ contact.phone }}</h3>
        </article>
    </main>

</template>

<script>
import { contactService } from '../services/contact.service';

export default { 
    data(){
        return{
            contact:null,
        }
    },
    async created(){
        const contactId = this.$route.params.id
        this.contact= await contactService.getContactById(contactId) 

    }
}
</script>

<style>

</style>