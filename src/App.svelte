<script lang="ts">
    //import { TextField, H1, Button } from "attractions";

    import { default as Button } from "attractions/button/button.svelte";
    import { default as TextField } from "attractions/text-field/text-field.svelte";
    import { default as H1 } from "attractions/typography/h1.svelte";


    //import {}  from 'svelte-feather-icons/src/icons/AtSignIcon.svelte'
    import { AtSignIcon } from "svelte-feather-icons";
    import { CloudAlerting32, Awake32, CircleFilled32 } from "@carbon/icons";

    import { TouchId } from "@carbon/pictograms";
    import CrIcon from "@c/CrIcon.svelte";

    let name: string = "World";
</script>

<Button>click me</Button>
<H1>
    <CrIcon icon={CloudAlerting32} />
    <CrIcon icon={Awake32} />
    <CrIcon icon={CircleFilled32} />
    <CrIcon icon={TouchId} width="16" height="16" />
</H1>
<TextField outline label="Username" withItem type="email">
    <AtSignIcon size="24" class="item" />
</TextField>
<main>
    <h1 class="something">Hello {name}!</h1>
</main>

<style lang="scss">
    /*
      // when you don use theme file
      @use '~attractions/_variables' as vars;
    //*/
    @use "theme" as vars;
    @use "~attractions/_mixins";
    @use "~attractions/_appearances";

    .something {
        color: vars.$main;

        // See the source code to discover these internal mixins:
        @include appearances.button;
    }

    $red: vars.$something-else;
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
