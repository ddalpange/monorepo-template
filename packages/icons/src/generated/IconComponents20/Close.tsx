import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Close = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(Close);
const Memo = memo(ForwardRef);
export { Memo as Close };