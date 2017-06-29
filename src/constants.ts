const _window: any = global || window;
_window.__env = _window.__env || {};

export const BASE_HREF = _window.__env.BASE_HREF || '';
export const API_BASE = _window.__env.API_BASE + '/api/v3/';
