import type { SopFormInstance } from "../form"
import type { SopCheckItemResultPayload } from "../graphql/generated/types"

export interface CommonProps {
  form: SopFormInstance
  question: SopCheckItemResultPayload
  namePrefix: (string | number)[]
  name: (string | number)[]
  formUuid: string
  uuid: string
  backUpload: boolean
}

export interface PreviewCommonProps {
  question: SopCheckItemResultPayload
  namePrefix: (string | number)[]
  name: (string | number)[]
}
