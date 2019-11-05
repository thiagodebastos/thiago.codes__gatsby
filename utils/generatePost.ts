import fs from "fs"
import postTemplate from "./postTemplate"

const args = process.argv.slice(2)

function makeDir(dir: string): void {
  fs.mkdirSync(`${dir}/images`, { recursive: true })
}

function formatString(str: string, separator: string = "-"): string {
  return str
    .toLowerCase()
    .split(" ")
    .join(separator)
}

function generate(postName: string, category: string = "blog"): void {
  const formattedFolderName = formatString(postName)

  makeDir(`content/${category}/${formattedFolderName}`)

  fs.writeFileSync(
    `content/${category}/${formattedFolderName}/index.md`,
    postTemplate(postName, formattedFolderName)
  )

  console.log(`
  Created new post: ${postName} at content/${category}/${formattedFolderName}
  `)
}

generate(args[0])
