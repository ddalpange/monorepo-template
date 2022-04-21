import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Students = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M3.5 6C3.5 5.17157 4.17157 4.5 5 4.5H15C15.8284 4.5 16.5 5.17157 16.5 6V15C16.5 15.8284 15.8284 16.5 15 16.5H5C4.17157 16.5 3.5 15.8284 3.5 15V6Z" stroke="currentColor" /><path d="M3.5 8H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 3V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 3V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(Students);
const Memo = memo(ForwardRef);
export { Memo as Students };