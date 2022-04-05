import 'normalize.css';
import './App.css';
import { FormsContainer } from './components/base-ui';
import FormikForm from './components/FormikForm';
import ReactHookForm from './components/ReactHookForm';
import VanilaForm from './components/VanilaForm';

function App() {
	return (
		<FormsContainer>
			<VanilaForm />
			<FormikForm />
			<ReactHookForm />
		</FormsContainer>
	);
}

export default App;
