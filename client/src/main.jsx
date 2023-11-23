import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Szkoly from './Pages/Szkoly'
import Uczniowie from './Pages/Uczniowie'
import Klasy from './Pages/Klasy'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/Szkoly' Component={Szkoly} />
			<Route path='/Klasy' Component={Klasy} />
			<Route path='/Uczniowie' Component={Uczniowie} />
		</Routes>
	</BrowserRouter>
)
