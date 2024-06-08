<script setup lang="ts">
import { ref } from 'vue';

const showBurgerMenu = ref(false);
</script>

<template>
  <main>
    <nav class="navbar">
      <div class="nav-list" @click="showBurgerMenu = !showBurgerMenu">
        <div class="nav-section">
          <img id="burger-menu" class="nav-icon" src="./icons/combs.png" alt="burger-menu" />
        </div>
        <div class="nav-section">
          <div class="app-header">Buchsta-</div>
          <img class="nav-icon" src="./icons/bear2.png" alt="burger-menu" />
        </div>
        <div class="nav-section">
          <img class="nav-icon" src="./icons/logout2.png" alt="burger-menu" />
        </div>
      </div>
    </nav>
    <div class="nav-burger" :style="{ display: showBurgerMenu ? 'flex' : 'none' }">
      <div class="burger-section">
        <a class="hideable" href="#">
          <!--        <img class="nav-icon" src="images/icons/stats2.png" alt="" title="Statistik"/>-->
          <span class="nav-item"> Statistik </span>
        </a>
      </div>
      <div class="burger-section">
        <a href="#" class="nav-item">
          <!--          <img class="nav-icon" src="./icons/combs.png" alt="score" title="Highscore" />-->
          <span class="nav-item"> Highscore </span>
        </a>
      </div>
      <div class="burger-section">
        <a href="#" class="nav-item">
          <!--        <img class="nav-icon" src="images/icons/refresh3.png" alt="refresh" title="Neues Wort"/>-->
          <span class="nav-item"> Neues Wort (F5) </span>
        </a>
      </div>
      <div class="burger-section settings">
        <!--      <img class="nav-icon" src="images/icons/settings.png" title="Einstellungen" alt="Einstellungen"/>-->
        <span class="nav-item"> Einstellungen </span>
      </div>
      <div class="burger-section manual">
        <!--      <img class="nav-icon" src="images/icons/help3.png" alt="help" title="Info"/>-->
        <span class="nav-item"> Info </span>
      </div>
      <div class="burger-section">
        <!--      <img class="nav-icon logout" src="images/icons/logout2.png" alt="logout" title="Logout"/>-->
      </div>
    </div>
  </main>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: auto;
  background: var(--nav-background-color);
  border-bottom: 2px solid var(--nav-border-color);
  margin-bottom: 1.5rem;
}

a {
  text-decoration: none;
  color: var(--primary-font);
}

.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 1rem;
}

.nav-burger {
  position: absolute;
  top: 4rem;
  left: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
}

.nav-section,
.burger-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
}

.app-header {
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
}
.nav-item {
  cursor: pointer;
  margin-right: 2rem;
  font-size: 1.5rem;
}

.nav-item:hover {
  filter: brightness(150%);
}
.nav-icon {
  cursor: pointer;
  vertical-align: middle;
  width: 3.5rem;
  margin-right: 0.5rem;
}

.nav-icon:hover {
  filter: brightness(150%);
  animation: turnaround 1s;
}
</style>
