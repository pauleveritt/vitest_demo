import { expect, it } from 'vitest'

// const P = '../pyscript/public/pyodide/pyodide.mjs';
import { loadPyodide } from '../pyscript/public/pyodide/pyodide';

it('should load Pyodide', async () => {
    const pyodide = await loadPyodide();
    const result = await pyodide.runPythonAsync('1+1');
    // const result = 991;
    expect(result).toEqual(9);
});

it('should just work', () => {
    expect(1).toBe(1)
})