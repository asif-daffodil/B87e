import {
  type RouteConfig,
  route,
  layout,
  index,
} from '@react-router/dev/routes';

export default [
  layout('./layout/layout.tsx', [
    index('routes/home.tsx'),
    route('/about', 'routes/about.tsx'),
  ]),

  
] satisfies RouteConfig;
