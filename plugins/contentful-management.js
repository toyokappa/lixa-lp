import * as ctfCma from 'contentful-management'

export default async (context, inject) => {
  const cmaConfig = {
    accessToken: context.env.ctfCmaAccessToken
  }

  const client = ctfCma.createClient(cmaConfig)
  const ctfSpace = await client.getSpace(context.env.ctfSpaceId)
  const ctfCmaClient = await ctfSpace.getEnvironment(context.env.ctfEnvId)
  inject('ctfCmaClient', ctfCmaClient)
}