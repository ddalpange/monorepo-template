import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const AnswerCorrected = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM14.3536 7.85355L9.35357 12.8536C9.17071 13.0364 8.87858 13.0497 8.67992 12.8841L5.67992 10.3841C5.46778 10.2073 5.43912 9.89205 5.6159 9.67991C5.79268 9.46777 6.10797 9.43911 6.3201 9.61589L8.96933 11.8236L13.6465 7.14645C13.8417 6.95118 14.1583 6.95118 14.3536 7.14645C14.5488 7.34171 14.5488 7.65829 14.3536 7.85355Z" fill="currentColor" /></svg>;

const ForwardRef = forwardRef(AnswerCorrected);
const Memo = memo(ForwardRef);
export { Memo as AnswerCorrected };