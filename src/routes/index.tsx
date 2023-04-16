import React, { ReactNode } from 'react'
import { createRoutesFromElements, Route, RouteObject } from 'react-router-dom'
import { AppLayout } from '~/components'
import { HomePage } from '~/pages/Home'
import { UserDetail } from '~/pages/UserDetail'
import { UserList } from '~/pages/UserList'

const Routes: ReactNode = (
  <Route element={<AppLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route index path="users" element={<UserList />} />
    <Route path="users/:slug" element={<UserDetail />} />
  </Route>
)

export const routes: RouteObject[] = createRoutesFromElements(Routes)
