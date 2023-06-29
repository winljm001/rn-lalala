---
title: Hello World
nav:
  title: test
  path: /component
group:
  title: 示例
  path: /basic
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
