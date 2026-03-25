/**
 * 发布npm包的脚本
 */
import fs from 'fs'
import path from 'path'
import { exec, spawn } from 'child_process'
/**
 * 复制文档到发布包目录
 * @param {string} name - 要复制的文件或目录名称
 */
const copyPkgPath = (name) => {
    return new Promise((resolve, reject) => {
        const srcPath = path.resolve(process.cwd(), name)
        const destPath = path.resolve(process.cwd(), './packages/core/', name)
        if (fs.existsSync(srcPath)) {
            fs.cp(srcPath, destPath, {
                recursive: true,
                force: true
            }, (err) => {
                if (err) {
                    console.error(`复制 ${name} 失败:`, err)
                    reject(err)
                } else {
                    resolve()
                }
            })
            return;
        }
        resolve()
    })
}
/**
 * 删除发布包目录文档
 * @param {string} name - 要删除的文件或目录名称
 */
const deletePkgPath = (name) => {
    return new Promise((resolve, reject) => {
        const pkgPath = path.resolve(process.cwd(), './packages/core/', name)
        if (fs.existsSync(pkgPath)) {
            fs.rm(pkgPath, {
                recursive: true,
                force: true
            }, (err) => {
                if (err) {
                    console.error(`删除 ${name} 失败:`, err)
                    reject(err)
                } else {
                    resolve()
                }
            })
            return;
        }
        resolve()
    })
}
/**
 * 开始发布包
 */
const run = async () => {
    const dirs = ["docs"]
    const fiels = ["README.md", "CHANGELOG.md"]
    // 删除发布包目录文档
    await Promise.all([
        ...dirs.map(dir => deletePkgPath(dir)),
        ...fiels.map(file => deletePkgPath(file))
    ])
    // 复制文档到发布包目录
    await Promise.all([
        ...dirs.map(dir => copyPkgPath(dir)),
        ...fiels.map(file => copyPkgPath(file))
    ])
    // 执行发布包命令
    spawn('pnpm', ['build'], { stdio: 'inherit' }).on('close', (code) => {
        if (code === 0) {
            // 使用 spawn 执行命令
            spawn('pnpm', ['--filter', '@itmanyong/un-api', 'publish', '--access=public', '--no-git-checks'], { stdio: 'inherit' }).on('close', (publishCode) => {
                if (publishCode === 0) {
                    console.log('发布包成功')
                } else {
                    console.error(`发布包失败，退出码: ${publishCode}`)
                }
            })
        } else {
            console.error(`构建失败，退出码: ${code}`)
        }
    })
}


run()