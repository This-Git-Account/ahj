import { InnFormWidget } from "./widget.js";

const container = document.querySelector(".container");
const form = new InnFormWidget(container);

form.bindToDOM();
