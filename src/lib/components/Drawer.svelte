<script lang="ts">
    import { page } from '$app/stores';
    import { open } from '$lib/stores/drawer';
    import BurgerButton from './BurgerButton.svelte';

    function close() {
        $open = false;
    }
</script>

<div class="drawer h-screen">
    <input id="main-drawer" type="checkbox" class="drawer-toggle" bind:checked={$open}>
    <div class="flex flex-col drawer-content">
        <slot />
    </div>
    <div class="drawer-side">
        <label for="main-drawer" class="drawer-overlay"></label>
        <div class="flex flex-col max-w-xs bg-base-100">
            <header class="navbar bg-neutral sticky top-0 w-full">
                <BurgerButton open={$open} onClick="{close}" />
            </header>
            <ul class="menu overflow-y-auto flex-grow">
                <li>
                    <a on:click="{close}"
                        class:active={$page.url.pathname === '/how-it-works'}
                        class="text-white hover:text-secondary"
                        sveltekit:prefetch href="/how-it-works">How it Works</a>
                </li>
                <li>
                    <a on:click="{close}"
                        class:active={$page.url.pathname === '/use-cases'}
                        class="text-white hover:text-secondary"
                        sveltekit:prefetch href="/use-cases">Use Cases</a>
                </li>
            </ul>
            <footer class="p-2 bg-neutral/100 text-neutral-content sticky bottom-0 md:hidden text-right">
                <a class="btn btn-accent normal-case" sveltekit:prefetch href="/login" on:click="{close}">Log in</a>
                <a class="btn btn-secondary normal-case" sveltekit:prefetch href="/signup" on:click="{close}">Sign up</a>
            </footer>
        </div>
    </div>
</div>