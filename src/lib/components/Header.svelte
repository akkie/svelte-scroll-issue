<script lang="ts">
    import { open } from '$lib/stores/drawer';
    import BurgerButton from './BurgerButton.svelte';
</script>

<header class="navbar drop-shadow-lg bg-neutral/90 text-neutral-content sticky top-0 w-full z-50">
    <div class="w-full 2xl:container 2xl:mx-auto">
        <div class="flex-none lg:hidden">
            <BurgerButton open={$open} onClick="{() => $open = !$open}" />
        </div>
        <div class="flex-1 flex-grow lg:flex-none px-2 mr-10 sm:mx-2">
            <nav class="text-2xl font-bold text-center sm:text-left">
                <a sveltekit:prefetch href="/">My page</a>
            </nav>
        </div>
        <div class="flex-1 px-2 mx-2 hidden lg:flex">

        </div>
        <nav class="navbar-end space-x-2 hidden md:flex">
            <a class="btn btn-accent normal-case" sveltekit:prefetch href="/login">Log in</a>
            <a class="btn btn-secondary normal-case" sveltekit:prefetch href="/signup">Sign up</a>
        </nav>
    </div>
</header>