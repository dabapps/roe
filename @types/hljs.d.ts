interface HighlightJS {
  highlightBlock: (element: HTMLElement) => void;
}

interface Window {
  hljs?: HighlightJS;
}
