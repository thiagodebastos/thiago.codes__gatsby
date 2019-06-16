import fs from "fs"
import path from "path"
import postTemplate from "./postTemplate"

const args = process.argv.slice(2)

function makeDir(dir: string): void {
  fs.mkdirSync(`${dir}/images`, { recursive: true })
}

function generate(postName: string): void {
  const formattedFolderName = postName
    .toLowerCase()
    .split(" ")
    .join("-")
  makeDir(`content/blog/${formattedFolderName}`)

  fs.writeFileSync(
    `content/blog/${formattedFolderName}/index.md`,
    postTemplate(postName, formattedFolderName)
  )

  console.log(`
  Created new post: ${postName} at content/blog/${formattedFolderName}
  `)
}

generate(args[0])
