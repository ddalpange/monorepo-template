import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const CheckboxSelected = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><rect x={3.5} y={3.5} width={13} height={13} rx={2.5} stroke="currentColor" /><rect x={6} y={6} width={8} height={8} rx={1} fill="currentColor" /></svg>;

const ForwardRef = forwardRef(CheckboxSelected);
const Memo = memo(ForwardRef);
export { Memo as CheckboxSelected };