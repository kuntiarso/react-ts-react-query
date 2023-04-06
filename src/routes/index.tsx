import React from 'react'
import { createRoutesFromElements, Route, RouteObject } from 'react-router-dom'

import { AppLayout } from '~/components'
import { Details } from '~/pages/Details'
import { Home } from '~/pages/Home'

const Routes: React.ReactNode = (
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path="details" element={<Details />} />
  </Route>
)

export const routes: RouteObject[] = createRoutesFromElements(Routes)
