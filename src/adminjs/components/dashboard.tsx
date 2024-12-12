import React, { useEffect, useState } from 'react'
import { H1, H2, Table, TableHead, TableRow, TableCell, TableBody} from '@adminjs/design-system'
import { ApiClient, useCurrentAdmin } from 'adminjs'

export default function Dashboard() {
    const [data, setData] = useState(null)
    const [currentAdmin] = useCurrentAdmin()
    const api = new ApiClient()


    async function fetchDashboardData() {
        const res = await api.getDashboard()
        setData(res.data)
    }
    
    useEffect(() => {
        fetchDashboardData()
    }, [])


    return (
        <section style={{ padding: '1.5rem' }}>
        <H1>Seja bem-vindo, {currentAdmin?.name}!</H1>
  
        <section style={{ backgroundColor: '#FFF', padding: '1.5rem' }}>
          <H2>Resumo dos documentos</H2>
          <Table>
            <TableHead>
                <TableRow style={{ backgroundColor: '#006400' }}>
                <TableCell style={{ color: "#FFF" }}>Documentos</TableCell>
                <TableCell style={{ color: "#FFF" }}>Registros</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data ?
                  Object.entries(data).map(([resource, count]) => (
                    <TableRow key={resource}>
                      <TableCell>{resource}</TableCell>
                      <TableCell>{count}</TableCell>
                    </TableRow>
                  ))
                  :
                  <></>
              }
            </TableBody>
          </Table>
        </section>
      </section>
    )
}