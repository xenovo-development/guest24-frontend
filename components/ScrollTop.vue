<template>
  <a
    v-if="showScrollTop"
    @click="scrollToTop"
    id="scroll-top"
    class="button-go"
  >
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showScrollTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 800;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
