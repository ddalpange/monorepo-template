import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Assignment = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M4.5 5C4.5 4.17157 5.17157 3.5 6 3.5H14C14.8284 3.5 15.5 4.17157 15.5 5V15C15.5 15.8284 14.8284 16.5 14 16.5H6C5.17157 16.5 4.5 15.8284 4.5 15V5Z" stroke="currentColor" /><path d="M7 8H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 12H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(Assignment);
const Memo = memo(ForwardRef);
export { Memo as Assignment };