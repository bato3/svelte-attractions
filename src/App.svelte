<script lang="ts">
    import { Button, TextField } from 'attractions';
    //import {}  from 'svelte-feather-icons/src/icons/AtSignIcon.svelte'
    import {AtSignIcon} from 'svelte-feather-icons';
</script>

  <Button>click me</Button>

<TextField outline label="Username" withItem type="email">
  <AtSignIcon size="24" class="item" />
</TextField>
  <main>
	<h1>Hello {name}!</h1>
</main>  <style lang="scss">
    $red: #ff3e00;
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;


	h1 {
		color: $red;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>