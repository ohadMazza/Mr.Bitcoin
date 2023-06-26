<template>
  <article class="contact-preview">
    <img :src="contact.img" alt="Contact Image">
    <div class="contact-preview-details">
      <h2>{{ contact.name }}</h2>
      <h3>{{ contact.email }}</h3>
      <h3>{{ contact.phone }}</h3>
    </div>
  </article>

</template>

<script>
export default {
    props:{
        contact:{type: Object, required: true },
    }

}
</script>

<style>

</style>