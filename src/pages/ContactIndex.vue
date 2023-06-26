<template>
    <section class="contacts">
        <ContactFilter @filter="onSetFilterBy"/>
        <ContactList @remove="removeContact"  v-if="contacts" :contacts="filteredContacts"/>
    </section>
</template>

<script>
import {contactService} from '../services/contact.service.js'
import {eventBus} from '../services/eventBus.service.js'

import ContactList from '../cmps/ContactList.vue'
import ContactFilter from '../cmps/ContactFilter.vue'

export default {
    data(){
        return{
            contacts:null,
            filterBy:{},
        }
    },

    async created(){
        // this.$store.dispatch({type: 'loadContacts'})
        this.contacts = await contactService.getContacts();
    },

    components: { ContactList,ContactFilter },

    methods: {
        async removeContact(contactId) {
         const user = await contactService.getContactById(contactId)

        const msg = {
        txt: ` ${user.name} removed...`,
        type: "success",
        timeout: 2500,
      };
      const newContactsArray = await contactService.deleteContact(contactId);
      this.contacts = [...newContactsArray];
      console.log("msg:", msg);

      eventBus.emit("user-msg", msg);
    },
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
  },

    computed: {
        filteredContacts(){
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        },
        // contacts() {
        //     return this.$store.getters.contact
        // }
    },


}
</script>

<style>
</style>