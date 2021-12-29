<script type="ts">

    export let icon;



    let _msg: string = "Missing SVG rule";
</script>

<svg {...icon.attrs} class={icon.name} {...$$restProps}>
    {#each icon.content as name}
        {#if name.elem == "path"}
            <path {...name.attrs} />
        {:else if name.elem == "circle"}
            <circle {...name.attrs} />
        {:else if name.elem == "rect"}
            <rect {...name.attrs} />
        {:else}
            {@debug _msg, name}
            <text x="0" y="0">{_msg}</text>
        {/if}
    {/each}
</svg>
