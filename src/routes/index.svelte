<script context="module">
    export const prerender = true;
</script>

<svelte:head>
    <title>Foo</title>
</svelte:head>

<section class="flex flex-col min-h-screen mt-[-64px] pt-[85px] md:pt-[100px]">
    <div class="flex basis-2/4 grow justify-center items-center"></div>
    <div class="flex flex-col basis-1/4 grow justify-center items-center pt-8 md:pt-16 px-5">
        <div class="flex justify-center mt-6 mb-10 md:mb-16">
            <div class="bg-white border rounded-md focus-within:ring focus-within:border-blue-500">
                <div class="flex flex-wrap justify-between md:flex-row p-1">
                    <input type="email" class="p-2 m-1 w-full md:w-[300px] text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter code" aria-label="Enter code">
                    <button class="btn normal-case w-full md:w-auto no-animation">Search</button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col basis-1/4 grow justify-center items-center bg-neutral/50 pt-10 pb-12 px-8">
        <a class="btn btn-secondary normal-case" sveltekit:prefetch href="/signup">Sign Up, it's free!</a>
    </div>
</section>