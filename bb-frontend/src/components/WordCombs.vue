<script setup lang="ts">
const { targetLetters } = defineProps(['targetLetters'])
const emits = defineEmits(['addLetter'])

</script>

<template>
<div class="comb">
  <div class="target-letters">
    <div class="target-letter" @click="emits('addLetter', targetLetters[0])">{{ targetLetters[0] }}</div>
    <div class="target-letter" @click="emits('addLetter', targetLetters[1])">{{ targetLetters[1] }}</div>
  </div>
  <div class="target-letters">
    <div class="target-letter" @click="emits('addLetter', targetLetters[2])">{{ targetLetters[2] }}</div>
    <div class="target-letter required" @click="emits('addLetter', targetLetters[3])">{{ targetLetters[3] }}</div>
    <div class="target-letter" @click="emits('addLetter', targetLetters[4])">{{ targetLetters[4] }}</div>
  </div>
  <div class="target-letters">
    <div class="target-letter" @click="emits('addLetter', targetLetters[5])">{{ targetLetters[5] }}</div>
    <div class="target-letter" @click="emits('addLetter', targetLetters[6])">{{ targetLetters[6] }}</div>
  </div>
</div>
</template>

<style scoped>
.comb {
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.target-letters {
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.target-letter {
  user-select: none;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid #dedeed;
  border-radius: 1.5rem;
}

.required {
  color: var(--required-letter-color);
}


</style>