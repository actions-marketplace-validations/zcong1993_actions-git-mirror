import { URL } from 'url'
import core from '@actions/core'
import { exec } from '@actions/exec'

const currentRepo = `https://github.com/${process.env.GITHUB_REPOSITORY}.git`

const addOauth2Token = (repoUrl: string, token: string) => {
  const u = new URL(repoUrl)
  u.username = 'oauth2'
  u.password = token
  return u.toString()
}

const workdir = 'work'

async function run(): Promise<void> {
  try {
    const destRepo = core.getInput('dest-repo', { required: true })
    const destToken = core.getInput('dest-token', { required: true })
    const repoToken = core.getInput('repo-token')

    if (!destRepo.startsWith('https://')) {
      throw new Error('only support https repo type now')
    }

    // git clone --bare current repo
    await exec('git', [
      'clone',
      '--bare',
      addOauth2Token(currentRepo, repoToken),
      workdir,
    ])

    // git push --mirror dest repo
    await exec(
      'git',
      ['push', '--mirror', addOauth2Token(destRepo, destToken)],
      {
        cwd: `./${workdir}`,
      }
    )
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
