import "@/styles/index.css"
import { App } from "@/components"
import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"

const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
