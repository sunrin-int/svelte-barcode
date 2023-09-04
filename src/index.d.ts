import type { SvelteComponent } from "svelte";
import JsBarcode from "jsbarcode";

interface Props {
  value: string;
  elementTag?: "img" | "canvas" | "svg";
  options?: JsBarcode.Options;
}

export default class extends SvelteComponent<Props, {}, {}> {}
