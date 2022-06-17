<template>
  <div id="app" class="d-flex flex-column h-100">
    <router-view />
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from 'vue-router'
import { ref } from "vue"
export default { 
  setup() {
    console.log('abcdeee')
    const auth0 = useAuth0();
    const router = useRouter()
    const isAuthenticated = ref(auth0.isAuthenticated)
    console.log(isAuthenticated.value)
    if (isAuthenticated.value) {
      router.push({ name: "login" });
    } 
  }
};
</script>
