import { useViewportSize } from '@mantine/hooks'

export default function useWidthCard() {
   const { width: viewPortWidth } = useViewportSize()

   return viewPortWidth <= 522 ? `${viewPortWidth}px` : '522px'
}
