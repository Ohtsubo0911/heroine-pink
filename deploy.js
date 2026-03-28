// deploy.js
// _site_web/ の内容を /public_html/heroine.pink へFTPアップロードするスクリプト
// パスワードは安全のため .env から読み込みます

const ftp = require("basic-ftp")
const path = require("path")
require('dotenv').config()

async function main() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "m1001.coreserver.jp",
            user: "aycarumba",
            password: process.env.FTP_PASSWORD,
            secure: false, // SFTPの場合はtrue
            port: 21 // SFTPなら22
        })
        // アップロード先ディレクトリへ移動
        await client.ensureDir("/public_html/heroine.pink")
        await client.clearWorkingDir() // 既存ファイルを削除（必要に応じて）
        // _site_web/ の内容をアップロード
        await client.uploadFromDir(path.join(__dirname, "_site_web"))
        console.log("アップロード完了")
    }
    catch(err) {
        console.error(err)
    }
    client.close()
}

main()