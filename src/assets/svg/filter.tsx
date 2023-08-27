import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const FilterSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 390 390"
    fill={'#0BAFFF'}
    {...props}
  >
    <Path
      d="M362.072 63c.1-.3-.1-.6-.1-.9V10c.2-5.3-4-9.8-9.4-10h-315c-5.3 0-9.7 4.4-9.6 9.7v52.4c0 .3-.2.6-.1.9 0 .1-.1.3 0 .4v.5c0 .2 0 .3.1.5s.1.3.1.4c0 .1.1.3.1.5 0 .1.1.3.1.4.1.2.1.3.2.5.1.1.1.3.2.4.1.1.1.3.2.4.1.1.2.3.2.4 0 .1.2.3.2.4.1.1.2.3.3.4s.2.2.2.3c0 0 .2 0 .3.1l119.9 141V380c-.1 3.8 2 7.3 5.5 9 1.3.6 2.7 1 4.2 1 2.3 0 4.5-.8 6.2-2.2l70.6-57.3c2.3-1.9 3.6-4.8 3.5-7.8V209.6l119.8-141s.1 0 .2-.1l.3-.3c.1-.1.2-.3.3-.4s.2-.3.3-.4c.1-.1.2-.3.2-.4.1-.1.2-.3.2-.4.1-.1.1-.3.2-.4.1-.2.1-.3.2-.5.1-.1.1-.3.1-.4.1-.2.1-.3.1-.5s.1-.3.1-.4c0-.1.1-.3.1-.5s.1-.4.1-.5c0-.1-.2-.3-.1-.4zm-139.5 136.4c-1.6 1.8-2.5 4.1-2.6 6.5v112l-50 41.1V205.9c-.1-2.4-1-4.7-2.6-6.5L59.172 72h271.6l-108.2 127.4zM341.972 52h-294V20h294v32z"
      data-original="#0BAFFF"
    />
  </Svg>
)

export default FilterSvg
