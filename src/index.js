import React from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
root.render(<h1>'Hola coias'</h1>)
