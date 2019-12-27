<template>
  <button class="primary">
    <slot></slot>
  </button>
</template>

<style scoped>
.primary {
  background: #27ae60;
  color: #333;
  padding: 4px 8px;
  border: 1px solid #fefefe;
}
.primary:hover{
    background: red;
    color:white;
}
</style>
