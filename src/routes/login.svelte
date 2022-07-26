<script>
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	onMount(() => {
		lottie.loadAnimation({
			// @ts-ignore
			container: document.getElementById('lottie'), // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: 'lottie/login.json' // the path to the animation json
		});
	});

	let email = '';

	function login() {
		console.log(email);
	}
</script>

<div class="overflow-hidden max-h-[25vh] bg-gray-50 sm:grid sm:grid-cols-2">
	<div class="p-8 md:p-12 lg:px-16 lg:py-24">
		<div class="max-w-xl mx-auto text-center sm:text-left">
			<h2 class="text-2xl sm:text-xl font-bold text-gray-900 md:text-3xl">Login</h2>
		</div>
	</div>
	<div id="lottie" class="w-auto max-h-[20vh] my-4" />
</div>
<div class=" flex flex-col items-center bg-gray-50">
	<div class="relative">
		<form on:submit|preventDefault={login}>
			<label class="sr-only" for="email"> Email </label>

			<input
				class="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
				id="email"
				type="email"
				bind:value={email}
				placeholder="Email"
			/>

			<span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
				<svg
					class="w-5 h-5"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
					/>
				</svg>
			</span>
		</form>
	</div>
</div>
