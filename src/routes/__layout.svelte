<script lang="ts">
    import Drawer from '$lib/components/Drawer.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
</script>

<Drawer>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</Drawer>