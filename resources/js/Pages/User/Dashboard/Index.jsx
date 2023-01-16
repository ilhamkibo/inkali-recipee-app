import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function Dashboard({auth}) {
  return (
    <Authenticated auth={auth}>
      <Head title="Resep" />
    <div>
        test
    </div>
    </Authenticated>
      
  )
}
