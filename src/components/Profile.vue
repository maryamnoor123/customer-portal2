<template>
  <div v-if="isLoading">Loading ...</div>
  <div v-else>
    <h2>User Profile</h2>
    <button @click="logout">logout</button>
    <h6>{{accessToken}}</h6>
    <pre v-if="isAuthenticated">
        <code>{{ accessToken }}</code>
      </pre>
  </div>
</template>
<script>
// Composition API
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted, ref } from 'vue'
export default {
   setup() {
    const auth0 = useAuth0();
    const accessToken = ref("")
    onMounted(async () => {
        accessToken.value =  await auth0.getAccessTokenSilently();
        
    });
    const logout = () => {
      auth0.logout({ returnTo: window.location.origin });
    };
    return {
      logout,
      user: auth0.user,
      auth0,
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
      accessToken,
    };
  },
};
</script>