import {expect, it} from 'vitest'

import {loadPyodide} from '../pyodide';

it('should load Pyodide', async () => {
    const pyodide = await loadPyodide();
    const result = await pyodide.runPythonAsync('1+1');
    expect(result).toEqual(2);
});
