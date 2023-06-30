---
title: Hello World
nav:
  title: test
  path: /hello
group:
  title: 组件
  path: /packages
  order: 0
---

# Hello World

> 示例

<!-- <code src="./__fixtures__/demo.tsx"></code> -->

```tsx
import type { FC } from "react"
import { Text, View } from "react-native"

export interface HelloWordProps {}
const HelloWord: FC<HelloWordProps> = () => {
  return (
    <View>
      <Text>HelloWord</Text>
    </View>
  )
}
export default HelloWord
```
