<script lang="ts" context="module">
  import { store as authStore } from '$lib/stores/auth';

  export async function load({ fetch }) {
    const res = await fetch('/api/user');
    const { user } = await res.json();
    authStore.set(user);
    return {
      status: 200,
    };
  }
</script>

<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main class="flex-1 flex flex-col p-4 max-w-xl">
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
