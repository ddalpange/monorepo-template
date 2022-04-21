import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Plus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M10 3V18" stroke="currentColor" strokeLinecap="round" /><path d="M2.5 10.5L17.5 10.5" stroke="currentColor" strokeLinecap="round" /></svg>;

const ForwardRef = forwardRef(Plus);
const Memo = memo(ForwardRef);
export { Memo as Plus };