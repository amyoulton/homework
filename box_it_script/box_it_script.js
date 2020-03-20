// Drawline Border Functions

const drawLine = (n) =>  "─".repeat(n)
const drawTopBorder = (n) => "┌" + drawLine(n) + "┐"
const drawMiddleBorder = (n) => "├" + drawLine(n) + "┤"
const drawBottomBorder = (n) => "└" + drawLine(n) + "┘"

// Draw Bars Around Function

const drawBarsAround = (string) => "|" + string + "|"