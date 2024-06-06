<script setup lang="ts">
import { words } from '@/assets/deutsch';
import { targetWords } from '@/assets/targetWords';
import { ref } from 'vue';

const guess = ref('');
const guessLetters = ref([]);
const requiredLetter = ref('');
const randomWord = ref('');
const targetLetters = ref<string[]>([]);
const possibleIncludes = ref(0);
const includes = ref<string[]>([]);
const score = ref(0);
const knownWords = ref<string[]>([]);
randomWord.value = targetWords[Math.floor(Math.random() * targetWords.length)].toUpperCase();
targetLetters.value = Array.from(new Set(randomWord.value.split('')));
requiredLetter.value = targetLetters.value[Math.floor(Math.random() * targetLetters.value.length)];

shuffle(targetLetters.value);

countPossibleIncludes();

function countPossibleIncludes() {
  words.forEach((word) => {
    const wordLetters = Array.from(new Set(word.toUpperCase().split('')));
    const res = wordLetters.some((letter) => !targetLetters.value.includes(letter));
    if (!res && wordLetters.some((letter) => letter === requiredLetter.value)) {
      possibleIncludes.value++;
      includes.value.push(word);
    }
  });
  console.log(includes.value);
}

function checkWord(e: any) {
  e.preventDefault();
  if (
    (includes.value.includes(guess.value) ||
      includes.value.includes(guess.value[0].toUpperCase() + guess.value.slice(1))) &&
    !knownWords.value.includes(guess.value) &&
    !knownWords.value.includes(guess.value[0].toUpperCase() + guess.value.slice(1))
  ) {
    score.value += guess.value.length > 4 ? guess.value.length : 1;
    knownWords.value.push(guess.value);
  }
  guess.value = '';
}

function allLettersIncluded(): boolean {
  return !guessLetters.value.some((letter) => !targetLetters.value.includes(letter));
}

function shuffle(array: string[]) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}
</script>

<template>
  <main>
    <h1>Hallo</h1>
    <div class="target-letters">
      <div class="target-letter" v-for="letter in targetLetters" :key="letter">
        <span :class="{ required: letter === requiredLetter }">{{ letter }}</span>
      </div>
    </div>
    <div v-if="includes.length > 0">
      <h2>Mögliche Wörter: {{ includes.length }}</h2>
      <!--      <ul>-->
      <!--        <li v-for="word in includes" :key="word">{{ word }}</li>-->
      <!--      </ul>-->
    </div>
    <div>Du hast schon {{ knownWords.length }} Wörter.</div>
    <div>Deine Punkte: {{ score }}</div>
    <ul>
      <li v-for="word in knownWords" :key="word">{{ word }}</li>
    </ul>
    <form @submit="checkWord">
      <label for="guess">Wort</label><br />
      <input type="text" v-model="guess" />
      <button>OK</button>
    </form>
  </main>
</template>

<style scoped>
.target-letters {
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.target-letter {
  font-size: 2rem;
  border: 1px solid #dedeed;
}

.required {
  color: #883377;
}
</style>
