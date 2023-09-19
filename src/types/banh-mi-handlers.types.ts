import { BanhMiRequest, BanhMiResponse } from "../core"

export interface BanhMiNextFunctionResult {
    shouldContinue?: boolean
}
export type BanhMiNextFunction = (value: string | boolean) => BanhMiNextFunctionResult
export type BanhMiHandler = (req: BanhMiRequest, res: BanhMiResponse, next?: BanhMiNextFunction) => any | Promise<any>



