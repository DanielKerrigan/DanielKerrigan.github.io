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

<h2>Research</h2>

<p>I am interested in visualization and HCI, particularly as they relate to the development, evaluation, and use of machine learning models. My research takes a human-centered perspective on how the machine learning process can be improved.</p>

<section>

  <h3>Publications</h3>

  <div>
    <h4>A Survey of Domain Knowledge Elicitation in Applied Machine Learning</h4>
    <div>Daniel Kerrigan, Jessica Hullman, Enrico Bertini</div>
    <div><span class="venue">Multimodal Technologies and Interaction</span>, 2021</div>
    <div>
      <ul class="horizontal-list">
        <li><a href="https://doi.org/10.3390/mti5120073">Article</a></li>
        <li><a href="https://github.com/DanielKerrigan/elicitation-survey">GitHub</a></li>
      </ul>
    </div>
  </div>

  <div>
    <h4>Nutrition Bytes: Visualizing Food Content</h4>
    <div>Shuai He, Daniel Kerrigan, Ronald Metoyer</div>
    <div><span class="venue">IEEE VIS Poster Extended Abstract</span>, 2017</div>
    <div>
      <ul class="horizontal-list">
        <li><a rel="external" href="/papers/poster.pdf">Poster</a></li>
        <li><a href="https://vimeo.com/230838162">Demo video</a></li>
        <li><a rel="external" href="/papers/NutritionBytesFinal.pdf">Extended abstract</a></li>
      </ul>
    </div>
  </div>

</section>

<section>

  <h3>In progress</h3>

  <div>
    <h4>SliceLens</h4>
    <p><a href="https://slicelens.vercel.app">SliceLens</a> is one of my current research projects. It is a tool for guided exploration of machine learning datasets and model predictions. Checkout the <a href="https://github.com/nyuvis/SliceLens">GitHub repository</a> for more info.</p>
  </div>

</section>

<style>
  .venue {
    font-style: italic;
  }
</style>