export const pages = [
    {
        name: 'Dictionary',
        value: 'dictionary',
        path: `${BASE_URL}/`,
    },
    {
        name: 'Grammar basics',
        value: 'grammar',
        path: `${BASE_URL}/grammar`,
    },
    {
        name: 'About',
        value: 'about',
        path: `${BASE_URL}/about`,
    },
];

export function goToPage(path: string) {
    window.history.pushState({}, document.title, `${path}${location.hash}`);
}

export function getPageFromPath(): string {
    const currentPath = window.location.pathname.split('#')[0];
    const page = pages.find(({path}) => (path === currentPath));
    if (page) {
        return page.value;
    }

    return 'dictionary';
}

export function setInitialPage() {
    const currentPath = window.location.pathname.split('#')[0];
    const page = pages.find(({path}) => (path === currentPath));
    if (!page) {
        window.history.replaceState({}, document.title, BASE_URL);
    }
}

export function getPathFromPage(page: string): string {
    const finded = pages.find(({value}) => (value === page));
    if (finded) {
        return finded.path;
    }
    return BASE_URL;
}
