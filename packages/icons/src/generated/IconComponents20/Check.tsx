import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Check = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M3.99909 10.2431L8.24173 14.4857L16.5 6.25781" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const ForwardRef = forwardRef(Check);
const Memo = memo(ForwardRef);
export { Memo as Check };