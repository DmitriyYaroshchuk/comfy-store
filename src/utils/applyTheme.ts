import type {Theme} from "@/features/theme/themeSlice.ts";
export function applyTheme(theme: Theme) {
    // document.documentElement refers to the <html> element
    // we add 'light' or 'dark' class to it so CSS can apply the correct theme variables
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
        // window.matchMedia('(prefers-color-scheme: dark)') returns a MediaQueryList object:
        // {
        //   matches: true,        // true if OS is in dark mode, false if light mode
        //   media: '(prefers-color-scheme: dark)',  // the query string
        //   onchange: null,       // event listener for when the preference changes
        // }
        // we only use .matches here — a boolean that tells us the current OS theme
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
        return;
    }

    root.classList.add(theme);
}