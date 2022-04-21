import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Delete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M4 5L16 5" stroke="currentColor" strokeLinecap="round" /><path d="M8 3H12" stroke="currentColor" strokeLinecap="round" /><path d="M5 5L6.5 16.5H13.5L15 5" stroke="currentColor" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(Delete);
const Memo = memo(ForwardRef);
export { Memo as Delete };