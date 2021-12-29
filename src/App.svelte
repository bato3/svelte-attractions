<script>
    import { Button } from 'attractions';
</script>

  <Button>click me</Button>
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