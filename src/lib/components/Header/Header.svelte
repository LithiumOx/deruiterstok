<script>
	import Logo from './Logo.svelte';
	import { store as authStore, logout } from '$lib/stores/auth';

	$: user = $authStore;
	$: console.log(user);
</script>

<nav class="flex items-center justify-between max-w-3xl p-4 mx-auto">
	<a
		sveltekit:prefetch
		class="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg"
		href="/"
	>
		<Logo />
	</a>

	<ul class="flex items-center space-x-2 text-sm font-medium text-gray-500">
		<li class="hidden lg:block">
			<a sveltekit:prefetch class="px-3 py-2 rounded-lg" href="/"> Home </a>
		</li>

		<li>
			<a sveltekit:prefetch class="px-3 py-2 rounded-lg" href="/nieuwsbrief"> Nieuwsbrief </a>
		</li>

		<li>
			{#if !user}
				<a sveltekit:prefetch class="inline-flex items-center px-3 py-2 rounded-lg" href="/login">
				Login
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="ml-1.5 w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</a>
			{:else}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="inline-flex items-center px-3 py-2 rounded-lg" href="javascript:void(0)" on:click|preventDefault={logout}>
				Logout
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="ml-1.5 w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</a>
			{/if}
		</li>
	</ul>
</nav>
