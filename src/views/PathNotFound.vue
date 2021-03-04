<template>
    <div class="container">
        <div class="row">
            <div class="col-md">
                <div class="">
                    <h2 class="ftco-heading-2">404</h2>
                    <p>{{content}}</p>
                </div>
            </div>
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
