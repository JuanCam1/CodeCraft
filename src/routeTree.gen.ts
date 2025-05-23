/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as CategoriesIndexImport } from './routes/categories/index'
import { Route as CategoriesCategorySlugImport } from './routes/categories/$categorySlug'
import { Route as ArticleFrontendReactHooksImport } from './routes/article/frontend/react/hooks'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CategoriesIndexRoute = CategoriesIndexImport.update({
  id: '/categories/',
  path: '/categories/',
  getParentRoute: () => rootRoute,
} as any)

const CategoriesCategorySlugRoute = CategoriesCategorySlugImport.update({
  id: '/categories/$categorySlug',
  path: '/categories/$categorySlug',
  getParentRoute: () => rootRoute,
} as any)

const ArticleFrontendReactHooksRoute = ArticleFrontendReactHooksImport.update({
  id: '/article/frontend/react/hooks',
  path: '/article/frontend/react/hooks',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/categories/$categorySlug': {
      id: '/categories/$categorySlug'
      path: '/categories/$categorySlug'
      fullPath: '/categories/$categorySlug'
      preLoaderRoute: typeof CategoriesCategorySlugImport
      parentRoute: typeof rootRoute
    }
    '/categories/': {
      id: '/categories/'
      path: '/categories'
      fullPath: '/categories'
      preLoaderRoute: typeof CategoriesIndexImport
      parentRoute: typeof rootRoute
    }
    '/article/frontend/react/hooks': {
      id: '/article/frontend/react/hooks'
      path: '/article/frontend/react/hooks'
      fullPath: '/article/frontend/react/hooks'
      preLoaderRoute: typeof ArticleFrontendReactHooksImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/categories/$categorySlug': typeof CategoriesCategorySlugRoute
  '/categories': typeof CategoriesIndexRoute
  '/article/frontend/react/hooks': typeof ArticleFrontendReactHooksRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/categories/$categorySlug': typeof CategoriesCategorySlugRoute
  '/categories': typeof CategoriesIndexRoute
  '/article/frontend/react/hooks': typeof ArticleFrontendReactHooksRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/categories/$categorySlug': typeof CategoriesCategorySlugRoute
  '/categories/': typeof CategoriesIndexRoute
  '/article/frontend/react/hooks': typeof ArticleFrontendReactHooksRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/categories/$categorySlug'
    | '/categories'
    | '/article/frontend/react/hooks'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/categories/$categorySlug'
    | '/categories'
    | '/article/frontend/react/hooks'
  id:
    | '__root__'
    | '/'
    | '/categories/$categorySlug'
    | '/categories/'
    | '/article/frontend/react/hooks'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CategoriesCategorySlugRoute: typeof CategoriesCategorySlugRoute
  CategoriesIndexRoute: typeof CategoriesIndexRoute
  ArticleFrontendReactHooksRoute: typeof ArticleFrontendReactHooksRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CategoriesCategorySlugRoute: CategoriesCategorySlugRoute,
  CategoriesIndexRoute: CategoriesIndexRoute,
  ArticleFrontendReactHooksRoute: ArticleFrontendReactHooksRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/categories/$categorySlug",
        "/categories/",
        "/article/frontend/react/hooks"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/categories/$categorySlug": {
      "filePath": "categories/$categorySlug.tsx"
    },
    "/categories/": {
      "filePath": "categories/index.tsx"
    },
    "/article/frontend/react/hooks": {
      "filePath": "article/frontend/react/hooks.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
