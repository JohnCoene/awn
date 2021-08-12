import 'shiny';

export const makeCallback = (input, ns, value) => {
	return () => {
		Shiny.setInputValue(`${ns}${input}`, value, {priority: 'event'});
	}
}
