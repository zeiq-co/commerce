import { MutationHook } from '@commerce/utils/types'
import useLogin, { UseLogin } from '@commerce/auth/use-login'

export default useLogin as UseLogin<typeof handler>

// TODO:
export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher() {
    return null
  },
  useHook: () => () => {
    return async function () {}
  },
}
