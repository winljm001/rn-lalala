import { defineConfig } from "dumi"
import { readdirSync } from "fs"
import { join } from "path"

const headPkgList: any = []
// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, "packages")).filter(
  (pkg) => pkg.charAt(0) !== "." && !headPkgList.includes(pkg),
)

const alias = pkgList.reduce(
  (pre, pkg) => {
    pre[`@rn-lalala/${pkg}`] = join(__dirname, "packages", pkg, "src")
    return {
      ...pre,
    }
  },
  { "react-native": "react-native-web" },
)
console.log(alias)

export default defineConfig({
  title: "dumi",
  logo: "https://avatars.githubusercontent.com/u/26362957?s=400&u=f0e02a46e137a141c483798140f5b649795c3ea0&v=4",
  outputPath: "docs-dist",
  resolve: {
    docDirs: ["packages", "docs"],
  },
  alias,
  // more config: https://d.umijs.org/config
})
