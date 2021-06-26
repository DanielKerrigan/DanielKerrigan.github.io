<script lang="ts">
  import { dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement
	export const hydrate = dev;

	// don't use client side router
	export const router = false;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<p>I am a computer science Ph.D. student at NYU, where I am advised by <a href="http://enrico.bertini.io">Enrico Bertini</a>. I am interseted in information visualization and its applications for machine learning. Prior to NYU, I worked as a software development engineer at Amazon Robotics and did my undergraduate degree at Notre Dame.</p>

<div>
  <ul>
    <li>Email: <a href="mailto:dkerriga@alumni.nd.edu">dkerriga@alumni.nd.edu</a></li>
    <li><a href="https://github.com/danielkerrigan">GitHub</a></li>
    <li> <a href="https://observablehq.com/@danielkerrigan">Observable</a></li>
    <li><a href="https://www.linkedin.com/in/kerrigandan/">LinkedIn</a></li>
  </ul>
</div>