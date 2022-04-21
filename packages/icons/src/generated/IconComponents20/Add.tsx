import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Add = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><circle cx={10} cy={10} r={7.5} stroke="currentColor" /><path d="M10 7V13" stroke="currentColor" strokeLinecap="round" /><path d="M13 10L7 10" stroke="currentColor" strokeLinecap="round" /></svg>;

const ForwardRef = forwardRef(Add);
const Memo = memo(ForwardRef);
export { Memo as Add };