<script lang="ts">
  import { onMount, tick, afterUpdate } from "svelte";
  import JsBarcode from "jsbarcode";

  let barcode: HTMLImageElement | HTMLCanvasElement | SVGSVGElement;
  export let value: string;
  export let elementTag: "img" | "canvas" | "svg" = "img";
  export let options: JsBarcode.Options;
  const defaultOptions: JsBarcode.Options = {
    format: "CODE128",
    width: 2,
    height: 100,
    displayValue: true,
    text: undefined,
    fontOptions: "",
    font: "monospace",
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    flat: true,
  };

  onMount(async () => {
    await tick();
    if (!value) return;
    JsBarcode(barcode, value, defaultOptions);
  });

  afterUpdate(async () => {
    await tick();
    if (!value) return;
    JsBarcode(barcode, value, Object.assign(defaultOptions, options));
  });
</script>

{#if elementTag === "img"}
  <img bind:this={barcode} alt="" />
{:else if elementTag === "canvas"}
  <canvas bind:this={barcode} />
{:else}
  <svg bind:this={barcode} />
{/if}
