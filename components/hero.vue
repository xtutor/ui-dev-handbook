<template>
  <section class="hero is-link">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <p class="title">
              <a title="购买该掘金小册" class="title-link" href="https://juejin.im/book/5a7bfe595188257a7349b52a" target="_blank">大厂 UI 开发实战手册</a>
            </p>
            <p class="subtitle">
              京东、腾讯等大厂 UI 开发或 H5 开发工程师的真实实战技巧
            </p>
          </div>
          <div class="column is-narrow">
            <a title="购买该掘金小册" href="https://juejin.im/book/5a7bfe595188257a7349b52a" target="_blank" class="link-book">
              <img class="book-cover" src="https://user-gold-cdn.xitu.io/2018/3/8/162054cba32cc7b8?w=650&h=910&f=png&s=313393" alt="大厂 UI 开发实战手册" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "../assets/css/var.scss";
  .is-link {
    background: $primary-color;
    .title, .subtitle {
      color: #ffffff;
    }
    .subtitle {
      padding-top: 8px;
    }
    .title-link {
      color: #ffffff;
      display: inline-block;
      transition: transform ease 0.25s;
      &:hover {
        transform: translateY(-2px);
      }
    }
  }
  .link-book {
    display: inline-block;
    height: 230px;
    transition: transform ease 0.25s;
    &:hover {
      transform: scale(1.02);
    }
  }
  .book-cover {
    max-height: 100%;
    border-radius: 10px;
  }
</style>
