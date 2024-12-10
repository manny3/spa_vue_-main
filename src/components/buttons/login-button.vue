<template>
  <!-- <button class="button__login" @click="handleLogin">Log In</button> -->
  <button class="button__login" @click="handleLoginV2">Log Inv2</button>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/profile",
    },
    authorizationParams: {
      prompt: "login",
    },
  });
};

const handleLoginV2 = () => {
  // 示例：啟動登入流程的 URL
  window.location.href = `https://${
    import.meta.env.VITE_AUTH0_DOMAIN
  }/authorize?response_type=code&client_id=${
    import.meta.env.VITE_AUTH0_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_AUTH0_CALLBACK_URL}`;
};
</script>
