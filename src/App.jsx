import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom/cjs/react-router-dom.min';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import { EcommerceProvider } from './context/EcommerceContext';

function App() {
	return (
		<div className='App'>
			<link
				href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
				rel='stylesheet'
				integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
				crossOrigin='anonymous'
			></link>
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
				crossOrigin='anonymous'
			></script>

			<BrowserRouter>
				<EcommerceProvider>
					<Switch>
						<Route exact path='/'>
							<HomeContainer />
						</Route>
						<Route exact path='/productos'>
							<ProductsContainer />
						</Route>
						<Route path='/productos/:busqueda'>
							<ProductsContainer />
						</Route>
					</Switch>
				</EcommerceProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
