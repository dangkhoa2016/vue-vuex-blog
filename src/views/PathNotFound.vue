<template>
    <div class="py-5">
        <div class="container">
            <h2 class="title">404</h2>
            <p>{{content}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PathNotFound',
  data () {
      return {
          content: 'The path you acess does not exists.'
      }
  },
  methods: {
  },
  mounted() {
  },
};
</script>
