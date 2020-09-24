export const parseBreakpoint = (bp) =>parseInt(bp.match(/^[a-z]{2}$/) != null ? bsBreakpointToInt(bp) : bp)

const bsBreakpointToInt = (code) =>{
    const cw = {
        'sm':'576px',
        'md':'768px',
        'lg':'992px',
        'xl':'1200px',
    }
    if(!(code in cw)){return 0;}
    return cw[code];
}