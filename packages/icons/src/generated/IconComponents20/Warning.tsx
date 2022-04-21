import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Warning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M10 8L10 11.5" stroke="currentColor" strokeLinecap="round" /><path d="M2.25741 14.7646L8.69264 3.3242C9.26609 2.30472 10.7339 2.30473 11.3074 3.3242L17.7426 14.7646C18.305 15.7645 17.5825 17 16.4352 17H3.56477C2.41753 17 1.69496 15.7645 2.25741 14.7646Z" stroke="currentColor" /><rect x={9.40039} y={13} width={1.2} height={1.2} rx={0.6} fill="currentColor" /></svg>;

const ForwardRef = forwardRef(Warning);
const Memo = memo(ForwardRef);
export { Memo as Warning };