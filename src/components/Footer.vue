<template>
    <footer>
      <div>
        <a href="https://www.facebook.com/chihiro.kudo.963" class="fab fa-facebook-f"></a>
        <a href="https://twitter.com/kudo_chihiro" class="fab fa-twitter"></a>
        <a href="https://github.com/GrayFox1031" class="fab fa-github"></a>
        <a href="#" class="fab fa-instagram"></a>
      </div>

      <ul>
        <router-link to="/">
          <li><a href="#">Home</a></li>
        </router-link>
        <router-link to="about">
          <li><a href="#">About</a></li>
        </router-link>
        <router-link to="services">
          <li><a href="#">Services</a></li>
        </router-link>
        <router-link to="contact">
          <li><a href="#">Contact</a></li>
        </router-link>
        <router-link to="feedback">
          <li><a href="#">Feedback</a></li>
        </router-link>
        <!-- <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li> -->
      </ul>
    </footer>

    <div class="outer-footer">
      Copyright &copy; 2021 Chihiro Kudo. All Rights Reserved.
    </div>
</template>