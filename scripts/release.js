/**
 * 发布npm包的脚本
 */
import fs from 'fs'
import path from 'path'
import { spawn, spawnSync } from 'child_process'
/**
 * 复制文档到发布包目录
 * @param {string} srcPath - 要复制的文件或目录路径
 * @param {string} destPath - 目标路径
 * @returns {Promise} - 复制操作的Promise对象
 */
const copyPkgPath = (srcPath, destPath) => {
    return new Promise((resolve, reject) => {
        const srcFullPath = path.resolve(process.cwd(), srcPath)
        const destFullPath = path.resolve(process.cwd(), destPath)
        if (fs.existsSync(srcFullPath)) {
            fs.cp(srcFullPath, destFullPath, {
                recursive: true,
                force: true
            }, (err) => {
                if (err) {
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
                    console.error(`❌ 删除 ${name} 失败:`, err)
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
    // 生成CHANGELOG.md
    const changesetResult = spawnSync('pnpm', ['changeset', 'version'], { stdio: 'inherit' })
    if (!!changesetResult.status) {
        console.error(`❌ 生成更新日志失败，退出码: ${changesetResult.status} ${changesetResult.stderr.toString()}`)
        return;
    }
    console.log('✔️ 生成 CHANGELOG.md 成功')
    // 复制CHANGELOG.md
    const cpChangelogResult = await copyPkgPath("./packages/core/CHANGELOG.md", "./CHANGELOG.md")
    if (!!cpChangelogResult) {
        console.error(`❌ 复制 CHANGELOG.md 失败 :`, cpChangelogResult)
        return;
    }
    console.log('✔️ 复制 CHANGELOG.md 成功')
    // 复制README.md
    const cpResult = await copyPkgPath("./README.md", "./packages/core/README.md")
    if (!!cpResult) {
        console.error(`❌ 复制 README.md 文档失败 :`, cpResult)
        return;
    }
    console.log('✔️ 复制 README.md 文档成功')
    // 发布包
    const publishResult = spawnSync('pnpm', ['changeset', 'publish'], { stdio: 'inherit' })
    if (!!publishResult.status) {
        console.error(`❌ 发布包失败，退出码: ${publishResult.status} ${publishResult.stderr.toString()}`)
        return;
    }
    console.log('✔️ 发布包成功')
}


run()