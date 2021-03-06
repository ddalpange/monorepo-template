import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const FileOpened = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M11 6V5C11 3.89543 10.1046 3 9 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H7" stroke="currentColor" /><path d="M4.70141 7.64223C4.87432 6.69125 5.70258 6 6.66915 6H16.6036C17.8514 6 18.7945 7.13009 18.5713 8.35777L17.2986 15.3578C17.1257 16.3087 16.2974 17 15.3308 17H5.39643C4.14862 17 3.20547 15.8699 3.42869 14.6422L4.70141 7.64223Z" stroke="currentColor" /></svg>;

const ForwardRef = forwardRef(FileOpened);
const Memo = memo(ForwardRef);
export { Memo as FileOpened };