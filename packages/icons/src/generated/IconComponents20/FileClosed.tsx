import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const FileClosed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M3 6H15C16.1046 6 17 6.89543 17 8V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V6Z" stroke="currentColor" /><path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V6H3V5Z" stroke="currentColor" /></svg>;

const ForwardRef = forwardRef(FileClosed);
const Memo = memo(ForwardRef);
export { Memo as FileClosed };