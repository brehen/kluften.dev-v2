import blog_meta from '$lib/data/blog_meta';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({params}) => {
	const postData = blog_meta.find(({ slug }) => slug === params.slug)
	return {
    ...postData
	};
};
