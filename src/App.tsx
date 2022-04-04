import 'normalize.css';
import './App.css';
import { FormsContainer } from './components/base-ui';
import VanilaForm from './components/VanilaForm';

function App() {
	return (
		<FormsContainer>
			<VanilaForm />
			<VanilaForm />
			<VanilaForm />
		</FormsContainer>
	);
}

export default App;
