
## 1.プロジェクトを作成
https://nextjs.org/docs/getting-started/installation

```
npx create-next-app@latest
```
```
Detail Configuration

Need to install the following packages:
create-next-app@14.0.4
Ok to proceed? (y) 
✔ What is your project named? … template-next
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes
? What import alias would you like configured? › @/*
```


## 2. node version セットアップ
公式によると、18.17以上が必要条件となっている。
https://nextjs.org/docs/getting-started/installation
```
nodenv isntall 20.10.0
nodenv local 20.10.0
```

## 3. pnpm セットアップ

https://pnpm.io/installation

voltaを使用していたので以下のコマンドを使用。

```
volta install node
volta install pnpm
```

公式では version 8 が安定しているため、8以上で固定しておく。

.npmrc をプロジェクトの root に作成し以下を記述。
```
engine-strict=true
```
package.json に以下を記述。

```package.json
  "engines": {
    "pnpm": ">=8",
    "npm": "please_use_pnpm_instead",
    "yarn": "please_use_pnpm_instead"
  },
```
最後に pnpm install 実行
```
pnpm update
pnpm istall
```
