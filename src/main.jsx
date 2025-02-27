import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// //import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// //import { FormCustomHook } from './02-useEffect/FormCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layaout } from './05-useLayaoutEffect/Layaout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
// import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <Padre/>
  //</StrictMode>,
)
