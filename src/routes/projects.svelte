<script lang="ts">
  import { dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// don't use client side router
	export const router = false;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<section id="slicelens">
  <h2>SliceLens</h2>
  <p><a href="https://slicelens.vercel.app">SliceLens</a> is one of my current research projects at NYU. It is a tool for guided exploration of machine learning datasets and model predictions. Checkout the <a href="https://github.com/nyuvis/SliceLens">GitHub repository</a> for more info.</p>
</section>

<section id="course">
  <h2>Information Visualization Course Material</h2>
  <p>I have developed <a href="https://observablehq.com/@nyuvis?tab=collections">collections of Observable notebooks</a> for NYU's Information Visualization course to help teach students how to build visualizations with D3. The notebooks contain tutorials, examples, and exercises.</p>
</section>

<section id="notebooks">
  <h2>Observable Notebooks</h2>
  <p>You can find additional visualizations that I have created on my <a href="https://observablehq.com/@danielkerrigan?tab=collections">Observable profile</a>.</p>
</section>

<section id="parallel">
  <h2>Reducing Edge Crossings in Parallel Coordinates</h2>
  <p>For my algorithms course at NYU, I created an <a href="https://dankerrigan.me/algs-2-project/">interactive article</a> that explains how edge crossings can be reduced in parallel coordinates plots.</p>
</section>

<section id="nutrition">
  <h2>Bytes of Nutrition</h2>
  <p><a rel="external" href="https://dankerrigan.me/bytes-of-nutrition">Bytes of Nutrition</a> was my class project from the undergraduate Data Visualization course that I took at Notre Dame. It is an interactive visualization of nutrition data. This project later became the basis for a poster accepted to IEEE VIS 2017. If you are interested in the final version, look at the <a rel="external" href="/papers/poster.pdf">poster</a>, watch the <a href="https://vimeo.com/230838162">demo video</a> and read the <a rel="external" href="/papers/NutritionBytesFinal.pdf">extended abstract</a>.</p>
</section>

<section id="tracelink">
  <h2>Traceability Visualization</h2>
  <p><a rel="external" href="https://dankerrigan.me/trace-vis">This interactive visualization</a> was made while I was working in the HCI Lab at Notre Dame. It shows the development of the Maven project and how the git commits for the project connect to bugs, improvements, and classes in the code. You can interact with the visualization through the filtering options on the left or by hovering over and clicking on the nodes. It might take some time for the data to load for this visualization.</p>
</section>

<style>
  p {
    margin-top: 0.5rem;
  }
</style>