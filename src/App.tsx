import 'normalize.css';
import './App.css';
import { FormsContainer } from './components/base-ui';
import FormikForm from './components/FormikForm';
import VanilaForm from './components/VanilaForm';

function App() {
	return (
		<FormsContainer>
			<VanilaForm />
			<FormikForm />
			<VanilaForm />
		</FormsContainer>
	);
}

export default App;
