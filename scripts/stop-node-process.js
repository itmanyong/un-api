import { execSync } from 'child_process';

/**
 * 结束由上次运行的 Node 进程
 * @description 清理上次运行dev命令留下来的node进程
 */



/**
 * 获取当前运行的 Node 进程列表（排除当前脚本）
 * @returns {Array<{pid: string, cmd: string}>}
 */
function getNodeProcesses() {
    try {
        const output = execSync(
            'powershell -Command "Get-Process node | Select-Object Id, @{N=\'CommandLine\';E={(Get-CimInstance Win32_Process -Filter \\"ProcessId=$($_.Id)\\" -ErrorAction SilentlyContinue).CommandLine}} | ConvertTo-Csv -NoTypeInformation"',
            { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024 },
        );

        const lines = output.trim().split("\n").slice(1);
        const processes = [];
        const currentPid = process.pid.toString();

        for (const line of lines) {
            const parts = line.replace(/^"|"$/g, "").split('","');
            if (parts.length >= 2) {
                const pid = parts[0].trim();
                const cmd = parts[1] ? parts[1].replace(/^"|"$/g, "").trim() : "";

                if (pid && pid !== currentPid && pid !== "0") {
                    processes.push({ pid, cmd });
                }
            }
        }
        return processes;
    } catch (error) {
        console.error("获取 Node 进程失败:", error.message);
        return [];
    }
}

/**
 * 检查进程是否存在
 * @param {string} pid
 * @returns {boolean}
 */
function isProcessRunning(pid) {
    try {
        execSync(`tasklist /FI "PID eq ${pid}" /FO CSV /NH`, { encoding: "utf-8" });
        return true;
    } catch {
        return false;
    }
}

/**
 * 结束指定 PID 的进程
 * @param {string} pid
 */
function killProcess(pid) {
    try {
        execSync(`taskkill /PID ${pid} /F /T`, { stdio: "ignore" });
        console.log(`✓ 已结束进程 PID: ${pid}`);
        return true;
    } catch (error) {
        console.error(`✗ 无法结束进程 PID: ${pid}`, error.message);
        return false;
    }
}
/**
 * 获取当前目录名
 * @returns {string} 目录名
 */
function getCurrentDirectoryName() {
    try {
        const output = execSync("echo %CD%", { encoding: "utf-8" });
        return output.trim().split("\\").pop();
    } catch (error) {
        console.error("获取当前目录名失败:", error.message);
        return null;
    }
}

/**
 * 主函数 - 清理上次运行的 Node 进程
 */
function stopLastNodeProcesses() {
    // 保存当前运行的 dev 进程供下次使用
    console.log("正在查找上次运行遗留的 Node 进程...\n");
    const currentNodeProcesses = getNodeProcesses();
    const folderName = getCurrentDirectoryName();
    const folderProcesses = currentNodeProcesses.filter((p) => {
        if (!p.cmd.includes(folderName)) return false;
        const cmds = p.cmd.split(" ");
        if (cmds[0] !== '"node"') return false;
        return ['npm', 'pnpm', 'cnpm', 'yarn'].some(pkg => cmds[1].includes(`\\node_modules\\${pkg}\\bin\\${pkg}`)) || false
    });
    if (folderProcesses.length <= 0) {
        console.log("没有找到遗留的 Node 进程。\n");
        return;
    }
    console.log(`找到 ${folderProcesses.length} 个上次运行的进程:\n`);
    console.log(`正在处理遗留的 Node 进程...`);

    for (const pid of folderProcesses.map((v) => v.pid)) {
        if (isProcessRunning(pid)) {
            if (killProcess(pid)) {
                console.log(`✓ 已结束进程 PID: ${pid}`);
            }
        }
    }
    console.log(`✓ 处理执行完成  已处理 ${folderProcesses.length} 个进程`);
}

// 执行主函数
stopLastNodeProcesses();
