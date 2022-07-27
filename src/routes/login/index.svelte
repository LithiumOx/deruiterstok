<script>
	import * as auth from '$lib/stores/auth';
	import { goto } from '$app/navigation';
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

	async function login() {
		try {
			await auth.login(email);
			goto('/todos');
		} catch (err) {
			console.log(err);
		}
	}
</script>

<div class="overflow-hidden max-h-[25vh] bg-gray-50 sm:grid rounded-t-lg sm:grid-cols-2">
	<div class="p-8 md:p-12 lg:px-16 ">
		<div class="max-w-xl mx-auto text-center sm:text-left">
			<h2 class="text-2xl sm:text-xl font-bold text-gray-900 md:text-3xl">Login</h2>
		</div>
	</div>
</div>
<div class=" flex flex-col items-center bg-violet-200 rounded-b-lg">
	<div id="lottie" class="w-2/4 lg:w-1/4 -my-6" />
	<div class="">
		<p class="text-center mb-2 w-1/2 mx-auto">
			Vul hieronder je gegevens in en ontvang een van onze magische emails! ✨
		</p>
		<form on:submit|preventDefault={login}>
			<div class="relative w-3/4 mx-auto">
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
			</div>
			<div class="flex justify-between mt-4 mx-auto mb-12 w-3/4">
				<a href="/login/hoe-werkt-dit" class="font-light underline px-5 py-2 hover:text-gray-a00"
					>Hoe werkt dit?</a
				>
				<button
					type="submit"
					class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring focus:ring-violet-400"
					>Login</button
				>
			</div>
		</form>
	</div>
</div>
