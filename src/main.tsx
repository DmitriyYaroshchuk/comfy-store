import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "@/engine/store/store.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Toaster/>
        <App />
    </Provider>,
)
