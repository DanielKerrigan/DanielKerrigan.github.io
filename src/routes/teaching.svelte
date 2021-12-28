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

<h2>Teaching</h2>

<section>
  <h3>Information Visualization</h3>
  <p>I have spent five semesters as a TA for NYU Tandon's Information Visualization course. I have developed <a href="https://observablehq.com/@nyuvis?tab=collections">collections of Observable notebooks</a> to help teach students how to build visualizations with D3. The notebooks contain <a href="https://observablehq.com/collection/@nyuvis/guides-and-examples">tutorials and examples</a>, <a href="https://observablehq.com/collection/@nyuvis/practice-exercises">practice exercises</a>, and <a href="https://observablehq.com/collection/@nyuvis/exercises">homeworks</a>.</p>
</section>

<section>
  <h3>Online D3 Help</h3>
  <p>Outside of class, I enjoy helping people learn D3 online. I've answered over 50 questions about D3 on <a href="https://stackoverflow.com/users/5016634/dan">Stack Overflow</a> and the <a href="https://talk.observablehq.com/u/danielkerrigan/summary">Observable forums</a>.</p>
</section>