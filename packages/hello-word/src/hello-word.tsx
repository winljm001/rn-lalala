import type { FC } from "react"
import { Text, View } from "react-native"

export interface HelloWordProps {}
export const HelloWord: FC<HelloWordProps> = () => {
  return (
    <View>
      <Text>HelloWord</Text>
    </View>
  )
}
