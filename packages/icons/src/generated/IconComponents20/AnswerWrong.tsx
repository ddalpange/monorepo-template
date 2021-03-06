import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const AnswerWrong = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM13.3536 6.64645C13.1583 6.45118 12.8417 6.45118 12.6464 6.64645L10 9.29289L7.35355 6.64645C7.15829 6.45118 6.84171 6.45118 6.64645 6.64645C6.45118 6.84171 6.45118 7.15829 6.64645 7.35355L9.29289 10L6.64645 12.6464C6.45118 12.8417 6.45118 13.1583 6.64645 13.3536C6.84171 13.5488 7.15829 13.5488 7.35355 13.3536L10 10.7071L12.6464 13.3536C12.8417 13.5488 13.1583 13.5488 13.3536 13.3536C13.5488 13.1583 13.5488 12.8417 13.3536 12.6464L10.7071 10L13.3536 7.35355C13.5488 7.15829 13.5488 6.84171 13.3536 6.64645Z" fill="currentColor" /></svg>;

const ForwardRef = forwardRef(AnswerWrong);
const Memo = memo(ForwardRef);
export { Memo as AnswerWrong };