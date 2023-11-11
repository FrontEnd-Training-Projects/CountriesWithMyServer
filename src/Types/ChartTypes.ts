interface TooltipPayload {
    value: number
}

export interface TooltipData {
    payload?: Array<TooltipPayload>,
    active?: boolean,
    label?: string
}

export interface ChartData {
	name: string,
	population: string | number,
	color?: string
}