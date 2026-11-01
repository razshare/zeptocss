import { mount } from "svelte"
import App from "./app.svelte"
/** @type {HTMLElement} */
// @ts-ignore
const target = document.getElementById("app")
const app = mount(App, { target })
export default app
