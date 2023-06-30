import type { FC } from "react"
import { Text, View } from "react-native"

export interface HelloWord1Props {}
export const HelloWord1: FC<HelloWord1Props> = () => {
  return (
    <View>
      <Text>HelloWord1</Text>
    </View>
  )
}
