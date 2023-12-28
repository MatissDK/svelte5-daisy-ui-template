import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({cookies}) => {

    const theme = cookies.get('colortheme');

	return {
		theme
	};
};