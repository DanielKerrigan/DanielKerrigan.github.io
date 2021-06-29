<script lang="ts">
	import Header from '$lib/Header.svelte';
  import '../app.css';
</script>

<svelte:head>
	<title>Daniel Kerrigan</title>
</svelte:head>

<div id="content">
  <header>
    <Header/>
  </header>

  <main>
    <slot></slot>
  </main>
</div>

<style>
  header {
    margin-top: 2.0rem;
  }

  main {
    max-width: 35rem;
    margin-top: 2.0rem;
  }
</style>