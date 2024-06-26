import { RouteObject } from 'react-router-dom';

export type RouteObjectWithMeta = {
  children?: RouteObjectWithMeta[];
  meta?: {
    // 标题
    title?: string;
    showTabbar?: boolean;
    showFloatMenu?: boolean;
    [propName: string]: any;
  };
} & RouteObject;
