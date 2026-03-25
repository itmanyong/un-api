/**
 * 发布npm包的脚本
 */
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'
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
                    console.error(`❌ 复制 ${name} 失败:`, err)
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
    // 输入设置版本号
    const version = process.argv[2]
    if (!version) {
        console.error('❌ 请提供版本号 例如: npm run release 1.0.0')
        process.exit(1)
    }
    // 更新package.json版本号
    const pkgPath = path.resolve(process.cwd(), './packages/core/package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    pkg.version = version
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8')
    // 复制文档
    const dirs = []
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
    setTimeout(() => {
        spawn('pnpm', ['build'], { stdio: 'inherit' }).on('close', (code) => {
            if (code === 0) {
                // 使用 spawn 执行命令
                spawn('pnpm', ['--filter', '@itmanyong/un-api', 'publish', '--access=public', '--no-git-checks'], { stdio: 'inherit' }).on('close', (publishCode) => {
                    if (publishCode === 0) {
                        console.log('✔️ 发布包成功')
                        setTimeout(() => {
                            // dirs.map(dir => deletePkgPath(dir))
                            // fiels.map(file => deletePkgPath(file))
                        }, 1e3)
                    } else {
                        console.error(`❌ 发布包失败，退出码: ${publishCode}`)
                    }
                })
            } else {
                console.error(`❌ 构建失败，退出码: ${code}`)
            }
        })
    }, 5e2)
}


run()