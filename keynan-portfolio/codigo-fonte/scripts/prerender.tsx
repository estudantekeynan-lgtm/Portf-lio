import { readFile, writeFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/src/pages/Home";

// O executor Node usa o runtime JSX clássico para os componentes do cliente.
// Atribuição restrita ao processo de build; não afeta o bundle do navegador.
Object.assign(globalThis, { React });

const output = new URL("../dist/public/index.html", import.meta.url);
const html = await readFile(output, "utf8");
const rendered = renderToString(React.createElement(Home));
await writeFile(
  output,
  html.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`),
);
console.log("HTML público pré-renderizado: apresentação, projetos, módulos, stack e contato.");
