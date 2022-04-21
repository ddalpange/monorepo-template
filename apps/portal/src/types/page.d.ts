import {NextPage} from 'next';
import {ComponentType} from 'react';

export type Page<P = unknown> = NextPage<P> & {
  layout?: ComponentType;
};
