<script lang="ts">
    import { Button, TextField } from 'attractions';
    //import {}  from 'svelte-feather-icons/src/icons/AtSignIcon.svelte'
    import {AtSignIcon} from 'svelte-feather-icons';
    import {CloudAlerting32, Awake32, CircleFilled32} from '@carbon/icons';

    import { TouchId } from '@carbon/pictograms';
    import  CrIcon from './components/CrIcon.svelte';


    let name:string =  'World';
</script>

  <Button>click me</Button>

  <CrIcon icon={CloudAlerting32}/>
  <CrIcon icon={Awake32}/>
  <CrIcon icon={CircleFilled32}/>
  <CrIcon icon={TouchId} width=16 height=16/>

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