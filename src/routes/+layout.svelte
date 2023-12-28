<script lang="ts">
    import "../app.css";
    import Loader from "$lib/ui/Loader.svelte";
    import ThemeChanger from '$lib/ui/ThemeChanger.svelte';
    import {navigating} from "$app/stores";

    let {data} = $props();

  </script>
  
  <svelte:head>
    <title>SvelteKit5 + daisyUI template</title>
</svelte:head>


{#if $navigating}
    <Loader/>
{/if}


<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full fixed navbar z-10 bg-neutral text-neutral-content">
          <div class="flex-none lg:hidden">
              <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
          </div>
          <div class="flex-1 px-2 mx-2">
              <a href="/">SvelteKit5 + daisyUI template</a>
          </div>
          <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal items-center">
                  <!-- Navbar menu content here -->
                  <li><a href="/">HOME</a></li>
                  <li><a href="/about">ABOUT</a></li>
                  <div class="w-4"></div>
                  <ThemeChanger theme={data.theme}/>
              </ul>
          </div>
      </div>
      <div class="mt-[100px] px-5">
          <slot/>
      </div>
  </div>
  <div class="drawer-side z-20">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200">
          <!-- Sidebar content here -->
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
      </ul>
  </div>
</div>