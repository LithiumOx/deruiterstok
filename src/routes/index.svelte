<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<aside class="overflow-hidden md:max-h-[50vh] bg-gray-50 sm:grid sm:grid-cols-2">
	<div class="p-8 md:p-12 lg:px-16 lg:py-24">
		<div class="max-w-xl mx-auto text-center sm:text-left">
			<h2 class="text-2xl sm:text-xl font-bold text-gray-900 md:text-3xl">De Ruiterstok</h2>

			<p class=" text-gray-500 md:mt-4 md:block">
				Dit seizoen beginnen we weer sterk bij De Ruiterstok! Van karten tot kinder paintball het
				gaat allemaal gebeuren!
				<br /><br /> Wil jij nu ook gezellig meegaan op uitjes en meedoen aan toffe activiteiten? Meld
				je aan!
			</p>

			<div class="mt-4 md:mt-8">
				<a
					href="#"
					class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring focus:ring-yellow-400"
				>
					Wordt nu lid!
				</a>
			</div>
		</div>
	</div>

	<img alt="#" src="/images/stock.jpg" class="object-center w-full" />
</aside>

<section class="bg-violet-200">
	<div class="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
				De jongerenvereniging van Schermerhorn!
			</h2>

			<p class="mt-4 text-bg-zinc-200 sm:text-xl">
				Al 52 jaar zijn wij actief voor de jongeren in het pittoreske Schermerhorn. Daarnaast
				proberen wij de gezelligheid in het dorp te versterken met leuke avonden en natuurlijk onze
				welbekende feestjes. <br /><br />
				Hieronder zijn wat leuke feitjes:
			</p>
		</div>

		<div class="mt-8 sm:mt-12">
			<dl class="flex flex-initial justify-evenly gap-2">
				<div
					class="flex-col w-1/2 px-4 py-8 my-auto text-center border-gray-600 bg-white border-2 rounded-lg"
				>
					<dt class="order-last text-lg font-medium text-gray-500">Wij bestaan al sinds</dt>

					<dd class="text-4xl font-extrabold text-purple-600 md:text-5xl">1970</dd>

					<dt class="order-last text-lg font-medium text-gray-500">🤯</dt>
				</div>
				<div
					class="flex-col w-1/2 px-4 py-8 text-center border-gray-600 bg-white border-2 rounded-lg"
				>
					<dt class="order-last text-lg font-medium text-gray-500">Wij hebben nu</dt>

					<dd class="text-4xl font-extrabold text-purple-600 md:text-5xl">44+</dd>
					<dt class="order-last text-lg font-medium text-gray-500">leden</dt>
				</div>
			</dl>
		</div>
	</div>
</section>
