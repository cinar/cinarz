<script setup lang="ts"></script>

<template>
  <div class="footer">
    <a href="/disclaimer">Disclaimer</a>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/terms-and-conditions">Terms and Conditions</a>
  </div>
</template>

<style type="scss">
.footer {
  padding: 2.5rem;
  border-top: 1px solid var(--c-border);
  text-align: center;
  color: var(--c-text-lighter);
  transition: border-color var(--t-color);
}

.footer a {
  margin-left: 12px;
  margin-right: 12px;
}
</style>
