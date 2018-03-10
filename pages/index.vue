<template>
  <div class="page-index">
    <site-hero/>
    <section class="section is-medium">
      <div class="container">
        <h3 class="title is-2">
          <span class="icon is-medium title-icon">
            <svg class="svg-inline--fa fa-th-large fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="th-large" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"></path></svg><!-- <i class="fas fa-th-large"></i> -->
          </span>
          <p>Live <strong>demos</strong></p>
        </h3>
        <h4 class="subtitle is-4">Live demos in the book</h4>
        <div class="tile is-ancestor">
          
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.title-icon {
  font-size: 56px;
  left: -80px;
  opacity: 0.1;
  position: absolute;
  top: 10px;
}
</style>


<script>
import SiteHero from '@/components/hero.vue';
export default {
  layout: 'simple',
  components: {
    SiteHero
  }
}
</script>
