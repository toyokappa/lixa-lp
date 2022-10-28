import * as ctfCda from 'contentful'

export default (context, inject) => {
  const cdaConfig = {
    space: context.env.ctfSpaceId,
    accessToken: context.env.ctfCdaAccessToken
  }

  const ctfCdaClient = ctfCda.createClient(cdaConfig)
  inject('ctfCdaClient', ctfCdaClient)
}