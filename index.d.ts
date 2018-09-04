declare module 'bd-autoload'

declare function autoload (name: string): [] | { [k: string]: string }

export default autoload