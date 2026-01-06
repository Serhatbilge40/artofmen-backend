/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Primary Colors - Black
                'black-deep': '#000000',
                'black-rich': '#0A0A0A',
                'black-soft': '#1A1A1A',

                // Brown Palette
                'brown-warm': '#8B7355',
                'brown-light': '#A0826D',
                'brown-muted': '#6B5D52',
                'brown-dark': '#3E2723',
                'brown-deep': '#4E342E',
                'brown-beige': '#D7CCC8',
                'brown-taupe': '#BCAAA4',

                // Accent - Subtle Red
                'accent-deep': '#8B0000',
                'accent-warm': '#A52A2A',
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
