<script setup lang="ts">
import { words } from '@/assets/wordsArray';
import { targetWords } from '@/assets/targetWords';
import { ref} from 'vue';
import WordCombs from "@/components/WordCombs.vue";

const guess = ref('');
const requiredLetter = ref('');
const randomWord = ref('');
const targetLetters = ref<string[]>([]);
const possibleIncludes = ref(0);
const includes = ref<string[]>([]);
const score = ref(0);
const knownWords = ref<string[]>([]);

randomWord.value = targetWords[Math.floor(Math.random() * targetWords.length)];
targetLetters.value = Array.from(new Set(randomWord.value.split('')));
shuffle(targetLetters.value);
requiredLetter.value = targetLetters.value[3];

collectPossibleIncludes();

function collectPossibleIncludes() {
  words.forEach((word) => {
    const wordLetters = Array.from(new Set(word.split('')));
    const res = wordLetters.some((letter) => !targetLetters.value.includes(letter));
    if (!res &&
        wordLetters.some((letter) => letter === requiredLetter.value) &&
        !includes.value.includes(word)) {
      possibleIncludes.value++;
      includes.value.push(word);
    }
  });
}

function checkWord(e: any) {
  e.preventDefault();
  if (
    includes.value.includes(guess.value) &&
    !knownWords.value.includes(guess.value)
  ) {
    score.value += guess.value.length > 4 ? guess.value.length : 1;
    knownWords.value.push(guess.value);
    knownWords.value.sort();
    possibleIncludes.value--;
  }
  guess.value = '';
}

function shuffle(array: string[]) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

function addLetterToGuess(letter: string) {
  guess.value += letter;
}

function removeLetterFromGuess() {
  guess.value = guess.value.slice(0,-1);
}

function toUpper() {
  guess.value = guess.value.toUpperCase()
}
</script>

<template>
  <main>
    <div class="playground">
    <div class="score">{{ score }} Punkte</div>
    <WordCombs :targetLetters="targetLetters"  @addLetter="addLetterToGuess" />
    <form @submit="checkWord">
      <label for="guess"></label>
      <input type="text" placeholder="nächstes Wort" size="16" v-model="guess" @input="toUpper" />
      <button type="button" class="btn btn-delete" @click="removeLetterFromGuess">«</button>
      <button type="submit" class="btn btn-submit">OK</button>
    </form>
    <div class="num-words">{{ knownWords.length }}/{{ includes.length }} Wörtern</div>
    <ul>
      <li v-for="word in knownWords" :key="word">{{ word }}</li>
    </ul>
    </div>
  </main>
</template>

<style scoped>
.playground {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.score {
  font-size: 3rem;
}

.num-words {
  font-size: 2rem;
  margin: 1rem 0;
}

ul {
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

li {
  list-style: none;
  margin: .2rem;
  padding: 0 .3rem;
  border: 1px solid var(--required-letter-color);
  border-radius: 2rem;
}

input {
  background-color: transparent;
  font-size: 2rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #dedeed;
  color: #dedeed;
}

.btn {
  background: transparent;
  color: #dedeed;
}

.btn-submit {
  padding: .5rem .4rem;
  border: 1px solid var(--color-green);
  border-radius: 100%;
}

.btn-delete {
  padding: .4rem .7rem;
  border: 1px solid var(--color-red);
  border-radius: 100%;
  margin-right: .5rem;
}
</style>
