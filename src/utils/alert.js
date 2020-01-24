import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const defaultConfig = {
	confirmButtonColor: '#4CAF50',
	cancelButtonColor: '#f44336'
};

export const showAlert = (config, customConfig = false) => {
	return customConfig ? MySwal.fire({ ...defaultConfig, ...config }) : MySwal.fire({ ...config });
};

export const showToast = (config) => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'bottom',
		showConfirmButton: false,
		timer: 3500
	});
	return Toast.fire(config);
};

export const showTextAlert = async (defaultValue) => {
	const { value } = await Swal.fire({
		...defaultConfig,
		title: 'Name your salad...',
		input: 'text',
		confirmButtonText: 'Save',
		showCancelButton: true,
		inputValue: defaultValue,
		inputValidator: (value) => {
			if (!value) {
				return 'You need to write something!'
			}
		}
	});
	
	if (value) {
		return value;
	}
};
