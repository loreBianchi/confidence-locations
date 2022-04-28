import { Badge } from "@chakra-ui/react"
import { FC } from "react"

interface LocationTypeProps {
  type: string;
}

const LocationType: FC<LocationTypeProps> = ({ type }) => {

  function handleColorScheme() {
    switch (type.toLowerCase()) {
      case 'personal':
        return 'green'    
      case 'business':
        return 'purple'    
      case 'hotel':
        return 'yellow'    
      case 'airbnb':
        return 'red'    
      case 'general':
        return 'whiteAlpha'    
      case 'office':
        return 'yellow'    
      default:
        return 'teal';
    }
  }

  return (
    <Badge height="18px" colorScheme={handleColorScheme()}>
      {type}
    </Badge>
  )
}

export default LocationType
