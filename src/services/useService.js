import { useContext } from 'react'
import { ServiceContext } from './ServiceProvider'

function useService(services) {
  const container = useContext(ServiceContext)
  const resolved = {}
  for (const service of services) {
    resolved[service] = container.resolve(service)
  }
  return resolved
}

export default useService
