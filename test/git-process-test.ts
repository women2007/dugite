import * as chai from 'chai'
const expect = chai.expect

import { GitProcess, GitError } from '../lib'

describe('git-process', () => {
  it('can launch git', async () => {
    const result = await GitProcess.execWithOutput([ '--version' ], __dirname)
    expect(result.stdout.length).to.be.greaterThan(0)
  })

  it('can parse errors', () => {
    const error = GitProcess.parseError('fatal: Authentication failed')
    expect(error).to.equal(GitError.SSHAuthenticationFailed)
  })
})
