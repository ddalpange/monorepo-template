import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const UpArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M5 12L10 7L15 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(UpArrow);
const Memo = memo(ForwardRef);
export { Memo as UpArrow };