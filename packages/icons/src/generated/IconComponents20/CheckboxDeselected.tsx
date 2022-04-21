import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const CheckboxDeselected = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><rect x={3.5} y={3.5} width={13} height={13} rx={2.5} stroke="currentColor" /></svg>;

const ForwardRef = forwardRef(CheckboxDeselected);
const Memo = memo(ForwardRef);
export { Memo as CheckboxDeselected };