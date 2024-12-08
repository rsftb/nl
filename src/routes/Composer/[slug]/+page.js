// Composer/[slug]/+page.js

export const load = ({ params }) => {
    return {
        slug: params.slug,
    }
}
