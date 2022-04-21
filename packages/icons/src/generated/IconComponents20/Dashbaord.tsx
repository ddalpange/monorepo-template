import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const Dashbaord = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M5 4C3.89543 4 3 4.89543 3 6V7C3 8.10457 3.89543 9 5 9H7.5C8.60457 9 9.5 8.10457 9.5 7V6C9.5 4.89543 8.60457 4 7.5 4H5ZM7.5 5C8.05228 5 8.5 5.44772 8.5 6V7C8.5 7.55229 8.05228 8 7.5 8H5C4.44772 8 4 7.55229 4 7V6C4 5.44772 4.44772 5 5 5H7.5Z" fill="currentColor" /><path d="M5 10C3.89543 10 3 10.8954 3 12V15C3 16.1046 3.89543 17 5 17H7.5C8.60457 17 9.5 16.1046 9.5 15V12C9.5 10.8954 8.60457 10 7.5 10H5ZM7.5 11C8.05228 11 8.5 11.4477 8.5 12V15C8.5 15.5523 8.05228 16 7.5 16H5C4.44772 16 4 15.5523 4 15V12C4 11.4477 4.44772 11 5 11H7.5Z" fill="currentColor" /><path d="M10.5 6C10.5 4.89543 11.3954 4 12.5 4H15C16.1046 4 17 4.89543 17 6V15C17 16.1046 16.1046 17 15 17H12.5C11.3954 17 10.5 16.1046 10.5 15V6ZM12.5 5C11.9477 5 11.5 5.44772 11.5 6V15C11.5 15.5523 11.9477 16 12.5 16H15C15.5523 16 16 15.5523 16 15V6C16 5.44772 15.5523 5 15 5H12.5Z" fill="currentColor" /></svg>;

const ForwardRef = forwardRef(Dashbaord);
const Memo = memo(ForwardRef);
export { Memo as Dashbaord };