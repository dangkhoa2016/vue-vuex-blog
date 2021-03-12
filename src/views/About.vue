<template>
    <div>
        <div class="hero-wrap hero-wrap-2 js-fullheight" :style="$func.ext_BgImage('/images/bg_4.jpg')"
            data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="js-fullheight d-flex justify-content-center align-items-center ftco-animate">
                <div class="col-md-8 text text-center">
                    <div class="img mb-4" :style="$func.ext_BgImage('/images/author.jpg')"></div>
                    <div class="desc">
                        <h2 class="">Hello I'm</h2>
                        <h1 class="mb-4">Dang Khoa</h1>
                        <p class="mb-4">I am A Blogger Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <ul class="ftco-social mt-3">
                            <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <section class="ftco-section-2">
            <div class="photograhy">
                <div class="row no-gutters">
                    <div class="col-md-3" v-for="(item, index) in photos" :key="index">
                        <a :href="item.image" class="photography-entry image-popup img d-flex justify-content-center align-items-center"
                            :style="$func.ext_BgImage(item.image)">
                            <div class="overlay"></div>
                            <div class="text text-center">
                                <h3>{{item.name}}</h3>
                                <span>{{item.category}}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { fullHeight, contentWayPoint, magnificPopup } from '../helpers/ui';

export default {
  name: 'About',
  data () {
      return {
          photos: [
              {image: 'images/image_1.jpg', category: 'Travel', name: 'Picture 1'},
              {image: 'images/image_2.jpg', category: 'Nature', name: 'Picture 2'},
              {image: 'images/image_3.jpg', category: 'Fashion', name: 'Picture 3'},
              {image: 'images/image_4.jpg', category: 'Photography', name: 'Picture 4'},
              {image: 'images/image_5.jpg', category: 'Fashion, Model', name: 'Picture 5'},
              {image: 'images/image_6.jpg', category: 'Photography', name: 'Picture 6'},
              {image: 'images/image_7.jpg', category: 'Fashion', name: 'Picture 7'},
              {image: 'images/image_8.jpg', category: 'Nature', name: 'Picture 8'},
              {image: 'images/image_9.jpg', category: 'Model', name: 'Picture 9'},
              {image: 'images/image_10.jpg', category: 'Travel', name: 'Picture 10'},
              {image: 'images/image_11.jpg', category: 'Nature', name: 'Picture 11'},
              {image: 'images/image_12.jpg', category: 'Technology', name: 'Picture 12'},
          ]
      }
  },
  methods: {
  },
  mounted() {
    fullHeight();
    contentWayPoint();
    this.$nextTick(() => {
        magnificPopup();
    });
  }
};
</script>
