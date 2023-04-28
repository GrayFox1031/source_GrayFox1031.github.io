<template>
    <nav>
      <label class="logo"><span>G</span>ray<span>F</span>ox</label>
      <ul>
          <router-link to="/">
            <li><a href="#" class="active">Home</a></li>
          </router-link>
          <router-link to="about">
            <li><a href="#">About</a></li>
          </router-link>
          <router-link to="services">
            <li><a href="#">Services</a></li>
          </router-link>
          <router-link to="hobbies">
            <li><a href="#">Hobbies</a></li>
          </router-link>
          <router-link to="articles">
            <li><a href="#">Articles</a></li>
          </router-link>
          <router-link to="contact">
            <li><a href="#">Contact</a></li>
          </router-link>
          <router-link to="feedback">
            <li><a href="#">Feedback</a></li>
          </router-link>
          <!-- <li><a href="#" class="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Hobbies</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li> -->
      </ul>
      <label id="icon">
        <i class="fas fa-bars"></i>
      </label>
    </nav>
</template>
