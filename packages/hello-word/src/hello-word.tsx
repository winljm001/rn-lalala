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
