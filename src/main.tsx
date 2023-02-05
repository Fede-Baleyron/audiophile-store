import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
    <Suspense>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>
)
