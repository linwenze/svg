const inquirer = require('inquirer');
const ghpages = require('gh-pages');
const execShPromise = require('exec-sh').promise;
const envConfig = [
  'demo',
  'dev',
  'test',
  'prod'
]
function flog (...args) {
  args.unshift('\n--->')
  args.push('\n')
  console.log(...args)
}
async function deploy() {
  const { env } = await inquirer.prompt([{
    name: 'env',
    message: '部署什么环境?',
    type: 'list',
    default: 'test',
    choices: envConfig
  }])

  const { build } = await inquirer.prompt([{
    name: 'build',
    type: 'confirm',
    message: `是否需要重新build 运行npm run build-${env}命令?`
  }])

  let { message } = await inquirer.prompt([{
    name: 'message',
    message: '请输入commit message，默认为版本更新：',
    type: 'input',
  }])
  message = message === '' ? '版本更新' : message
  if (build) {
    try {
      await execShPromise(`npm run build-${env}`)
      flog('打包完成')
    } catch (err) {
      flog('build err', err)
      return
    }
  }
  await publish({
    message,
  }).then(async (res) => {
    flog('推送成功')

    await execShPromise('git fetch')
    // await execShPromise(`echo ${tag} | clip`)
  }).catch((err) => {
    flog(err, '推送失败')
    return
  })

}
async function publish(options) {
  return new Promise((resolve, reject) => {
    const publishOptions = {
      branch: 'build',
      ...options,
    }
    ghpages.publish('dist', publishOptions, (err) => {
      if (err === undefined) {
        resolve()
      }
      reject(err)
    })
  })
}

deploy()
