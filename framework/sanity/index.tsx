import { getCommerceProvider, useCommerce as useCoreCommerce } from '@commerce'
import { sanityProvider, SanityProvider } from './provider'

export { sanityProvider }
export type { SanityProvider }

export const CommerceProvider = getCommerceProvider(sanityProvider)

export const useCommerce = () => useCoreCommerce<SanityProvider>()
